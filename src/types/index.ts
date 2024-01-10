export type VaccinationData = {
  date: string;
  percentage: number;
};

export type VaccinationPayload = {
  data: VaccinationData[];
  length: number;
  maxPageLimit: number;
};
