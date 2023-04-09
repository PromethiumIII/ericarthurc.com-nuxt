import { getRedisMetaList } from "../models/dtos/Meta";

export default defineEventHandler((_event) => {
  return getRedisMetaList();
});
