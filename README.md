# enthire-project

A demonstration of an Authentication system in NodeJS allowing the user to Login with Google using OAuth2.

The backend API has been setup using the Express Framework. The frontend UI has been built with React.
MYSQL has been used as the Database.

## Database creation

Use the following commands to create the database and necessary tables in MySQL

```
CREATE DATABASE enthire;

CREATE TABLE users (
    id varchar(255),
    name varchar(255),
    email varchar(255),
    pic text(65000)
);
```

## Installation

Run the installation script `install.sh` to install dependencies

```
./install.sh
```
Start the API with the following - 

```
npm start
```

Open a new terminal and start the frontend server with the following -

```
cd frontend && npm start
```
