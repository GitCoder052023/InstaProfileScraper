import express from 'express';
import cors from 'cors';
import profileRoutes from './routes/profile.routes.js';
import proxyRoutes from './routes/proxy.routes.js';
import errorHandler from './middleware/errorHandler.js';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT;

app.use(cors({
  origin: ['http://localhost:5173', 'https://insta-profile-scraper.vercel.app']
}));

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

app.get('/', (req, res) => {
  res.send('Instagram Profile Scraper API is running! Use /api/profile?username=...');
});

app.use('/api/profile', profileRoutes);
app.use('/proxy', proxyRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
