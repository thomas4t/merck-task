import { trpc } from '../utils/trpc';
import { NextPageWithLayout } from './_app';
import Chart from '~/components/Chart';
import { Row, Typography } from 'antd';
import ActionPanel from '~/components/ActionPanel';

const IndexPage: NextPageWithLayout = () => {
  // todo type this
  const vac = trpc.covid.vacPercentage.useQuery();
  console.log('isLoading', vac.isLoading);
  console.log('data', vac.data);

  return (
    <>
      <Row justify="space-between">
        <Typography.Title level={3}>Home page</Typography.Title>
        <ActionPanel />
      </Row>

      <Row justify="start">
        <Chart name="round" title="Title 1" type="bar" data={[]} />
        <Chart name="circu" title="Title 2" type="pie" data={[]} />
      </Row>
    </>
  );
};

export default IndexPage;

/**
 * If you want to statically render this page
 * - Export `appRouter` & `createContext` from [trpc].ts
 * - Make the `opts` object optional on `createContext()`
 *
 * @link https://trpc.io/docs/ssg
 */
// export const getStaticProps = async (
//   context: GetStaticPropsContext<{ filter: string }>,
// ) => {
//   const ssg = createServerSideHelpers({
//     router: appRouter,
//     ctx: await createContext(),
//   });
//
//   await ssg.post.all.fetch();
//
//   return {
//     props: {
//       trpcState: ssg.dehydrate(),
//       filter: context.params?.filter ?? 'all',
//     },
//     revalidate: 1,
//   };
// };
