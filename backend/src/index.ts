import express from 'express';
import cors from 'cors';
import { errorHandler } from './middleware/errorHandler.js';
import { healthRouter } from './routes/health.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

// CORS: allow frontend origin in development
app.use(
  cors({
    origin: process.env.CORS_ORIGIN ?? 'http://localhost:5173',
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use('/api/health', healthRouter);

// 404
app.use((_req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Error handling middleware (must be last)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
