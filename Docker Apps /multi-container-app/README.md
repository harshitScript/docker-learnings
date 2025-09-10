# MULTI CONTAINER APP
This multi container application having a react frontend, express backend and redis as the cache, here we demonstrate
how to run the multi conatiner application in one go using docker compose.

## How to use the app ?
    - Run `docker build -t multi-container-app` > generate application build.
    - Run `docker pull redis` > pull official redis image.
    - Run `docker compose up`
    - Access the application at  http://localhost:5500.
