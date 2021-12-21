# Install dependencies
FROM node:16-alpine AS deps

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /catlord

COPY package.json package-lock.json ./
RUN npm install

# Build the source code
FROM node:16-alpine AS builder

WORKDIR /catlord

COPY . .
# TODO: create .env.production from github variables?
COPY .env.production ./.env
COPY --from=deps /catlord/node_modules ./node_modules
RUN npm run build:verbose

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /catlord

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder --chown=nextjs:nodejs /catlord/dist ./dist
COPY --from=builder /catlord/node_modules ./node_modules
COPY --from=builder /catlord/package.json ./package.json
COPY --from=builder /catlord/.env.prod ./.env

USER nextjs

EXPOSE 3000
ENV PORT 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node_modules/.bin/next", "start", "./dist/apps/website"]
