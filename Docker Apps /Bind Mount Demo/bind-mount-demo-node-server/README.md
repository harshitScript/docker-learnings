# BIN MOUNT DEMO NODE SERVER
This application server is used to demonstrate the working of bind mounts in the docker container, how to make rela time changes 
in the running docker container, just by changing the file on host machine.

## How to run the application ?
    - Run `npm. install` > generate the `./node-modules` folder.
    - Run `docker build -t bind-mount-demo-node-server` > generate dokcer image.
    - Run `docker run --name bind-mount-node-server  -d -p 60:4000 --mount type=bind,source=./bind-mounted-folder/,target=/server/view/ --env-file .env
      bind-mount-demo-node-server` > run a bind mounted image container
    - Access the application at http://localhost:60

## How to make assertion of bind mount ?
    - Once your conatiner is running.
    - Now make any changes in the ./bind-mounted-folder/index.html.
    - Your changes will be immedietly reflected on http://localhost:60
