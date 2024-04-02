import dotenv from "dotenv";

dotenv.config();

export const loadENV = () => {
  const accessSecret = process.env.ACCESS_SECRET;

  if (!accessSecret) {
    throw new Error("cant load ACCESS_SECRET");
  }

  return {
    clientURL: process.env.CLIENT_URL ? [process.env.CLIENT_URL] : [],
    port: process.env.PORT ? parseInt(process.env.PORT) : 3001,
    accessSecret,
  };
};

export const ENV = loadENV();
