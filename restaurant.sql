create database restaurant; 
use restaurant;

CREATE TABLE menu (
  menu_id int NOT NULL AUTO_INCREMENT,
  menu_name varchar(200) NOT NULL,
  menu_price int NOT NULL,
  created_date datetime,
  modified_date datetime,
  PRIMARY KEY (menu_id)
);



INSERT INTO menu(menu_name, menu_price,created_date, modified_date)
VALUES ('Chaufa', 20, now(), now());

INSERT INTO menu(menu_name, menu_price,created_date, modified_date)
VALUES ('Aji de gallina', 25, now(), now());

INSERT INTO menu(menu_name, menu_price,created_date, modified_date)
VALUES ('Ceviche', 25, now(), now());

INSERT INTO menu(menu_name, menu_price,created_date, modified_date)
VALUES ('Arroz con pollo', 23, now(), now());

SELECT menu_id, menu_name, menu_price, created_date, modified_date
FROM menu;