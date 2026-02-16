import dotenv from "dotenv";

dotenv.config();

function getEnvVariable(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

const mongoUri = getEnvVariable("MONGO_URI");
if (mongoUri.includes("<db_password>")) {
  console.error(
    "❌ Replace <db_password> in .env with your actual MongoDB Atlas password"
  );
  process.exit(1);
}

export const env = {
  PORT: process.env.PORT || "5000",
  MONGO_URI: mongoUri,
  JWT_SECRET: getEnvVariable("JWT_SECRET"),
  NODE_ENV: process.env.NODE_ENV || "development",
};
