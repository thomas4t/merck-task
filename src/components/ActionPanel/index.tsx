import { Button } from 'antd';
import {
  DownloadOutlined,
  FilterOutlined,
  MenuOutlined,
} from '@ant-design/icons';

const buttonStyle = {
  marginLeft: '5px',
};

const ActionPanel: React.FC = () => {
  return (
    <div>
      <Button style={buttonStyle}>
        Export to PDF <DownloadOutlined />
      </Button>
      <Button style={buttonStyle}>
        Notes (3) <MenuOutlined />
      </Button>
      <Button style={buttonStyle}>
        Filter <FilterOutlined />
      </Button>
    </div>
  );
};

export default ActionPanel;
