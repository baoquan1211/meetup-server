FROM node:20-alpine AS base


FROM base AS deps

#ADD ./cert/cacerts /usr/local/share/ca-certificates/cacerts
#RUN chmod 644 /usr/local/share/ca-certificates/cacerts
#
#RUN apk add ca-certificates --no-check-certificate && update-ca-certificates


RUN apk add --no-cache --no-check-certificate  libc6-compat
WORKDIR /app
ENV NODE_TLS_REJECT_UNAUTHORIZED=0
# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm set strict-ssl false
RUN npm ci --loglevel verbose


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM nginx:1.21.1-alpine as runner

COPY --from=builder /app/dist /var/www/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

WORKDIR /var/www/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]