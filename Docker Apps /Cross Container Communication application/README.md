# CROSS CONTAINER COMMUNICATION DOCKER APPLICATION
    - Two containers can communicate internally only if they are in the same network.
    - The internal communication takes place by the container-name instead of localhost.
        - An api request to localhost inside the container refers to the same container not another container.
        - To make an api request (communicate) to another container we have to use the container name instead of localhost.
        - For Example
            API Request from Container (name: server1) running on port 4000(http://localhost:4000/) to another container (name: server2) running on port 3000(http://localhost:3000/):
                http://localhost:3000/ ❌ (would not work)
                http://server2:3000/ ✅ (will work)  

### How to use the application
    - Run `cd server1` > navigates to server1 directory
    - Run `docker build -t server1 .` > generate server1 image
    - Run `cd ../server2` > navigates to server2 directory
    - Run `docker build -t server2 .` > generate server2 image
    - Run `docker compose up` > run both the containers server1 server2

### How to make assertion 
    - Access `http://localhost:4000/` > server1 
    - Access `http://localhost:3000/` > server2
    - Access `http://localhost:4000/second-server-status` > provide the status of server2 via server1