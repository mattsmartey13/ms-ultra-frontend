.PHONY: build
COMPOSE_FILE=docker-compose.yml

up-build:
	docker-compose up --build

up:
	docker-compose up

build:
	docker-compose -f $(COMPOSE_FILE) build

down:
	docker-compose down

check-network:
	docker network inspect ms_ultra_network

bash:
	docker exec -it ms_ultra_frontend_dev bash