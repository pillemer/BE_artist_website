const express = require('express');
const path = require('path');
const app = express();

const PORT = 30001;

app.use(express.static(path.join(__dirname, 'client', 'public')));
  
app.get('/api', (req, res) => {
    // Implement logic to fetch artworks from the database
    res.json({ 'artwork': ['one', 'two', 'three'] });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});