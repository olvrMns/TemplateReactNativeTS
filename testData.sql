drop database if exists dev;
create database if not exists dev;
use dev;

drop table if exists product;
create table if not exists product(
    id int auto_increment,
    price DOUBLE PRECISION(10, 2) not null,
    productName varchar(100) not null,
    rating DOUBLE PRECISION(3,2) not null,
    stock int not null,
    active boolean not null default 1,
    primary key(id)
);

alter table product add constraint CHK_PRODUCT_PRICE check (p.price >= 0);

insert into product (id, price, productName, rating, stock, active) values (1, 94638.07, 'Chocolate Bar - Smarties', 0.88, 27, 0);
insert into product (id, price, productName, rating, stock, active) values (2, 75444.69, 'Red Pepper Paste', 4.36, 62, 1);
insert into product (id, price, productName, rating, stock, active) values (3, 33483.57, 'Wine - Lamancha Do Crianza', 1.14, 72, 0);
insert into product (id, price, productName, rating, stock, active) values (4, 27400.55, 'Lettuce - Romaine', 1.36, 30, 1);
insert into product (id, price, productName, rating, stock, active) values (5, 91657.41, 'Pepsi, 355 Ml', 4.39, 82, 0);
insert into product (id, price, productName, rating, stock, active) values (6, 58457.75, 'Carrots - Jumbo', 2.37, 79, 0);
insert into product (id, price, productName, rating, stock, active) values (7, 41952.57, 'Cheese - Valancey', 4.35, 31, 1);
insert into product (id, price, productName, rating, stock, active) values (8, 74385.52, 'Wine - White, Cooking', 0.12, 99, 0);
insert into product (id, price, productName, rating, stock, active) values (9, 17167.31, 'Sprouts - Peppercress', 0.65, 64, 1);
insert into product (id, price, productName, rating, stock, active) values (10, 866.8, 'Soap - Pine Sol Floor Cleaner', 0.77, 80, 1);
insert into product (id, price, productName, rating, stock, active) values (11, 10014.94, 'Pop - Club Soda Can', 3.82, 81, 0);
insert into product (id, price, productName, rating, stock, active) values (12, 76865.97, 'Rabbit - Frozen', 2.57, 46, 1);
insert into product (id, price, productName, rating, stock, active) values (13, 25150.32, 'Cookies - Englishbay Chochip', 2.79, 88, 1);
insert into product (id, price, productName, rating, stock, active) values (14, 41164.62, 'Wine - Duboeuf Beaujolais', 0.06, 1, 0);
insert into product (id, price, productName, rating, stock, active) values (15, 59504.44, 'Campari', 3.5, 81, 0);
insert into product (id, price, productName, rating, stock, active) values (16, 65577.89, 'Pastry - Banana Tea Loaf', 1.02, 32, 0);
insert into product (id, price, productName, rating, stock, active) values (17, 43045.48, 'Wine - Prem Select Charddonany', 4.44, 53, 1);
insert into product (id, price, productName, rating, stock, active) values (18, 75076.34, 'Wine - Maipo Valle Cabernet', 4.32, 59, 1);
insert into product (id, price, productName, rating, stock, active) values (19, 10100.16, 'Pepper - Black, Whole', 3.18, 32, 1);
insert into product (id, price, productName, rating, stock, active) values (20, 84501.48, 'Wine - Kwv Chenin Blanc South', 4.73, 99, 1);
insert into product (id, price, productName, rating, stock, active) values (21, 43668.05, 'Plasticforkblack', 4.97, 30, 0);
insert into product (id, price, productName, rating, stock, active) values (22, 27561.23, 'Cup - 8oz Coffee Perforated', 1.3, 11, 1);
insert into product (id, price, productName, rating, stock, active) values (23, 76122.09, 'Nut - Pumpkin Seeds', 0.1, 70, 1);
insert into product (id, price, productName, rating, stock, active) values (24, 43885.34, 'Bread Foccacia Whole', 1.26, 81, 1);
insert into product (id, price, productName, rating, stock, active) values (25, 38140.24, 'Table Cloth 81x81 White', 3.94, 31, 1);
insert into product (id, price, productName, rating, stock, active) values (26, 88823.76, 'Wine - White, Ej', 3.53, 43, 1);
insert into product (id, price, productName, rating, stock, active) values (27, 31954.81, 'Rum - Coconut, Malibu', 3.42, 83, 0);
insert into product (id, price, productName, rating, stock, active) values (28, 2374.74, 'Bread - Multigrain Oval', 1.51, 83, 1);
insert into product (id, price, productName, rating, stock, active) values (29, 62962.03, 'Wine - Savigny - Les - Beaune', 0.19, 52, 1);
insert into product (id, price, productName, rating, stock, active) values (30, 33830.42, 'Pasta - Fusili Tri - Coloured', 1.2, 81, 1);
insert into product (id, price, productName, rating, stock, active) values (31, 72755.65, 'Coconut Milk - Unsweetened', 3.5, 22, 1);
insert into product (id, price, productName, rating, stock, active) values (32, 52192.44, 'Tortillas - Flour, 12', 1.41, 2, 0);
insert into product (id, price, productName, rating, stock, active) values (33, 74538.22, 'Bamboo Shoots - Sliced', 1.64, 68, 0);
insert into product (id, price, productName, rating, stock, active) values (34, 11186.21, 'Orange Roughy 4/6 Oz', 3.76, 6, 0);
insert into product (id, price, productName, rating, stock, active) values (35, 1870.37, 'Danishes - Mini Raspberry', 3.68, 34, 0);
insert into product (id, price, productName, rating, stock, active) values (36, 83958.37, 'Beer - Paulaner Hefeweisse', 0.87, 79, 1);
insert into product (id, price, productName, rating, stock, active) values (37, 6535.15, 'Lamb - Whole, Frozen', 4.24, 44, 0);
insert into product (id, price, productName, rating, stock, active) values (38, 69709.7, 'Compound - Strawberry', 4.67, 53, 0);
insert into product (id, price, productName, rating, stock, active) values (39, 60067.93, 'Onions - Cooking', 3.8, 34, 0);
insert into product (id, price, productName, rating, stock, active) values (40, 48550.15, 'Soup - Knorr, French Onion', 0.19, 27, 0);
insert into product (id, price, productName, rating, stock, active) values (41, 37311.91, 'Shrimp - 21/25, Peel And Deviened', 4.49, 100, 0);
insert into product (id, price, productName, rating, stock, active) values (42, 91906.15, 'Ham - Virginia', 1.24, 37, 1);
insert into product (id, price, productName, rating, stock, active) values (43, 45447.31, 'Truffle Paste', 0.5, 65, 0);
insert into product (id, price, productName, rating, stock, active) values (44, 61146.81, 'Lobster - Base', 1.92, 24, 1);
insert into product (id, price, productName, rating, stock, active) values (45, 17548.8, 'Potatoes - Fingerling 4 Oz', 4.56, 55, 1);
insert into product (id, price, productName, rating, stock, active) values (46, 6932.36, 'Ecolab - Hobart Upr Prewash Arm', 1.99, 63, 0);
insert into product (id, price, productName, rating, stock, active) values (47, 39246.68, 'Wine - Chateau Aqueria Tavel', 4.13, 63, 1);
insert into product (id, price, productName, rating, stock, active) values (48, 59509.85, 'Kolrabi', 2.64, 30, 0);
insert into product (id, price, productName, rating, stock, active) values (49, 61533.5, 'Lettuce - Green Leaf', 2.23, 14, 1);
insert into product (id, price, productName, rating, stock, active) values (50, 29296.7, 'Napkin - Dinner, White', 2.24, 74, 0);
insert into product (id, price, productName, rating, stock, active) values (51, 34693.69, 'Containter - 3oz Microwave Rect.', 1.25, 44, 1);
insert into product (id, price, productName, rating, stock, active) values (52, 13327.02, 'Puree - Raspberry', 0.59, 34, 0);
insert into product (id, price, productName, rating, stock, active) values (53, 7150.3, 'Sprouts - China Rose', 4.53, 22, 1);
insert into product (id, price, productName, rating, stock, active) values (54, 41876.7, 'Sproutsmustard Cress', 4.34, 89, 0);
insert into product (id, price, productName, rating, stock, active) values (55, 60281.83, 'Wine - Winzer Krems Gruner', 0.74, 7, 1);
insert into product (id, price, productName, rating, stock, active) values (56, 73200.01, 'Apron', 1.93, 44, 1);
insert into product (id, price, productName, rating, stock, active) values (57, 93515.79, 'Crush - Orange, 355ml', 4.26, 19, 0);
insert into product (id, price, productName, rating, stock, active) values (58, 8518.12, 'Cookie Trail Mix', 4.49, 64, 1);
insert into product (id, price, productName, rating, stock, active) values (59, 48643.82, 'Water - Green Tea Refresher', 3.85, 62, 1);
insert into product (id, price, productName, rating, stock, active) values (60, 69454.81, 'Wine - Red, Gamay Noir', 4.17, 46, 0);
insert into product (id, price, productName, rating, stock, active) values (61, 27170.4, 'Wakami Seaweed', 0.58, 56, 1);
insert into product (id, price, productName, rating, stock, active) values (62, 89228.16, 'Wine - Prosecco Valdobienne', 0.34, 89, 1);
insert into product (id, price, productName, rating, stock, active) values (63, 17964.26, 'Walkers Special Old Whiskey', 3.51, 80, 1);
insert into product (id, price, productName, rating, stock, active) values (64, 62530.92, 'Truffle Cups - White Paper', 4.97, 64, 0);
insert into product (id, price, productName, rating, stock, active) values (65, 73184.16, 'Beef - Flank Steak', 4.39, 91, 1);
insert into product (id, price, productName, rating, stock, active) values (66, 1946.02, 'Wine - Balbach Riverside', 4.82, 17, 0);
insert into product (id, price, productName, rating, stock, active) values (67, 25191.95, 'Tamarind Paste', 0.36, 79, 0);
insert into product (id, price, productName, rating, stock, active) values (68, 69195.99, 'Nougat - Paste / Cream', 3.44, 38, 1);
insert into product (id, price, productName, rating, stock, active) values (69, 67737.1, 'Appetizer - Mushroom Tart', 0.45, 74, 1);
insert into product (id, price, productName, rating, stock, active) values (70, 69409.37, 'Salt And Pepper Mix - Black', 4.23, 11, 0);
insert into product (id, price, productName, rating, stock, active) values (71, 68998.12, 'Huck White Towels', 4.73, 68, 1);
insert into product (id, price, productName, rating, stock, active) values (72, 33337.5, 'Bread - 10 Grain', 3.34, 89, 1);
insert into product (id, price, productName, rating, stock, active) values (73, 4789.4, 'Shrimp - 16 - 20 Cooked, Peeled', 4.99, 75, 0);
insert into product (id, price, productName, rating, stock, active) values (74, 11156.95, 'Lettuce - Escarole', 0.22, 93, 0);
insert into product (id, price, productName, rating, stock, active) values (75, 62737.28, 'Sauce - Bernaise, Mix', 0.1, 96, 1);
insert into product (id, price, productName, rating, stock, active) values (76, 7739.43, 'Wine - Alsace Gewurztraminer', 0.64, 63, 0);
insert into product (id, price, productName, rating, stock, active) values (77, 94433.51, 'Mangoes', 1.15, 40, 1);
insert into product (id, price, productName, rating, stock, active) values (78, 55772.99, 'Cranberries - Fresh', 0.32, 51, 0);
insert into product (id, price, productName, rating, stock, active) values (79, 82667.14, 'Bagel - Whole White Sesame', 2.85, 67, 1);
insert into product (id, price, productName, rating, stock, active) values (80, 75994.98, 'Grapes - Green', 0.96, 100, 0);
insert into product (id, price, productName, rating, stock, active) values (81, 18242.64, 'Cheese - Le Cheve Noir', 4.47, 50, 1);
insert into product (id, price, productName, rating, stock, active) values (82, 28320.31, 'Chocolate - Milk', 0.65, 15, 0);
insert into product (id, price, productName, rating, stock, active) values (83, 91703.11, 'Bread - Roll, Whole Wheat', 3.26, 64, 1);
insert into product (id, price, productName, rating, stock, active) values (84, 90163.55, 'Cheese Cloth No 100', 4.24, 92, 0);
insert into product (id, price, productName, rating, stock, active) values (85, 95087.37, 'Rice - Jasmine Sented', 3.43, 80, 0);
insert into product (id, price, productName, rating, stock, active) values (86, 13045.88, 'Table Cloth 72x144 White', 3.42, 28, 1);
insert into product (id, price, productName, rating, stock, active) values (87, 88368.04, 'Herb Du Provence - Primerba', 2.92, 18, 0);
insert into product (id, price, productName, rating, stock, active) values (88, 35308.62, 'Wine - Magnotta - Belpaese', 3.14, 93, 1);
insert into product (id, price, productName, rating, stock, active) values (89, 97194.33, 'Greens Mustard', 0.47, 88, 0);
insert into product (id, price, productName, rating, stock, active) values (90, 74579.89, 'Extract - Almond', 0.67, 41, 1);
insert into product (id, price, productName, rating, stock, active) values (91, 62710.07, 'Cup Translucent 9 Oz', 1.59, 44, 1);
insert into product (id, price, productName, rating, stock, active) values (92, 19715.2, 'Soup - Knorr, Ministrone', 2.69, 90, 0);
insert into product (id, price, productName, rating, stock, active) values (93, 28114.48, 'Clam - Cherrystone', 1.97, 63, 0);
insert into product (id, price, productName, rating, stock, active) values (94, 58278.05, 'Shrimp - Black Tiger 6 - 8', 0.57, 6, 0);
insert into product (id, price, productName, rating, stock, active) values (95, 39615.43, 'Table Cloth 53x69 White', 1.76, 72, 0);
insert into product (id, price, productName, rating, stock, active) values (96, 90055.94, 'Kellogs Special K Cereal', 1.86, 61, 0);
insert into product (id, price, productName, rating, stock, active) values (97, 78537.35, 'Soup - Clam Chowder, Dry Mix', 3.5, 31, 0);
insert into product (id, price, productName, rating, stock, active) values (98, 69574.51, 'Tart - Lemon', 3.82, 2, 0);
insert into product (id, price, productName, rating, stock, active) values (99, 91217.11, 'Brocolinni - Gaylan, Chinese', 0.32, 71, 0);
insert into product (id, price, productName, rating, stock, active) values (100, 66350.0, 'Bandage - Flexible Neon', 4.53, 20, 1);