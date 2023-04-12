import { getRedisPostBySlug } from "~/server/models/Post";

export default defineEventHandler(async (event) => {
  if (event.context.params?.slug) {
    const post = await getRedisPostBySlug(event.context.params.slug);

    if (post) {
      return post;
    }
    throw createError({
      statusCode: 404,
      statusMessage: `${event.context.params.slug} not found`,
    });
  }

  throw createError({
    statusCode: 500,
    statusMessage: `error`,
  });
});
