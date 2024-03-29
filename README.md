# Avatar Blog API

This is a RESTful API for managing blog posts related to the Avatar series, focusing mainly on Avatar Aang and his past avatars such as Kyoshi, Kuruk, Roku, and even mentioning Korra. The primary purpose of this project is to practice building REST APIs and familiarize oneself with related technologies.

## Features

- Allows users to retrieve all blog posts as well as individual posts by their IDs.
- Supports creating, updating, and deleting blog posts.
- Utilizes Swagger for endpoint documentation.
- Supports images in base64 format.
- Implements CORS support for cross-origin resource sharing.
- Utilizes Docker Compose for containerization, with Node.js in one container and MySQL in another.

## Getting Started

To get started with the Avatar Blog API, follow these steps:

1. Clone this repository to your local machine.
2. Install Docker and Docker Compose if you haven't already.
3. Run `docker-compose up --build` to start the Node.js and MySQL containers.
4. Access the API at `http://localhost:3000`.

## Endpoints

- `GET /posts`: Retrieve all blog posts.
- `GET /posts/:postId`: Retrieve a specific blog post by its ID.
- `POST /posts`: Create a new blog post.
- `PUT /posts/:postId`: Update an existing blog post.
- `DELETE /posts/:postId`: Delete a blog post.

For detailed documentation of each endpoint, refer to the Swagger documentation available at `/api-docs`.

## Technologies Used

- Express.js
- CORS
- MySQL
- Docker
- Swagger UI Express

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests to contribute to the improvement of this project.

## License

This project is licensed under the [ISC License](LICENSE).
