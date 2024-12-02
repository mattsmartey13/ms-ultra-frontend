build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

check-network:
	docker network inspect ms_ultra_network

bash:
	docker exec -it ms_ultra_frontend_dev bash