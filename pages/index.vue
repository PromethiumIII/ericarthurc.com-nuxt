<template>
  <div>
    <h2>Stuff</h2>
    <div v-for="meta in metaList" :key="meta.id">
      <div>
        <span>{{ meta.title }}</span>
        <span>{{ new Date(meta.date).toLocaleDateString() }}</span>
        <NuxtLink :to="`/blog/${meta.slug}`">{{ meta.slug }}</NuxtLink>
        <div v-for="category in meta.categories">
          <span>{{ category }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: metaList } = await useAsyncData(() =>
  $fetch("/meta", {
    method: "GET",
  })
);

definePageMeta({
  layout: "main",
});
</script>
