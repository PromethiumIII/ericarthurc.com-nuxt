import { prisma } from "../db/prisma";
import redisClient from "../db/redis";

export default defineNitroPlugin(async (nitroApp) => {
  const posts = await prisma.post.findMany();

  await redisClient.connect();
  await redisClient.set("cache", JSON.stringify(posts));
  console.log("💾 server startup: posts cached in redis");
  await redisClient.disconnect();
});
