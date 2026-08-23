

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/tours', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) return res.status(500).json({error: 'Failed to read data'});
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));

