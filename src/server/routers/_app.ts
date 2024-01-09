/**
 * This file contains the root router of your tRPC-backend
 */
import { createCallerFactory, router } from '../trpc';
import { covidRouter } from './covid';
import { postRouter } from './post';

export const appRouter = router({
  post: postRouter,
  covid: covidRouter,
});

export const createCaller = createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;
