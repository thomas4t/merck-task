import { FC, ReactNode } from 'react';
import { Layout, Typography } from 'antd';

const { Title } = Typography;
const { Header, Content } = Layout;

type DefaultLayoutProps = { children: ReactNode };

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Header
        style={{
          height: '10%',
          backgroundColor: '#fff',
          paddingBottom: '3em',
          boxShadow: '9px -7px 5px 10px #aaa',
        }}
      >
        <Title>Merck task</Title>
      </Header>
      <Content style={{ padding: '48px' }}>{children}</Content>
    </Layout>
  );
};
