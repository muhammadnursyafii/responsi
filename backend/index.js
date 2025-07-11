const express = require('express');
const cors = require('cors');
const path = require('path');
const { educationHistory, skills, projects } = require('./data');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// 🔹 Endpoint API
app.get('/api/education', (req, res) => res.json(educationHistory));
app.get('/api/skills', (req, res) => res.json(skills));
app.get('/api/projects', (req, res) => res.json(projects));

// 🔹 Route root "/" agar tidak error
app.get('/', (req, res) => {
  res.send('✅ Selamat datang di API Portfolio!');
});

// 🔹 Jalankan server
app.listen(PORT, () => {
  console.log(`🚀 Server backend berjalan di http://localhost:${PORT}`);
});
