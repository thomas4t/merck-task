import axios from 'axios';
import { router, publicProcedure } from '../trpc';

// TODO move into ENV ?
const endpoint = 'https://api.coronavirus.data.gov.uk/v1/data';
const metric = 'cumVaccinationCompleteCoverageByVaccinationDatePercentage';

const createVacParams = (areaType = 'nation', areaName = 'england') => {
  const filters = [`areaType=${areaType}`, `areaName=${areaName}`].join(';');
  const structure = JSON.stringify({
    date: 'date',
    cum: metric,
  });
  const latestBy = metric;
  return {
    filters,
    structure,
    latestBy,
  };
};

export const covidRouter = router({
  vacPercentage: publicProcedure.query(async () => {
    const params = createVacParams();
    const { data } = await axios.get(endpoint, {
      params,
      timeout: 10000,
    });

    return data;
  }),
});
