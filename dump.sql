CREATE DATABASE songs;

CREATE TABLE playlist(
	id serial NOT NULL,
	favorite BOOLEAN,
	title TEXT NOT NULL,
	artist TEXT NOT NULL,
	genre TEXT NOT NULL,
	album TEXT NOT NULL
);
