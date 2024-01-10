import { useEffect } from 'react';
import { Chart } from '@antv/g2';

export type G2ChartType = 'bar' | 'pie';
export type G2ChartData = { type: string; value: unknown };
export type G2ChartWrapperProps = {
  id: string;
  type: G2ChartType;
  data: G2ChartData[];
};

const renderBarChart = (container: string, data: G2ChartData[]) => {
  const chart = new Chart({
    container,
    data,
  });
  chart
    .interval()
    .encode('x', 'type')
    .encode('y', 'value')
    .encode('color', 'type')
    .legend('color', {
      position: 'bottom',
      layout: { justifyContent: 'center' },
    })
    .tooltip((data) => ({
      name: data.type,
      value: data.value,
    }));

  chart.render();
  return chart;
};

const renderPieChart = (container: string, data: G2ChartData[]) => {
  const chart = new Chart({
    container,
    data,
  });
  chart
    .interval()
    .coordinate({ type: 'theta', outerRadius: 0.8 })
    .transform({ type: 'stackY' })
    .encode('y', 'value')
    .encode('color', 'type')
    .legend('color', {
      position: 'bottom',
      layout: { justifyContent: 'center' },
    })
    .tooltip((data) => ({
      name: data.type,
      value: data.value,
    }));

  chart.render();
  return chart;
};

const G2ChartWrapper: React.FC<G2ChartWrapperProps> = ({ id, type, data }) => {
  const container = `container-${id}`;

  useEffect(() => {
    const render = {
      bar: renderBarChart,
      pie: renderPieChart,
    }[type];

    const chart = render(container, data);
    return () => chart.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, container, JSON.stringify(data)]);

  return <div id={container} />;
};

export default G2ChartWrapper;
