CREATE DATABASE 
  IF NOT EXISTS test;USE 
    DROP TABLE 
    DROP TABLE IF EXISTS `test`.`users`;CREATE TABLE `test`.`users` 
                 ( 
                              `username`  VARCHAR(45) NOT NULL, 
                              `password`  VARCHAR(45) NULL, 
                              `firstname` VARCHAR(45) NOT NULL, 
                              `lastname`  VARCHAR(45) NULL, 
                              `email`     VARCHAR(45) NULL, 
                              `address`   VARCHAR(45) NULL, 
                              `phone`     INT NULL, 
                              `age` 	INT NULL,
                              PRIMARY KEY (`username`) 
                 )