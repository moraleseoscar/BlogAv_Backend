import express from 'express';
import * as db from './db.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Home');
});

// Ruta para obtener todos los posts
app.get('/posts', async (req, res) => {
    try {
        const posts = await db.getAllPosts();
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Ruta para obtener un post por su ID
app.get('/posts/:postId', async (req, res) => {
    const postId = req.params.postId;
    try {
        const post = await db.getPostById(postId);
        res.status(200).json(post);
    } catch (error) {
        console.error(`Error fetching post with ID ${postId}:`, error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Ruta para crear un nuevo post
app.post('/posts', async (req, res) => {
    const { title, content, image_avatar, element_avatar } = req.body;
    try {
        const result = await db.createPost(title, content, image_avatar, element_avatar);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Ruta para actualizar un post existente
app.put('/posts/:postId', async (req, res) => {
    const postId = req.params.postId;
    const { title, content } = req.body;
    try {
        const result = await db.updatePost(postId, title, content);
        res.status(200).json(result);
    } catch (error) {
        console.error(`Error updating post with ID ${postId}:`, error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Ruta para eliminar un post existente
app.delete('/posts/:postId', async (req, res) => {
    const postId = req.params.postId;
    try {
        await db.deletePost(postId);
        res.sendStatus(204);
    } catch (error) {
        console.error(`Error deleting post with ID ${postId}:`, error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://127.0.0.1:${port}`);
});
