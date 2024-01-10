import { z } from 'zod';
import { Prisma } from '@prisma/client';
import { prisma } from '~/server/prisma';
import { router, publicProcedure } from '../trpc';

const defaultChartSelect = {
  id: true,
  chartId: true,
  createdAt: true,
} satisfies Prisma.FavoriteChartSelect;

export const favoritesRouter = router({
  listCharts: publicProcedure.query(async () => {
    const items = await prisma.favoriteChart.findMany({
      select: defaultChartSelect,
    });
    return {
      items,
    };
  }),
  addChart: publicProcedure
    .input(
      z.object({
        chartId: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const post = await prisma.favoriteChart.create({
        data: input,
        select: defaultChartSelect,
      });
      return post;
    }),
  removeChart: publicProcedure
    .input(
      z.object({
        chartId: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      const post = await prisma.favoriteChart.delete({
        where: input,
        select: defaultChartSelect,
      });
      return post;
    }),
});
