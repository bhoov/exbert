```
ibmcloud login --sso
# copy oc login command from dashboard
# delete existing deployment in dashboard
make deploy VERSION=vX.X
# If first time, also run `make deploy-pvc` to connect persistant storage to the app
```