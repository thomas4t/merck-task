import { Button } from 'antd';
import {
  DownloadOutlined,
  FilterOutlined,
  MenuOutlined,
} from '@ant-design/icons';

type ActionPanelProps = {};

const ActionPanel: React.FC<ActionPanelProps> = () => {
  // TODO icons right
  return (
    <div>
      <Button icon={<DownloadOutlined />}>Export to PDF</Button>
      <Button icon={<MenuOutlined />}>Notes (3)</Button>
      <Button icon={<FilterOutlined />}>Filter</Button>
    </div>
  );
};

export default ActionPanel;
