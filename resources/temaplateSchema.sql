DROP DATABASE IF EXISTS templateDev;
CREATE DATABASE IF NOT EXISTS templateDev;
use templateDev;

DROP TABLE IF EXISTS user;
CREATE TABLE IF NOT EXISTS user(
    id INT AUTO_INCREMENT NOT NULL,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    bio TEXT(5000),
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    pwd VARCHAR(1000) NOT NULL,
    active BOOLEAN DEFAULT 1,
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

DROP TABLE IF EXISTS product;
CREATE TABLE IF NOT EXISTS product(
    id INT AUTO_INCREMENT,
    price DOUBLE PRECISION(10, 2) NOT NULL,
    productName varchar(100) NOT NULL,
    rating DOUBLE PRECISION(3,2) NOT NULL,
    stock INT NOT NULL,
    active BOOLEAN NOT NULL DEFAULT 1,
    PRIMARY KEY(id)
);

ALTER TABLE user_address ADD FOREIGN KEY (userId) REFERENCES user(id);

INSERT INTO user(username, email, bio, firstName, lastName, pwd) VALUES ('testUser1', 'testUser1@gmail.com', 'AAAAAAHHHHH','test1', 'test1', '$2a$10$ZrRpkqJLWG9MxBLrRuoEb.AEyvh15TQJUO1j160Jv1MxD9FUI/lcW');
INSERT INTO user(username, email, bio, firstName, lastName, pwd) VALUES ('testUser2', 'testUser2@gmail.com', 'AWFAOFNAFAWMFWALFNAWAWNFAWINFAI','test2', 'test2', '$2a$10$ZrRpkqJLWG9MxBLrRuoEb.AEyvh15TQJUO1j160Jv1MxD9FUI/lcW');

INSERT INTO product (id, price, productName, rating, stock, active) VALUES (1, 94638.07, 'Chocolate Bar - Smarties', 0.88, 27, 0);
INSERT INTO product (id, price, productName, rating, stock, active) VALUES (2, 75444.69, 'Red Pepper Paste', 4.36, 62, 1);
INSERT INTO product (id, price, productName, rating, stock, active) VALUES (3, 33483.57, 'Wine - Lamancha Do Crianza', 1.14, 72, 0);
INSERT INTO product (id, price, productName, rating, stock, active) VALUES (4, 27400.55, 'Lettuce - Romaine', 1.36, 30, 1);
INSERT INTO product (id, price, productName, rating, stock, active) VALUES (5, 91657.41, 'Pepsi, 355 Ml', 4.39, 82, 0);
INSERT INTO product (id, price, productName, rating, stock, active) VALUES (6, 58457.75, 'Carrots - Jumbo', 2.37, 79, 0);
INSERT INTO product (id, price, productName, rating, stock, active) VALUES (7, 41952.57, 'Cheese - Valancey', 4.35, 31, 1);
INSERT INTO product (id, price, productName, rating, stock, active) VALUES (8, 74385.52, 'Wine - White, Cooking', 0.12, 99, 0);
INSERT INTO product (id, price, productName, rating, stock, active) VALUES (9, 17167.31, 'Sprouts - Peppercress', 0.65, 64, 1);
INSERT INTO product (id, price, productName, rating, stock, active) VALUES (10, 866.8, 'Soap - Pine Sol Floor Cleaner', 0.77, 80, 1);



