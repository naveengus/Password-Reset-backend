# Backend - Password Reset Application

## Overview

This is the backend for the password reset application, built with Node.js, Express, and MongoDB. It handles user authentication, password reset requests via OTP on Email, and other user-related functionality.

## Technologies Used

- **Node.js**: Backend runtime
- **Express**: Framework for building REST APIs
- **MongoDB**: Database to store user data
- **Nodemailer**: For sending OTP emails
- **Bcrypt**: For password hashing
- **JWT**: For generating authentication tokens

## Prerequisites

1. **Node.js** and **npm** installed on your system.
2. **MongoDB** installed locally or a cloud instance like MongoDB Atlas.
3. Create a `.env` file in the root of the project with the following environment variables:
   ```bash
   USER_MAIL=<your-email@gmail.com>
   PASS_MAIL=<your-email-password>
   MONGO_URI=<your-mongo-connection-string>
   JWT_SECRET=<your-jwt-secret>
   ```

## API Endpoints

1. **Signup**
   POST /users/signup
   Allows users to create a new account.
   Request Body:
   ```
   {
   "firstName": "John",
   "lastName": "Doe",
   "email": "john@example.com",
   "password": "password123"
   }
   ```

```

2. **Login**
   POST /users/login
   Allows users to log in using their email and password.
   Request Body:
```

{
"email": "john@example.com",
"password": "password123"
}

```

3. **Forgot Password**
   POST /users/forgotPassword
   Sends a password reset OTP to the user's email.
   Request Body:
```

{
"email": "john@example.com"
}

```

4. **Reset Password**
POST /users/resetPassword
Allows users to reset their password using the OTP.
Request Body:
```

{
"OTP": "123456",
"password": "newpassword123"
}

```

```
