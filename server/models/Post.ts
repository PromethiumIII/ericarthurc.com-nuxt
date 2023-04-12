import { Post } from "@prisma/client";
import { getRedisCache } from "../db/redis";

// Helper
async function getRedisParsedPostList(): Promise<Post[]> {
  const cache = await getRedisCache();

  if (cache) {
    return JSON.parse(cache);
  }

  return [];
}

// Redis
export async function getRedisPostBySlug(
  paramSlug: string
): Promise<Post | undefined> {
  const parsedPosts = await getRedisParsedPostList();

  return parsedPosts.find((p) => p.slug === paramSlug);
}

// PostgreSQL
