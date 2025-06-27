import express from 'express';
import cors from 'cors';
import axios from 'axios';
import GetProfileData from './controller/ProfileScraper.js';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: [
    'http://localhost:5173',
  ]
}));

app.get('/', (req, res) => {
  res.send('Instagram Profile Scraper API is running! Use /api/profile?username=...');
});

app.get('/api/profile', async (req, res) => {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({
      error: 'Missing required parameter: ?username= is required.'
    });
  }

  if (username.includes(' ')) {
    return res.status(400).json({
      error: 'Invalid username. It should not contain spaces.'
    });
  }

  const url = `https://www.instagram.com/${username}/`;

  try {
    const profileData = await GetProfileData(url);
    if (!profileData) {
      return res.status(404).json({ error: 'Profile not found or inaccessible.' });
    }
    res.json(profileData);
  } catch (err) {
    console.error('[SERVER ERROR]', err);
    res.status(500).json({ error: 'Something went wrong while scraping the profile.' });
  }
});

app.get('/proxy', async (req, res) => {
  const imageUrl = req.query.url;

  if (!imageUrl || !imageUrl.startsWith('http')) {
    return res.status(400).send('Invalid or missing image URL.');
  }

  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    res.set('Content-Type', response.headers['content-type']);
    res.send(response.data);
  } catch (err) {
    console.error('[PROXY ERROR]', err.message);
    res.status(500).send('Failed to fetch image.');
  }
});

app.listen(PORT, () => {
  console.log(`Server running`);
});
