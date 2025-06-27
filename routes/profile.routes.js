import express from 'express';
import GetProfileData from '../controller/ProfileScraper.js';
import validateUsername from '../utils/validateUsername.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({
      error: 'Missing required parameter: ?username= is required.'
    });
  }

  if (!validateUsername(username)) {
    return res.status(400).json({
      error: 'Invalid username. It should not contain spaces.'
    });
  }

  try {
    const profileData = await GetProfileData(`https://www.instagram.com/${username}/`);
    if (!profileData) {
      return res.status(404).json({ error: 'Profile not found or inaccessible.' });
    }
    res.json(profileData);
  } catch (err) {
    next(err);
  }
});

export default router;
