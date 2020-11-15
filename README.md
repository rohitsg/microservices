# microservices
Trying react, express, graphql api gateway, sequelize, postgresql, docker container, docker compose


Once docker containers are ready, we need to manually bash into listing and user service, by
`docker exec -it <containerId> [/bin/sh] OR /[ bash]`. Once u r in docker container, it will land u into
`/opt/app`, this will contain all project files. Run command as `yarn db:migrate`, to create db/tables from migrations.