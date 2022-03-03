# Introduction
This repository contains an example of how to combine a frontend and a backend 
into a single application. 

The `apps` folder contains the source code for the frontend and backend folders, respectively.
Furthermore, a `docker-compose.yaml` manifest is written for local development
on the full stack application. 

To do local development, first change to the `apps` folder with `cd apps` then
run the docker-compose stack with the command `docker-compose up --remove-orphans`.

This is start both the frontend and backend as mounted volumes, meaning that any
changes that you make to either will be instantly reflected in both the UI and the Source Code.

Additionally, the `docker-compose.yaml` manifest will spin up a local postgres database.

The `.helm` folder contains a helm chart for the stack and can be used to deploy 
the frontend and backend to a Kubernetes cluster by running 
`helm upgrade --install full-stack-app ./.helm`
