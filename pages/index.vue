<template>
  <div>
    <h2>Stuff</h2>
    <div v-for="post in posts" :key="post.id">
      <div>
        <span>{{ post.title }}</span>
        <span>{{ new Date(post.date) }}</span>
        <div v-for="category in post.categories">
          <span>{{ category }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: posts } = await useAsyncData(() => $fetch("/api/post"));

definePageMeta({
  layout: "main",
});
</script>
