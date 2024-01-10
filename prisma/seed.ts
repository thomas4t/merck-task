/**
 * Adds seed data to your db
 *
 * @link https://www.prisma.io/docs/guides/database/seed-database
 */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // const input = {chartId: ''} satisfies Prisma.FavoriteChartCreateInput
  // const post = await prisma.post.create({
  //   data: input,
  //   select: defaultPostSelect,
  // });
  // await prisma.favoriteChart.create upsert({
  //   where: {
  //     id: firstPostId,
  //   },
  //   create: {
  //     id: firstPostId,
  //     title: 'First Post',
  //     text: 'This is an example post generated from `prisma/seed.ts`',
  //   },
  //   update: {},
  // });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
