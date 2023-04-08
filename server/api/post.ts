import redisClient from "../db/redis";
import { Post } from "@prisma/client";
import { getRedisMetaList } from "../models/dtos/Meta";

export async function getCache() {
  return getRedisMetaList();
}

export default defineEventHandler((event) => {
  // console.log(event.node.req.method);
  // console.log(event.node.req.url);
  return getRedisMetaList();
});
