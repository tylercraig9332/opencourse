CREATE TABLE course (
	id serial PRIMARY KEY,
	name text NOT NULL,
	description text NULL,
	preview text NULL,
	author integer NOT NULL
);

CREATE TABLE chapter (
	id serial PRIMARY KEY,
	courseID integer NOT NULL,
	name text NOT NULL,
	description text NULL,
	c_data text NULL
);

CREATE TABLE lesson (
	id serial PRIMARY KEY,
	name text NOT NULL,
	description text,
	courseID integer,
	chapterID integer,
	type text NOT NULL,
	content text NULL,
	author integer NOT NULL
);

CREATE EXTENSION pgcrypto;

CREATE TABLE users (
	id serial PRIMARY KEY,
	username text NOT NULL UNIQUE,
	email text UNIQUE,
	password text NOT NULL
);