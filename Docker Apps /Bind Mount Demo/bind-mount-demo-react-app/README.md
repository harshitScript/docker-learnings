# BIND MOUNT DEMO REACT APP
This application is used to demonstarte the functionality of bind mount (real-time bi-directional communication between the host (local machine) and the container) provided by docker in real life scenerio.

## How to run the application ?
    - Run `npm. install` > generate the `./node-modules` folder.
    - Run `npm run build` > generate the `./dist` folder.
    - Run `docker build -t bind-mount-demo-react-app .` > generate a docker image.
    - Run `docker run --name bind-mount-demo  -d -p 4000:4173 --mount type=bind,source=./dist/,target=/app/dist/,readonly bind-mount-demo-react-app`  > run a image
      container
    - Access the application at http://localhost:4000

## How to make assertion of bind mount ?
    - Once your conatiner is running.
    - Now make any changes in the local code.
    - Run `npm run build`
    - Your changes will be immedietly reflected on http://localhost:4000

