/* eslint-disable @typescript-eslint/no-unused-vars */
import * as trpcNext from '@trpc/server/adapters/next';

/**
 * Creates context for each incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext(opts: trpcNext.CreateNextContextOptions) {
  // Login not implemented
  // const session =  await getSession({ req: opts.req });
  return {};
}

export type Context = Awaited<ReturnType<typeof createContext>>;
