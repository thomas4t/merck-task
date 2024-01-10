import { trpc } from '../utils/trpc';
import { NextPageWithLayout } from './_app';
import Chart from '~/components/Chart';
import { Row, Spin, Typography } from 'antd';
import ActionPanel from '~/components/ActionPanel';
import { CHART_TITLES, ChartId } from '~/models/chart';

const IndexPage: NextPageWithLayout = () => {
  const utils = trpc.useUtils();
  const vaccination = trpc.covid.vaccination.useQuery();
  const favorites = trpc.favorites.listCharts.useQuery();

  const onFavoriteChange = async () => {
    await utils.favorites.listCharts.invalidate();
  };

  const addFavoriteChart = trpc.favorites.addChart.useMutation({
    onSuccess: onFavoriteChange,
  });
  const removeFavoriteChart = trpc.favorites.removeChart.useMutation({
    onSuccess: onFavoriteChange,
  });

  const handleAddFavorite = async (chartId: ChartId) => {
    const input = { chartId };
    await addFavoriteChart.mutateAsync(input);
  };

  const handleRemoveFavorite = async (chartId: ChartId) => {
    const input = { chartId };
    await removeFavoriteChart.mutateAsync(input);
  };

  const resolveIsFavorite = (chartId: string) =>
    favorites.data?.items.some((item) => item.chartId === chartId) ?? false;

  const isFavoriteLoading =
    addFavoriteChart.isLoading || removeFavoriteChart.isLoading;

  if (!vaccination.data || !favorites.data) {
    return <Spin />;
  }
  return (
    <>
      <Row justify="space-between">
        <Typography.Title level={3}>Home page</Typography.Title>
        <ActionPanel />
      </Row>
      <Row>
        <Chart
          type="bar"
          data={vaccination.data}
          id={ChartId.VAC_BAR}
          title={CHART_TITLES[ChartId.VAC_BAR]}
          isFavorite={resolveIsFavorite(ChartId.VAC_BAR)}
          isFavoriteLoading={isFavoriteLoading}
          onAddFavorite={handleAddFavorite}
          onRemoveFavorite={handleRemoveFavorite}
        />
        <Chart
          type="pie"
          data={vaccination.data}
          id={ChartId.VAC_PIE}
          title={CHART_TITLES[ChartId.VAC_PIE]}
          isFavorite={resolveIsFavorite(ChartId.VAC_PIE)}
          isFavoriteLoading={isFavoriteLoading}
          onAddFavorite={handleAddFavorite}
          onRemoveFavorite={handleRemoveFavorite}
        />
      </Row>
    </>
  );
};

export default IndexPage;
