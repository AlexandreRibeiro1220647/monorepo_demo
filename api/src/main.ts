import { Task } from '@monorepo-demo/shared-utils';

const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

// Allow requests from localhost:4200 (your frontend)
app.use(cors({
  origin: 'http://localhost:4200'
}));


let tasks: Task[] = [
  { id: '1', title: 'Learn Nx', completed: false },
  { id: '2', title: 'Build a project', completed: false }
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const newTask: Task = req.body;
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.listen(3000, () => console.log('API running on http://localhost:3000'));
