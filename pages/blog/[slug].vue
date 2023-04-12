<template>
  <div>{{ post }}</div>
  <ClientOnly>{{ err }}</ClientOnly>
</template>

<script lang="ts" setup>
const route = useRoute();
const { data: post, error: err } = await useAsyncData(() =>
  $fetch(`/post/${route.params.slug}`, {
    method: "GET",
  })
);

definePageMeta({
  layout: "main",
});
</script>
