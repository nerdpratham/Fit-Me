import mongoose from "mongoose";
import app from "./app";
import { env } from "./config/env";

async function startServer() {
  try {
    // Connect to MongoDB
    await mongoose.connect(env.MONGO_URI);
    console.log("✅ MongoDB connected");

    // Start Express server
    app.listen(env.PORT, () => {
      console.log(`🚀 Server running on http://localhost:${env.PORT}`);
    });

  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
