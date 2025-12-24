const express = require("express");
const app = express();

app.use(express.json());

const posts = [];

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/posts", (req, res) => {
  if (!req.body || !req.body.title) {
    return res.status(400).json({ error: "title is required" });
  }

  const post = {
    id: posts.length + 1,
    title: req.body.title,
    comments: [],
  };

  posts.push(post);
  res.status(201).json(post);
});

app.get("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.json(post);
});

app.post("/posts/:id/comments", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  if (!req.body || !req.body.comment) {
    return res.status(400).json({ error: "comment is required" });
  }

  const newComment = {
    id: post.comments.length + 1,
    comment: req.body.comment,
  };

  post.comments.push(newComment);
  res.status(201).json(newComment);
});

app.get("/posts/:id/comments", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  res.json(post.comments);
});
