
```
├── docker-compose.yaml
├── haproxy.cfg
├── kubernetes
│   ├── makepost-autoscale.yaml
│   ├── makepost-deployment.yaml
│   ├── makepost-service.yaml
│   ├── readpost-deployment.yaml
│   └── readpost-service.yaml
├── makePost
│   ├── dist
│   ├── Dockerfile
│   ├── node_modules
│   ├── package.json
│   ├── package-lock.json
│   ├── src
│   └── tsconfig.json
├── README.md
└── readPost
    ├── dist
    ├── Dockerfile
    ├── node_modules
    ├── package.json
    ├── package-lock.json
    ├── src
    └── tsconfig.json

```
Above is the folder structure of this repo.

`./kubernetes` has files related to deployment of microservice on k8

To deploy it, run the following commands:-

```
kubectl apply -f kubernetes/makepost-deployment.yaml
kubectl apply -f kubernetes/readpost-deployment.yaml
kubectl apply -f kubernetes/makepost-service.yaml
kubectl apply -f kubernetes/readpost-service.yaml

kubectl apply -f kubernetes/makepost-autoscale.yaml

```

`makePost` and `readPost` are 2 microservices. 



> TODO: The business logic of these services
