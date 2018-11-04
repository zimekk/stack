FROM node:8-alpine

ENV HOME=/code
ENV NPM_CONFIG_LOGLEVEL warn

COPY . $HOME/

WORKDIR $HOME

RUN yarn

EXPOSE 3000 4000

CMD ["yarn", "start"]
