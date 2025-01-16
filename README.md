
# **Simple User Management API**

A lightweight and secure REST API built using Node.js, Express, Joi, and Helmet for managing user data. This API demonstrates the implementation of common CRUD operations (Create, Read, Update, Delete) with robust validation and security best practices.

---

## **Features**
- Retrieve a list of users.
- Add new users with input validation.
- Update existing users' information.
- Delete users by ID.
- Secure API endpoints using Helmet.
- Input validation using Joi.

---

## **Technologies Used**
- **Node.js**: JavaScript runtime environment.
- **Express**: Framework for building web applications and APIs.
- **Joi**: Library for validating request data.
- **Helmet**: Middleware to enhance API security.

---

## **Installation**

1. Install dependencies:
   ```bash
   npm install express joi helmet
   ```
2. Install nodemon for to automatically monitoring changes in your source code and restart the server during development:
   ```bash
   npm install express --save-dev nodemon
   ```

3. Start the server:
   ```bash
   node server.js
   ```

4. The API will be running at:
   ```
   http://localhost:3000
   ```

---

## **API Endpoints**

### **Base URL**
```
http://localhost:3000/api/users
```

### **Endpoints**

#### 1. **GET** `/api/users`
Retrieve all users.

- **Response:**
  ```json
  [
    {
      "id": 1,
      "first_name": "Osbert",
      "email": "ohuet0@blogs.com",
      "gender": "Male",
      "Skill": "Film"
    },
    {
      "id": 2,
      "first_name": "Alica",
      "email": "apardy1@xrea.com",
      "gender": "Female",
      "Skill": "Object Pascal"
    }
  ]
  ```

#### 2. **GET** `/api/users/:id`
Retrieve a user by their `id`.

- **Example Request:**
  ```
  GET /api/users/1
  ```

- **Response:**
  ```json
  {
    "id": 1,
    "first_name": "Osbert",
    "email": "ohuet0@blogs.com",
    "gender": "Male",
    "Skill": "Film"
  }
  ```

#### 3. **POST** `/api/users`
Add a new user.

- **Request Body:**
  ```json
  {
    "first_name": "John",
    "email": "john@example.com",
    "gender": "Male",
    "Skill": "JavaScript"
  }
  ```

- **Response:**
  ```json
  {
    "id": 3,
    "first_name": "John",
    "email": "john@example.com",
    "gender": "Male",
    "Skill": "JavaScript"
  }
  ```

#### 4. **PUT** `/api/users/:id`
Update an existing user's details by `id`.

- **Example Request:**
  ```
  PUT /api/users/1
  ```

- **Request Body:**
  ```json
  {
    "first_name": "Updated Name",
    "email": "updated@example.com",
    "gender": "Other",
    "Skill": "Updated Skill"
  }
  ```

- **Response:**
  ```json
  {
    "id": 1,
    "first_name": "Updated Name",
    "email": "updated@example.com",
    "gender": "Other",
    "Skill": "Updated Skill"
  }
  ```

#### 5. **DELETE** `/api/users/:id`
Delete a user by `id`.

- **Example Request:**
  ```
  DELETE /api/users/1
  ```

- **Response:**
  ```json
  {
    "id": 1,
    "first_name": "Osbert",
    "email": "ohuet0@blogs.com",
    "gender": "Male",
    "Skill": "Film"
  }
  ```

---

## **Validation Rules**
- **`first_name`**: Required, must be a string, minimum length of 3 characters.
- **`email`**: Required, must be a valid email.
- **`gender`**: Must be one of "Male", "Female", or "Other".
- **`Skill`**: Optional, must be a string.

---

## **Security**
This API uses **Helmet** to set secure HTTP headers and protect against common web vulnerabilities.

---

## **Usage**
- Use any REST client (e.g., Postman) or `curl` commands to interact with the API.
- For testing, you can run:
  ```bash
  curl http://localhost:3000/api/users
  ```


