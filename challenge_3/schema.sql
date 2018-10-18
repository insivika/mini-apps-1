DROP DATABASE IF EXISTS `shoppingCart`;

CREATE DATABASE shoppingCart;

USE shoppingCart;

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user`(
  `user_id` int NOT NULL AUTO_INCREMENT, 
  `firstName` varchar(30) NOT NULL, 
  `lastName` varchar(30) NOT NULL, 
  `email` varchar(30) NOT NULL, 
  `address` varchar(30) NOT NULL, 
  `city` varchar(30) NOT NULL, 
  `state` varchar(30), 
  `zip` VARCHAR(255) NOT NULL, 
  `phone` VARCHAR(255) NOT NULL, 
  primary key(`user_id`));

DROP TABLE IF EXISTS `purchase`;

CREATE TABLE `purchase`( 
      `purchase_id` int NOT NULL AUTO_INCREMENT,   
      `user_id` int DEFAULT NULL,   
      `creditCard` VARCHAR(255) NOT NULL,   
      `expDate` VARCHAR(255) NOT NULL,   
      `cvv` int NOT NULL,   
      `billingZip` VARCHAR(255) NOT NULL,  
      `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 
      PRIMARY KEY(`purchase_id`),   
      FOREIGN KEY(`user_id`) REFERENCES user(`user_id`) );


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/