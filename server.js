const express = require('express');
const app = express();

const PORT = 30001;

// app.get('/', (req, res) => {
//     res.send('Hello, this is the homepage!');
//   });
  
app.get('/api', (req, res) => {
    // Implement logic to fetch artworks from the database
    res.json({ 'artwork': ['one', 'two', 'three'] });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});