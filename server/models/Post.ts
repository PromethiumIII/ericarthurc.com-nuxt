import { Post } from "@prisma/client";
import redisClient from "../db/redis";

// Redis
async function getRedisPostList(): Promise<Post[]> {
  await redisClient.connect();

  const cache = await redisClient.get("cache");

  await redisClient.disconnect();

  if (cache) {
    return JSON.parse(cache);
  }

  return [];
}

// PostgreSQL
