# Merck Next + Prisma + tRPC project

## Features

- 🧙‍♂️ E2E typesafety with [tRPC](https://trpc.io)
- ⚡ Full-stack React with Next.js
- ⚡ Database with Prisma
- ⚙️ VSCode extensions
- 🎨 ESLint + Prettier
- 🔐 Validates your env vars on build and start

### Requirements

- pnpm
- Node >= 18.0.0
- Postgres

## Development

### Start project

- Create .env from .env.example
- Add valid env vars

```bash
pnpm install
pnpm dx
```

### Commands

```bash
pnpm build      # runs `prisma generate` + `prisma migrate` + `next build`
pnpm db-reset   # resets local db
pnpm dev        # starts next.js
pnpm dx         # starts postgres db + runs migrations + seeds + starts next.js
```

---

Based on starter template created by [@alexdotjs](https://twitter.com/alexdotjs).
