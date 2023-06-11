# Personal Website Backend API (MongoDB)

This project is the backend API for a personal website, built using MongoDB as the database. It provides the necessary endpoints to manage and retrieve data for the website, such as blog posts, projects, and contact messages.

## Table of Contents

- [Personal Website Backend API (MongoDB)](#personal-website-backend-api-mongodb)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Configuration](#configuration)
  - [Endpoints](#endpoints)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/mogrady-professional/personal-website-backend-api-mongodb.git
```

2. Change to the project directory:

```bash
cd personal-website-backend-api-mongodb
```

3. Install the dependencies:

```bash
npm install
```

4. Start the server in development mode:

```bash
npm run server
```

5. Optionally, start the server in production mode:

```bash
npm start
```

The server should now be running on `http://localhost:5005`.

## Usage

Once the server is running, you can use tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to interact with the API endpoints. Make sure to set the appropriate HTTP headers and request bodies as required by each endpoint.

## Configuration

The project requires some configuration before it can be used. Create a `.env` file in the project root directory and define the following environment variables:

- `MONGODB_URI`: The connection URI for your MongoDB database.
- `JWT_SECRET`: A secret key used for JWT token generation and verification.
- `MONGODB_COLLECTION`: The name of the MongoDB collection for storing data.
- `PORT`: The port number to run the server on.

## Endpoints

Refer to the source code for more details on the request and response formats for each endpoint.

## Contributing

Contributions to this project are welcome. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Test your changes.
5. Commit and push your changes to your forked repository.
6. Create a pull request.

Please make sure to follow the existing code style and include appropriate tests with your changes.

## License

This project is licensed under the [MIT License](LICENSE).
