import cors from "cors";
import dotenv from "dotenv";
import express, { Application } from "express";

import appRoutes from "./routes/index";
import { notFound } from "./middleware/notFound";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const app: Application = express();

app.use(express.json());

app.use(cors());

app.use("/api", appRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
