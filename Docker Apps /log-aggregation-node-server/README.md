# LOG AGGREGATION NODE SERVER
A server that demonstrate how a docker volume can be used to share files, resources between two or more isolated conatiners.

## How to run the application ? 
    1. Start the docker desktop/deamon.
    2. Run `npm run generate-volume` if volume `log-aggregation` not exists.
    3. Run `docker compose up`

## How to access the application ?
    1. Application  one will be accessible at:
        - Instance 1:  http://localhost:4000
        - Instance 2:  http://localhost:4001
    2. Any Api request to will record a log:
        - Instance 1:  http://localhost:4000/
        - Instance 2:  http://localhost:4001/
    3. Make API request to either of the host to see aggregated logs form both the servers:
        - Instance 1:  http://localhost:4000/logs
                    OR
        - Instance 2:  http://localhost:4001/logs

## PRINCIPAL
Since a single volume instance is attached to both the servers conatiners, write operations from both the servers will be recorded in the single volume.
