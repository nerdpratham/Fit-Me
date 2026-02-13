import dotenv from "dotenv";

dotenv.config();

function getEnvVariable(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

export const env = {
  PORT: process.env.PORT || "5000",
  MONGO_URI: getEnvVariable("MONGO_URI"),
  JWT_SECRET: getEnvVariable("JWT_SECRET"),
  NODE_ENV: process.env.NODE_ENV || "development",
};
