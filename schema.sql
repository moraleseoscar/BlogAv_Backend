CREATE DATABASE IF NOT EXISTS blog_db;

USE blog_db;

CREATE TABLE IF NOT EXISTS blog_posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    image_avatar TEXT NOT NULL,
    element VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO blog_posts (title, content, image_avatar, element)
VALUES ('Mi primer post', 'Este es el contenido de mi primer post en el blog.', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FAang&psig=AOvVaw2m8zHQTj6BRufuOECd5cIJ&ust=1709194855447000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMjX0ZPNzYQDFQAAAAAdAAAAABAJ', 'Aire');
