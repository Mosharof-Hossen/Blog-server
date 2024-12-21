# Project Name : Blogify-server
# Api Link : [Link](https://bike-store-backend-flax.vercel.app/)

The goal of this Blogify-server is to develop a backend for a blogging platform where users can write, update, and delete their blogs. The system will have two roles: **Admin** and **User**. The Admin has special permissions to manage users and their blogs, while users can perform CRUD operations on their own blogs. The backend will include secure authentication, role-based access control, and a public API for viewing blogs with search, sort, and filter functionalities.

## Tech Stack

## Technologies

*   **TypeScript**
*   **Node.js**
*   **Express.js**
*   **MongoDB with Mongoose**
*   **Authentication: JSON Web Token (JWT)**
*   **Authorization: Role-Based Access Control (RBAC)**

---

## **Features**

### **1. Authentication & Authorization**
- **Secure Authentication**: User registration and login using JWT (JSON Web Token).
- **Role-Based Access Control (RBAC)**:
  - **Admin**: Manage users and their blogs. (only when logged in)
  - **User**: Perform CRUD operations on their own blogs. (only when logged in)

### **2. Blog Management**
- **For Users( Private Features )**:
  - Users can create, update, and delete their own blogs.  (only when logged in)
- **Public Features**:
  - View blogs with search, sorting, and filtering capabilities.

### **3. Admin Panel**
- Manage users:  (only when logged in)
  - Can block any user by updating a property `isBlocked` 
- Manage blogs:  (only when logged in)
  - Can delete any blog.
  - Cannot update any blog.

---


## Models

**User Model:**

*   `name`: string.
*   `email`: string.
*   `password`: string. (Hashed password)
*   `role`: "admin" | "user". Default is "user".
*   `isBlocked`: boolean. Default is false.
*   `createdAt`: Date – The timestamp when the user was created.
*   `updatedAt`: Date – The timestamp of the last update to the user.

**Blog Model:**

*   `title`: string.
*   `content`: string.
*   `author`: ObjectId – A reference to the `User` model.
*   `isPublished`: boolean. Default is true (published).
*   `createdAt`: Date – The timestamp when the blog post was created.
*   `updatedAt`: Date – The timestamp of the last update to the blog post.

##   

## API Endpoints

### 1\. Authentication

  #### 1.1 Register User: **POST** `/api/auth/register`
  #### 1.2 Login User: **POST** `/api/auth/login`

### 2\. Blog Management (only when logged in)
**Request Header:**`Authorization: Bearer <token>`

  #### 2.1 Create Blog: **POST** `/api/blogs`
  #### 2.2 Update Blog: **PATCH** `/api/blogs/:id`
  #### 2.3 Delete Blog: **DELETE** `/api/blogs/:id`
  #### 2.4 Get All Blogs (Public): **GET** `/api/blogs`

### 3\. Admin Actions (only when logged in)
**Request Header:**`Authorization: Bearer <token>`

  #### 3.1 Block User: **PATCH** `/api/admin/users/:userId/block`
  #### 3.2 Delete Blog: **DELETE** `/api/admin/blogs/:id`

## Error Handling
*   **Zod Validation Error** (`ZOD_ERROR`)
*   **Not Found Error** (`NOT_FOUND_ERROR`)
*   **Validation Error** (`VALIDATION_ERROR`)
*   **Authentication Error** (`AUTH_ERROR`)
*   **Authorization Error** (`AUTHORIZATION_ERROR`)
*   **Internal Server Error** (`INTERNAL_SERVER_ERROR`)

```json
{
  "success": false,
  "message": "Error message describing the issue",
  "statusCode": 400, // or other relevant HTTP status code
  "error": {
      "details":[
          {
            "path":"",
            "messate":""
          }
      ]
},
  "stack": "error stack trace, if available"
}
```

