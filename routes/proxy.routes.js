import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/', async (req, res) => {
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

export default router;
