import express from 'express';
import cors from 'cors';
import fs from 'fs';
import * as db from './db.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json' assert { type: 'json' };

const app = express();
const port = 3000;

// Implementación de Cors.
app.use(cors({
    origin: 'http://20565.arpanetos.lol',
}));

// Ruta para servir la documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

// Inicio
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
    const { title, content, image, element_avatar } = req.body;
    if (!title || !content || !image || !element_avatar) {
        res.status(400).json({ error: 'Bad Request: Missing required fields' });
        return;
    }
    try {
        // Leer la imagen desde la ruta especificada
        const imageBuffer = fs.readFileSync(image);
        // Convertir la imagen a formato base64
        const imageBase64 = imageBuffer.toString('base64');
        const result = await db.createPost(title, content, imageBase64, element_avatar);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Ruta para actualizar un post existente
app.put('/posts/:postId', async (req, res) => {
    const postId = req.params.postId;
    const { title, content, image, element_avatar } = req.body;
    if (!title || !content || !image || !element_avatar) {
        res.status(400).json({ error: 'Bad Request: Missing required fields' });
        return;
    }
    try {
        // Leer la imagen desde la ruta especificada
        const imageBuffer = fs.readFileSync(image);
        // Convertir la imagen a formato base64
        const imageBase64 = imageBuffer.toString('base64');
        const result = await db.updatePost(postId, title, content, imageBase64, element_avatar);
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

// Middleware para manejar rutas no encontradas
app.use((req, res, next) => {
    res.status(404).json({ error: 'Not Found: Endpoint not found' });
});

// Middleware para manejar errores de formato de solicitud
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        res.status(400).json({ error: 'Bad Request: Invalid JSON' });
    } else {
        next();
    }
});

// Middleware para manejar métodos HTTP no implementados
app.use((req, res, next) => {
    res.status(501).send('Not Implemented');
});

app.listen(port, () => {
    console.log(`Server listening at http://arpanetos.lol:${port}`);
});
