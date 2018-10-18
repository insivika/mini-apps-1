## MySQL

**Getting set up**

1) install mysql - npm install mysql
2) Set up file structure: 
  need: database.js (sitting in the root)
        model (folder)
          User.js (user model)
          Order.js (order model)
3) When setting up mysqul keep in mind that the connection.connect() takes a callback where you can 
   verify connection via consoling sometype of success message or throw an error.
4) Droping the database if it exists before dynamically creating it 

Really good resource on this topic: https://www.terlici.com/2015/08/13/mysql-node-express.html
in order to user words reserved by mysql you will need to surround the word with backticks (`), 

**HELPFUL MYSQL COMMANDS**
Starst mysql.server start
mysql -u root -p password
SELECT * FROM 'table name'
DESC Table_name (shows schema)

Editing a table in mysql:
ALTER TABLE table_name
DROP COLUMN column_name;

ALTER TABLE Customers
ADD Email varchar(255);

ALTER TABLE mytbl ADD UNIQUE (columnName);

CREATE TABLE user (user_id int NOT NULL AUTO_INCREMENT, firstName varchar(30) NOT NULL, lastName varchar(30) NOT NULL, email varchar(30) NOT NULL, address varchar(30) NOT NULL, city varchar(30) NOT NULL, state varchar(30), zip int NOT NULL, phoneint NOT NULL, primary key(user_id));

CREATE TABLE purchase(   purchase_id int NOT NULL AUTO_INCREMENT,   user_id int NOT NULL,   creditCard int NOT NULL,   expDate int NOT NULL,   cvv int NOT NULL,   billingZip int NOT NULL,   PRIMARY KEY(purchase_id),   FOREIGN KEY(user_id) REFERENCES user(user_id) );


DELETE FROM tableName;