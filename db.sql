CREATE DATABASE hardware_store;

USE hardware_store;

CREATE TABLE product(
    id int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name varchar(80) not null,
    url varchar(100) not null,
    price float,
    type varchar(30)  -- tool || accesorie
);
select * from PRODUCT;

insert into product(name, url, price, type) values('MARTILLO CAD1 2022', 'martillo.png', 200.0, 'tool');
insert into product(name, url, price, type) values('MALETA CAD 2020', 'maleta.png', 400.0, 'accesorie');

CREATE TABLE client(
    id int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user varchar(30) not null,    
    password varchar(30) not null
);

CREATE TABLE message(
    id int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    topic varchar(40) not null,    
    correo varchar(40) not null,    
    message varchar(100) not null,
    isManage varchar(3)   -- yes || no
);

select * from message;