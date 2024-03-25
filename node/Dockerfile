FROM node:15

WORKDIR /user/src/app

COPY  meu_docker-entrypoint.sh /

RUN chmod +r /meu_docker-entrypoint.sh
RUN chmod +x /meu_docker-entrypoint.sh

EXPOSE 3000

CMD ["node", "index.js"]