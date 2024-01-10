/**
 * This file contains the root router of your tRPC-backend
 */
import { createCallerFactory, router } from '../trpc';
import { covidRouter } from './covid';
import { favoritesRouter } from './favorites';

export const appRouter = router({
  covid: covidRouter,
  favorites: favoritesRouter,
});

export const createCaller = createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;
