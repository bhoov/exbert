APPNAME=exbert
VERSION=
BASETAG=hoo/$(APPNAME)
REGISTRY=us.icr.io/research3/visdemos

# NICE solution for required args https://stackoverflow.com/questions/4728810/how-to-ensure-makefile-variable-is-set-as-a-prerequisite
guard-%:
	@ if [ "${${*}}" = "" ]; then \
			echo "Environment variable $* not set"; \
			exit 1; \
	fi

docker-login:
	echo "Trying to log into ibmcloud RIS3..." && ibmcloud cr region-set us-south && ibmcloud cr login --client docker

build: guard-VERSION
	docker build -t "$(BASETAG):$(VERSION)" .

run:
	docker build -t "$(BASETAG):latest" . && docker run -p 5051:5050  --mount type=bind,source=/home/hoo/cos-mounts/visdemos-exbert-osc,target=/app/server/data -t "$(BASETAG):latest"

push: build docker-login
	docker tag "$(BASETAG):$(VERSION)" "$(REGISTRY)/$(BASETAG):$(VERSION)" && docker push "$(REGISTRY)/$(BASETAG):$(VERSION)"

deploy: pre-deploy push
	oc apply -f _deployed.yml

deploy-service: pre-deploy
	oc apply -f _deployed_routes.yml

pre-deploy: 
	sed -e "s|<IMAGE_PLACEHOLDER>|$(REGISTRY)/$(BASETAG):$(VERSION)|" -e "s|<APPNAME_PLACEHOLDER>|$(APPNAME)|" osc_templates/deployment.yml > _deployed.yml && sed -e "s|<APPNAME_PLACEHOLDER>|$(APPNAME)|" osc_templates/deployment_routes.yml > _deployed_routes.yml

deploy-pvc:
	oc apply -f osc_templates/_pvc.yaml