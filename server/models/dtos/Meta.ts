import { Post } from "@prisma/client";
import redisClient from "~/server/db/redis";

type Meta = Omit<Post, "markdown">;

// Redis
export async function getRedisMetaList() {
  await redisClient.connect();

  const cache = await redisClient.get("cache");

  await redisClient.disconnect();

  if (cache) {
    let meta: Meta[] = JSON.parse(cache, (key, value) => {
      if (key !== "markdown") {
        return value
      }
    });

    return meta;
  }

  return [];
}
