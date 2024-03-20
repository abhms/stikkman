# Stikkman UI Backend

This project is build using Node.js ,I am using MySQL database.

## Local Setup
```bash
Clone : git clone https://github.com/abhms/stikkman.git
cd backend
Install dependencies : npm install
Run : npm start
```
## Environment  Setup

Create a .env file and write API url like mentioned in `.env.example` ,create MySQL database and all Database port, connection data usename,datbase keep course because we are using this project for otherwise change accoring to prefrenece for connecting with that database and CLOUDINARY is just cloud_name of cloudinary and create cloudinary account just paste the API key and secret 
```bash
PORT=
DB_HOST=
DB_PORT=
DB_CONNECTION=
DB_USERNAME=
DATABASE=course
DB_PASSWORD=
CLOUDINARY=   
CLOUDINARY_API=
CLOUDINARY_SECRET=
```
## API Explanation

```bash
Getting all Data from Database
For getting all course : /courses , Method GET
For adding course : /course, Method POST
For getting course by id : /coursesById/id(id of course) , Method GET
For getting course by author :/courses/author(author is author name) ,Method GET
For deleting course by id : /courses/id(id of course),Method GET
For updating course by id : /course/id (id of course), Method PUT

