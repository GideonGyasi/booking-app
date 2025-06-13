import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import servicesRouter from './routes/services.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

app.use('/api/services', servicesRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
