export enum ChartId {
  VAC_BAR = 'vac-bar',
  VAC_PIE = 'vac-pie',
}

export const CHART_TITLES: Record<ChartId, string> = {
  [ChartId.VAC_BAR]: 'Vaccinated people in UK - Bar %',
  [ChartId.VAC_PIE]: 'Vaccinated people in UK - Pie %',
};
