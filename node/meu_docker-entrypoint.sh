#!/bin/sh
# vim:sw=4:ts=4:et
set -e

echo "Docker-Entrypoint local iniciado"
cd /user/src/app
#npm install
#npm install -g nodemon
npm install express
npm install mysql

echo "Docker-Entrypoint local finalizado"

exec "$@"