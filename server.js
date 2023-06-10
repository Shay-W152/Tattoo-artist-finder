const express = require('express');
const mongoose = require('mongoose');
const Artist = require('./models/Artist');

const app = express();
const port = 3001;

mongoose.connect('mongodb://localhost/tattoo_artist_finder', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true }));

app.get('/artists', async (req, res) => {
  try {
    const artists = await Artist.find();
    res.json(artists);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/artists', async (req, res) => {
  try {
    const artist = await Artist.create(req.body);
    res.json(artist);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
