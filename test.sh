#!/bin/bash

# TODO: create and start a postgres database container for testing
password="$DB_PASSWORD"
docker run --name postgres-test -e POSTGRES_PASSWORD="$password" -d -p 5432:5432 postgres
sleep 5

# TODO: run migrations
npm run typeorm:run-migrations

# TODO: run tests
npm run test

# TODO: destroy container
docker stop postgres-test
docker rm postgres-test
