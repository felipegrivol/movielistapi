# movielistapi

Sample rest api written in node.js and mongodb. Displays a list of movies if the user is logged in.

## Pre requisites:
* Node and mongodb installed;
* Mongodb running localy in the default 27017 port.

## Instrucions: 

* Clone this repository to your machine:
  ```
	git clone https://github.com/felipegrivol/movielistapi.git
  ```

* Enter the application directory and initialize node packages
  ```
  cd movielistapi
  npm install
  ```
  
* Run application on default port 3000
  ```
  node bin\www
  ```
  
* At this point you should see a "connection successful" message in console and the application is waiting for connections.

* To load the default data to the database, access the following endpoints:
  ```
  Login:	http://localhost:3000/api/setup/login
  ```
  ```
  Movies:	http://localhost:3000/api/setup/movie
  ```

* This will create the user admin with password admin and a few movies.

* Now, proceed to installing and running the client application.
