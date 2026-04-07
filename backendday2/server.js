// server.js
const express = require('express');
const app = express();

// Parse incoming JSON bodies automatically
// Without this, req.body is always undefined
app.use(express.json());

// ─── In-memory data store ──────────────────────────────
// Replace with MongoDB on Day 6. Shape stays identical.

let posts = [
  {
    id: 1,
    title: 'Getting Started with Node.js',
    content: 'Node.js is a JavaScript runtime built on Chrome V8 engine.',
    author: 'Yojjal',
    tags: ['node', 'javascript', 'backend'],
    createdAt: '2025-01-01T10:00:00Z',
  },
  {
    id: 2,
    title: 'Why Express Makes Life Easier',
    content: 'Express is a minimal web framework for Node.js applications.',
    author: 'Yojjal',
    tags: ['express', 'node', 'api'],
    createdAt: '2025-01-02T09:00:00Z',
  },
  {
    id: 3,
    title: 'Understanding REST APIs',
    content: 'REST stands for Representational State Transfer.',
    author: 'Student',
    tags: ['rest', 'api', 'web'],
    createdAt: '2025-01-03T11:00:00Z',
  },
];

let nextId = 4; // For generating new post IDs

app.get('/posts', (req,res)=>{
    res.json(posts);
});


app.get('/posts/:id', (req,res)=>{

    const id = parseInt(req.params.id);

    const post = posts.find(p => p.id === id);

    if (!post){
        return res.status(404).json({ error: 'Post not found' });
    }

    res.json(post);

});

app.post('/posts', (req,res)=>{

    const { title, content, author, tags } = req.body;

    //validation- check if the required fields are present
    if (!title || !content || !author){

        return res.status(400).json({
            error: 'Missing required fields',
            required: ['title', 'content', 'author']
        });
    }

    const newPost = {
        id: nextId++,
        title,
        content,
        author,
        tags: tags || [],
        createdAt: new Date().toISOString(),
    };

    posts.push(newPost);

    //201 created- not 200. Use the correct ststus code.
    res.status(201).json(newPost);
});


app.put('/posts/:id', (req,res)=>{

    const id = parseInt(req.params.id);

    const postIndex = posts.findIndex(p => p.id === id);

    if (postIndex === -1){
        return res.status(404).json({ error: 'Post not found' });
    }

    const { title, content, author, tags } = req.body;

    if (!title || !content || !author){

        return res.status(400).json({error: 'Missing required fields'});
    }

    const updatedPost = {
        id,
        title,
        content,
        author,
        tags: tags || [],
        createdAt: posts[postIndex].createdAt,
        updatedAt: new Date().toISOSteing(), 
    };

    posts[postIndex] = updatedPost;

    res.json(updatedPost);

});

app.delete('/posts/:id', (req,res)=>{

    const id = parseInt(req.params.id);

    const postIndex = posts.findIndex(p => p.id === id);

    if (postIndex === -1){
        return res.status(404).json({ error: 'Post not found' });
    }

    const deleted = posts.splice(postIndex, 1)[0];

    res.json({ message: 'Post deleted', post: deleted });
});


const PORT = 8000;

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});