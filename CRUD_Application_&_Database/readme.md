# Connecting a Web Application to a Database

## What is CRUD APIs
CRUD APIs (Create, Read, Update, Delete Application Programming Interfaces) are a type of API designed to facilitate the basic operations of persistent storage in a database. These operations are fundamental to interacting with data in most applications. Here's a breakdown of each component:

1. **Create**:
   - This operation allows you to add new data to the database.
   - In RESTful APIs, this typically corresponds to the HTTP POST method.
   - Example: Creating a new user record.

2. **Read**:
   - This operation allows you to retrieve data from the database.
   - In RESTful APIs, this typically corresponds to the HTTP GET method.
   - Example: Fetching user details.

3. **Update**:
   - This operation allows you to modify existing data in the database.
   - In RESTful APIs, this typically corresponds to the HTTP PUT or PATCH method.
   - Example: Updating user information.

4. **Delete**:
   - This operation allows you to remove data from the database.
   - In RESTful APIs, this typically corresponds to the HTTP DELETE method.
   - Example: Deleting a user record.

### Example CRUD Operations in a RESTful API:

Let's say you have an API for managing users.

- **Create**: 
  - Endpoint: `POST /users`
  - Request Body: `{ "name": "John Doe", "email": "john@example.com" }`
  - Response: `201 Created`

- **Read**:
  - Endpoint: `GET /users`
  - Response: `200 OK`, with a list of users.
  
  - Endpoint: `GET /users/{id}`
  - Response: `200 OK`, with the details of a specific user.

- **Update**:
  - Endpoint: `PUT /users/{id}`
  - Request Body: `{ "name": "John Doe", "email": "john.doe@example.com" }`
  - Response: `200 OK`

- **Delete**:
  - Endpoint: `DELETE /users/{id}`
  - Response: `204 No Content`

### CRUD APIs in Practice

CRUD operations are integral to web and mobile applications where user data needs to be managed. For instance:

- **E-commerce applications** to manage products, orders, and users.
- **Social media platforms** to handle posts, comments, and user profiles.
- **Content management systems** to deal with articles, pages, and multimedia assets.

### Benefits of CRUD APIs

- **Simplicity**: Provides a straightforward way to interact with data.
- **Consistency**: Standardized operations across different applications.
- **Scalability**: Easily extendable to more complex operations and services.

Understanding CRUD operations is fundamental for web development and helps in building robust and maintainable applications.

## Prerequisite Installtion 
- Install MongoDB community Edition
- Install NodeJS (LTS version)
- Install VS Code (if not using)
- Install Postman (for API testing)
- Install MongoDB Compass (DB Application)
- Setting up and Getting started

## How to make CRUD APIs ?
```
Lets create a Blog Application - CRUD APIs
```