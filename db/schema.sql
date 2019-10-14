DROP DATABASE IF EXISTS pacman_db;

CREATE DATABASE pacman_db;

USE pacman_db;

CREATE TABLE ghost (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) not NULL,
  eaten BOOLEAN default FALSE,
  PRIMARY KEY (id)
);