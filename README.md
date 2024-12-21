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

