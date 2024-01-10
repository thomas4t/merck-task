import axios from 'axios';
import { router, publicProcedure } from '../trpc';
import { VaccinationPayload } from '~/types';
import { TRPCError } from '@trpc/server';

const endpoint = 'https://api.coronavirus.data.gov.uk/v1/data';
const metric = 'cumVaccinationCompleteCoverageByVaccinationDatePercentage';

const createVaccinationParams = (areaType = 'nation', areaName = 'england') => {
  const filters = [`areaType=${areaType}`, `areaName=${areaName}`].join(';');
  const structure = JSON.stringify({
    date: 'date',
    percentage: metric,
  });
  const latestBy = metric;
  return {
    filters,
    structure,
    latestBy,
  };
};

export const covidRouter = router({
  vaccination: publicProcedure.query(async () => {
    const params = createVaccinationParams();
    const { data } = await axios.get<VaccinationPayload>(endpoint, {
      params,
      timeout: 10000,
    });

    const latest = data.data[0];

    if (!latest) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'No data found',
      });
    }

    return latest;
  }),
});
