CREATE DATABASE cafeteria;

DROP TABLE IF EXISTS usuarios;
CREATE TABLE usuarios(
    id int AUTO_INCREMENT ;
    numbre VARCHAR(30) NOT NULL ,
    num VARCHAR(10) NOT NULL 
    PRIMARY KEY (Id)
    );
INSERT INTO usuarios (nombre,num) values('Steven ','9612435267');
INSERT INTO usuarios (nombre, num) values('Jesus','9612898887');
