# Stikkman UX Task

This project is build using React.js and Node.js


## Local Setup Frontend
```bash
Clone : git clone https://github.com/abhms/stikkman.git
Install dependencies : npm install
Run : npm start
```
## Local Setup Backend
```bash
cd backend
Install dependencies : npm install
Run : npm start
```

## Environment Setup Frontend

Create a .env file and write API url like mentioned in `.env.example`
```bash
REACT_APP_BACKEND_URL=
```

In this is Project I am calling api from .env 

## Environment Setup Backend
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
## For add course
For adding course into datbase use `/course` API URL and fill all the details in formdata using postman like below:
```bash
thumbnail :Img of course thumbnail ( Type of Input : Image)
name :name of course (Type of Input : String)
author :author of course (Type of Input : String)
description:description of course (Type of Input : String)
```