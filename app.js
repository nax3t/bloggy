const express = require('express');
const path = require('path');
const PocketBase = require('pocketbase/cjs');
const pb = new PocketBase('http://127.0.0.1:8090');
const { formatDate } = require('./utils/index');

const app = express();

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/posts', async (req, res) => {
  const posts = await pb.collection('posts').getFullList({
    sort: '-created',
  });
  res.render('posts', { posts, title: 'Posts Index', formatDate });
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      message: err.message
    }
  });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
