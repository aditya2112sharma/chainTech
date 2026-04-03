# To-Do List API (Node.js + Express + MongoDB)

## Overview

This is a RESTful To-Do List API built using Node.js, Express, and MongoDB.
It allows users to create, manage, and track tasks with features like completion status, due dates, and categorization.

---

## Features

* Create tasks with title and description
* View all tasks
* Update task details
* Mark tasks as completed
* Delete tasks
* Add due dates to tasks
* Categorize tasks (Work, Personal, Study, Other)
* Filter tasks by category and completion status
* Input validation and error handling

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/todo-api.git
cd todo-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root folder:

```env
URL=your_mongodb_connection_string
PORT=8000
```

### 4. Run the Server

```bash
npm start
```

Server will run on:

```
http://localhost:8000
```

---

## API Endpoints

### Create Task

```
POST /task
```

Body:

```json
{
  "title": "Learn Node.js",
  "description": "Practice APIs",
  "dueDate": "2026-04-10",
  "category": "Study"
}
```

---

### Get All Tasks

```
GET /task
```

### Update Task

```
PUT /task/:id
```

---

### Mark Task as Completed

```
PATCH /task/:id/complete
```

---

### Delete Task

```
DELETE /task/:id
```

---

## Validation Rules

* Title cannot be empty
* Cannot mark an already completed task again
* Category must be one of: Work, Personal, Study, Other
* Due date cannot be in the past (if provided)

---

## Project Structure

```
project/
│── models/
│   └── task.js        # Mongoose schema
│── connectDB.js       # Database connection
│── app.js             # Main server file & routes
│── .env               # Environment variables
```

---

## Key Decisions & Design Choices

### 1. MongoDB with Mongoose

Chosen for flexibility and ease of schema management compared to relational databases.

### 2. RESTful API Design

Used standard HTTP methods:

* POST → Create
* GET → Read
* PUT → Update
* PATCH → Partial update
* DELETE → Remove

### 3. Validation Handling

Validation is implemented both:

* At request level (manual checks)
* At schema level (Mongoose validators)

### 4. Optimized Queries

Used efficient MongoDB queries like:

* `findOneAndUpdate` to reduce redundant database calls
* Filtering using query parameters

### 5. Error Handling

Consistent error responses with proper HTTP status codes:

* 400 → Bad Request
* 404 → Not Found
* 500 → Server Error

---

## Future Improvements

* User authentication (JWT)
* Pagination for tasks
* Task priority levels
* Frontend integration

---

## Author

Aditya Sharma

---
