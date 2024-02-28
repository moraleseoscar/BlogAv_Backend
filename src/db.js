import conn from './conn.js'

// Función para obtener todos los posts
export async function getAllPosts() {
    const [rows] = await conn.query('SELECT * FROM blog_posts');
    return rows;
}

// Función para obtener un post por su ID
export async function getPostById(postId) {
    const [rows] = await conn.query('SELECT * FROM blog_posts WHERE id = ?', [postId]);
    return rows[0];
}

// Función para crear un nuevo post
export async function createPost(title, content, image_avatar, element) {
    const [result] = await conn.query('INSERT INTO blog_posts (title, content, image_avatar, element) VALUES (?, ?, ?, ?)', [title, content, image_avatar, element]);
    return result;
}

// Función para actualizar un post existente
export async function updatePost(postId, title, content) {
    const [result] = await conn.query('UPDATE blog_posts SET title = ?, content = ? WHERE id = ?', [title, content, postId]);
    return result;
}

// Función para eliminar un post existente
export async function deletePost(postId) {
    const [result] = await conn.query('DELETE FROM blog_posts WHERE id = ?', [postId]);
    return result;
}