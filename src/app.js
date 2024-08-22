import express from "express";
import authRoutes from './routes/auth.routes.js'

const app = express();

app.use(express.json())
app.use('/api/auth', authRoutes)


app.use((req, res, next) => {
    res.status(404).json({ message: "endpoint not found" });
  });

export default app