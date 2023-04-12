import { getRedisMetaList } from "../models/dtos/Meta";

// SORT BY DATE AND THEN ALPHABETICAL

export default defineEventHandler((_event) => {
  return getRedisMetaList();
});
