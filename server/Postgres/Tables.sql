CREATE TABLE course (
	id serial PRIMARY KEY,
	name text NOT NULL,
	description text NULL
);

CREATE TABLE lesson (
	id serial PRIMARY KEY,
	courseID integer REFERENCES course,
	type text NOT NULL,
	data text
);

CREATE EXTENSION pgcrypto;

CREATE TABLE users (
	id serial PRIMARY KEY,
	username text NOT NULL UNIQUE,
	email text UNIQUE,
	password text NOT NULL
);