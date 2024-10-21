DROP DATABASE IF EXISTS templateDev;
CREATE DATABASE IF NOT EXISTS templateDev;
use templateDev;

DROP TABLE IF EXISTS user;
CREATE TABLE IF NOT EXISTS user(
    id INT AUTO_INCREMENT NOT NULL,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    bio TEXT(5000) DEFAULT '',
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    pwd VARCHAR(1000) NOT NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS user_address;
CREATE TABLE IF NOT EXISTS user_address(
    id INT AUTO_INCREMENT NOT NULL,
    country VARCHAR(100) DEFAULT NULL,
    city VARCHAR(100) DEFAULT NULL,
    address1 VARCHAR(100) DEFAULT NULL,
    address2 VARCHAR(100) DEFAULT NULL,
    address3 VARCHAR(100) DEFAULT NULL,
    postalCode VARCHAR(100) DEFAULT NULL,
    userId INT NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE user_address ADD FOREIGN KEY (userId) REFERENCES user(id);

INSERT INTO user(username, email, bio, firstName, lastName, pwd) values ('testUser1', 'testUser1@gmail.com', 'AAAAAAHHHHH','test1', 'test1', '$2a$10$ZrRpkqJLWG9MxBLrRuoEb.AEyvh15TQJUO1j160Jv1MxD9FUI/lcW');
INSERT INTO user(username, email, bio, firstName, lastName, pwd) values ('testUser2', 'testUser2@gmail.com', 'AWFAOFNAFAWMFWALFNAWAWNFAWINFAI','test2', 'test2', '$2a$10$ZrRpkqJLWG9MxBLrRuoEb.AEyvh15TQJUO1j160Jv1MxD9FUI/lcW');



