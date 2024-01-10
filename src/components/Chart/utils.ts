import { VaccinationData } from '~/types';
import { G2ChartData } from '../G2ChartWrapper';

export const processVaccinationData = (
  data: VaccinationData,
): G2ChartData[] => {
  const { percentage } = data;
  return [
    { type: 'Vaccinated', value: percentage },
    { type: 'Unvaccinated', value: 100 - percentage },
  ];
};
