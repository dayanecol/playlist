# Playlist
This is a backend application for managing a music list.

## Technologies

<div align="center">
  <img src="https://img.shields.io/badge/Postgres-316192?style=for-the-badge&logo=Postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/JavaScript-FFFF00?style=for-the-badge&logo=javaScript&logoColor=black" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" height="30px"/>
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

## How to run locally

1 - Clone this repository;

```bash
  git clone 
```

2 - Install all dependencies;

```bash
  npm install
```

3- Create a PostgreSQL database with the given dump.sql;

4 - Change the database connection informations;

5- Run to start application;

```bash
  npm run dev
```

## Routes (CRUD)

1 - Create : POST a body in the route http://localhost:4000/playlist:

```bash
  body: {
  "title": "nome da musica",
  "artist": "nome do artista",
  "genre":"genero musical",
  "album":"album"
}
```

2- Read: GET an array of musics in http://localhost:4000/playlist. For an array filtered by album GET by passing an album name by params: http://localhost:4000/playlist/:album.

3- Update: send an PUT request with a body to http://localhost:4000/playlist/:id specifying the id of the music to be edited by params. To add a music a favorite status:

```bash
  body: {
  "isFavorite": true
}
```
To remove the favorite status:

```bash
  body: {
  "isFavorite": false
}
```

4- Delete: send a delete request to http://localhost:4000/playlist/:id specifying the id of the music to be deleted by params.

