import express from 'express'
import { getAllPosts, createPost } from './db.js'

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/posts', async (req, res) => {
    try {
        const posts = await getAllPosts();
        console.log(posts);
        res.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://127.0.0.1:${port}`)
})