# School Management API

## Setup
1. Install dependencies:
   npm install

2. Setup MySQL using schema.sql

3. Update DB credentials in db.js

4. Run server:
   npm start

## APIs

### Add School
POST /addSchool
Body:
{
  "name": "ABC School",
  "address": "Delhi",
  "latitude": 28.6,
  "longitude": 77.2
}

### List Schools
GET /listSchools?latitude=28.6&longitude=77.2
