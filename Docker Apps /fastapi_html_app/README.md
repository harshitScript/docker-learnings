# FastAPI HTML API
This application demonstarte how to run a python application in a docker container remotely.

### How to run the application (in docker container).
    - Run `docker build -t fastapi-html-app` > generate the docker image
    - Run `docker run --name fastapi-html-app -d -p 40:8000 fast-api-app` > run a docker container
    - Visit `http://localhost:40` > access the application


