const express = require('express');
const path = require('path');
const fs = require("fs").promises
const app = express()

const PORT = 30001

const imagesDirectory = path.join(__dirname, "..", "client", "public", "images")

app.use(express.static(path.join(__dirname, "..", "client", "public")))

app.get("/image-list", async (req, res) => {
  try {
    const imageFiles = await fs.readdir(imagesDirectory)
    res.json(imageFiles)
  } catch (error) {
    console.error("Error reading image files:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
})

app.get('/api', (req, res) => {
    // Implement logic to fetch artworks from the database
    res.json({ 'artwork': ['one', 'two', 'three'] });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});