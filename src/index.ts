import express from "express";
import { logger } from "./middlewares/logger";
import { notFound, errorHandler } from "./middlewares/error";
import router from "./routes";

const app = express();

// Middleware
app.use(logger);
app.use(express.json());

// Health endpoint
app.get("/health", (_req, res) => {
  res.status(200).json({
    status: true,
    message: "Server is healthy",
  });
});

app.use("/api", router);

// 404 and error handler
app.use(notFound);
app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, (error?: Error) => {
  if (error) throw error;
  console.log(`Express is running on Port ${PORT}`);
});
