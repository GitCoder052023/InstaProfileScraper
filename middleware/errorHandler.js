export default function errorHandler(err, req, res, next) {
  console.error('[SERVER ERROR]', err);
  res.status(500).json({ error: 'Something went wrong on the server.' });
}
