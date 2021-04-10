# Cartologic_task

A location based web app using geodjango, django and (React & leaflet).


## Brief:
The application displays a list of shops on the map entered from the backend.

***
A list of technologies used within the project:
* Docke and Docker Compose 
* Django
* React
* Webpack module bundler manager
* Babel Module
* PostgreSQL – PostGIS – GeoDjango –
React – Leaflet

## Setup

The first thing to do is to clone the repository:

```sh
$ git clone https://github.com/MohamedAhmed7/Cartologic_task.git
$ cd Cartologic_task
```

Run this App using Docker: 
```sh
docker-compose exec api python3 manage.py makemigrations
docker-compose exec api python3 manage.py migrate --noinput
docker-compose up -d
or 
make migrations
make migrate
make up
```
And navigate to `localhost:8000/`.

