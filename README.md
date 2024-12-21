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
  - **Admin**: Manage users and their blogs.
  - **User**: Perform CRUD operations on their own blogs.

### **2. Blog Management**
- **For Users( Private Features )**:
  - Users can create, update, and delete their own blogs.
- **Public Features**:
  - View blogs with search, sorting, and filtering capabilities.

### **3. Admin Panel**
- Manage users:
  - Can block any user by updating a property `isBlocked`
- Manage blogs:
  - Can delete any blog.
  - Cannot update any blog.

---

