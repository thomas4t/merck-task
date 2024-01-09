import { useCallback, useEffect, useMemo } from 'react';
import { Chart } from '@antv/g2';

export type G2ChartType = 'bar' | 'pie';
export type G2ChartWrapperProps = { name: string; type: G2ChartType };

const renderBarChart = (container: string) => {
  // TODO
  const data = [
    { type: 'Vaccinated', percent: 65 },
    { type: 'Unvaccinated', percent: 35 },
  ];
  //Initialize chart instance
  const chart = new Chart({
    container,
    //  data,
  });
  // Declare visualization
  chart
    .interval() // Create an Interval tag
    .data(data) // Bind data
    .encode('x', 'type') // Encode x channel
    .encode('y', 'percent') // Encode y channel
    .coordinate({ type: '' })
    .legend('color', {
      position: 'bottom',
      layout: { justifyContent: 'center' },
    });

  // Render visualization
  chart.render();
};

const renderPieChart = (container: string) => {
  // TODO
  const data = [
    { item: 'Item 1', count: 40, percent: 0.4 },
    { item: 'Item 2', count: 60, percent: 0.6 },
  ];

  const chart = new Chart({
    container,
  });

  chart.coordinate({ type: 'theta', outerRadius: 0.8 });

  chart
    .interval()
    .data(data)
    .transform({ type: 'stackY' })
    .encode('y', 'percent')
    .encode('color', 'item')
    .legend('color', {
      position: 'bottom',
      layout: { justifyContent: 'center' },
    })
    // .label({
    //   position: 'inside',
    //   text: (data) => `${data.item}: ${data.percent * 100}%`,
    // })
    .tooltip((data) => ({
      name: data.item,
      value: `${data.percent * 100}%`,
    }));

  chart.render();
};

const G2ChartWrapper: React.FC<G2ChartWrapperProps> = ({ name, type }) => {
  const container = useMemo(() => `container-${name}`, [name]);

  const render = useCallback(() => {
    const handleRender = {
      bar: renderBarChart,
      pie: renderPieChart,
    }[type];
    handleRender(container);
  }, [type, container]);

  useEffect(render, [render]);

  return <div id={container} />;
};

export default G2ChartWrapper;
