# Paytm Backend

This repository contains the backend code for a web application inspired by Paytm's functionalities. It facilitates user registration, login, account management, and transactional capabilities. Implemented using Node.js, Express.js, and MongoDB, it offers a robust and scalable solution for handling financial operations.

## Features

- **User Authentication:** Secure user registration and login functionalities using JWT authentication.
- **Account Management:** Create, update, and retrieve user accounts with associated balances.
- **Transaction Processing:** Perform fund transfers securely between user accounts.
- **Scalable Architecture:** Utilizes MongoDB for efficient data storage and retrieval, ensuring scalability and performance.

## Installation

1. Clone this repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Configure environment variables: Create a `.env` file and add necessary configurations.
4. Run the server: `npm start`

## API Endpoints

- **POST /api/v1/user/signup:** Register a new user.
- **POST /api/v1/user/login:** Authenticate and log in a user.
- **PUT /api/v1/user/update:** Update user information.
- **GET /api/v1/user/getUsers:** Retrieve user details.
- **GET /api/v1/account/balance:** Check user account balance.
- **POST /api/v1/account/transfer:** Transfer funds between user accounts.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JSON Web Tokens (JWT)
- bcrypt

## Contributors

- [Your Name](GitHub profile link)

## License

This project is licensed under the [MIT License](LICENSE).
