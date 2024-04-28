import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import authRoutes from './routes/auth.routes.js'
import liftRoutes from './routes/lift.routes.js'
import percentageRoutes from './routes/percentage.routes.js'
import prRoutes from './routes/pr.routes.js'

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use(('/api'),authRoutes);
app.use(('/api'),liftRoutes);
app.use('/api',prRoutes);
app.use('/api',percentageRoutes);

export default app;
