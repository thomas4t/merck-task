import { SettingOutlined } from '@ant-design/icons';
import { Card, Divider } from 'antd';
import { Typography } from 'antd';
import G2ChartWrapper, { G2ChartType } from './G2ChartWrapper';

const { Title, Text } = Typography;

type ChartProps = {
  name: string;
  title: React.ReactNode;
  type: G2ChartType;
  data: string[];
};

const Chart: React.FC<ChartProps> = ({ name, title, type }) => {
  return (
    <Card
      title={title}
      extra={<a href="#">More</a>}
      style={{ width: 'fit-content', maxWidth: 1000 }}
      actions={[
        <SettingOutlined key="setting" />,
        // <SettingOutlined key="setting1" />,
        // <EditOutlined key="edit" />,
        // <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <G2ChartWrapper name={name} type={type} />
    </Card>
  );
};

export default Chart;
