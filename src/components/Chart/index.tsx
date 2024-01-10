import {
  HeartFilled,
  HeartOutlined,
  MessageOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Card, Divider, Row, Spin } from 'antd';
import { Typography } from 'antd';
import G2ChartWrapper, { G2ChartType } from '../G2ChartWrapper';
import { VaccinationData } from '~/types';
import { processVaccinationData } from './utils';
import { ChartId } from '~/models/chart';

const { Text } = Typography;

type ChartProps = {
  id: ChartId;
  title: React.ReactNode;
  type: G2ChartType;
  data: VaccinationData;
  isFavorite: boolean;
  isFavoriteLoading: boolean;
  onAddFavorite: (chartId: ChartId) => void;
  onRemoveFavorite: (chartId: ChartId) => void;
};

const Chart: React.FC<ChartProps> = ({
  id,
  title,
  type,
  data,
  isFavorite,
  isFavoriteLoading,
  onAddFavorite,
  onRemoveFavorite,
}) => {
  const handleToggleFavorite = () => {
    const handle = isFavorite ? onRemoveFavorite : onAddFavorite;
    handle(id);
  };
  const renderFavoriteIcon = () => {
    if (isFavoriteLoading) return <Spin />;
    return isFavorite ? (
      <HeartFilled style={{ fontSize: '150%', color: 'red' }} />
    ) : (
      <HeartOutlined style={{ fontSize: '150%' }} />
    );
  };

  return (
    <Card
      title={title}
      extra={
        <Button
          type="text"
          icon={renderFavoriteIcon()}
          onClick={handleToggleFavorite}
          disabled={isFavoriteLoading}
        />
      }
      style={{ width: 'fit-content', maxWidth: 1000, margin: '16px' }}
      bodyStyle={{ padding: 0 }}
    >
      <G2ChartWrapper id={id} type={type} data={processVaccinationData(data)} />
      <Divider style={{ marginBottom: '7px' }} />
      <Row justify="space-between" style={{ margin: '7px 24px' }}>
        <Avatar key="avatar" size={30} icon={<UserOutlined />} />
        <Button type="text" style={{ display: 'flex', color: 'gray' }}>
          <Text style={{ color: 'gray' }}>3</Text>{' '}
          <MessageOutlined style={{ fontSize: '150%', color: 'gray' }} />
        </Button>
      </Row>
    </Card>
  );
};

export default Chart;
