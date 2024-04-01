
FROM node:18.17.1-alpine3.18

# RUN apk --no-cache add git
# RUN npm install -g pnpm@8.7.4 vite@4.4.9
# RUN npm install -g vite@4.4.9

USER node

RUN mkdir /home/node/mw
WORKDIR /home/node/mw

COPY --chown=node:node ./package.json .

# COPY --chown=node:node ../../.git .
# COPY --chown=node:node ../../.gitignore .
# COPY --chown=node:node ../../packages/package-c ./packages/package-c


# COPY --chown=node:node ../../.git ./.git
# COPY --chown=node:node ../../.gitignore ./.gitignore
# COPY --chown=node:node projects/app-b/package.json ./projects/app-b/
# COPY --chown=node:node projects/app-b/public ./projects/app-b/public
# COPY --chown=node:node projects/app-b/src ./projects/app-b/src

# WORKDIR /home/node/mw/projects/app-b

RUN npm install

# Set HMR to use polling
ENV HMR_POLLING_INTERVAL 500

CMD ["npm", "run", "remote"]
