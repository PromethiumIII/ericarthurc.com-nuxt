<template>
  <div>
    <span>{{ rng }}</span>
    <button @click="randomize">Generate</button>
  </div>
</template>

<script setup lang="ts">
const rng = ref();

function randomize() {
  rng.value = Math.floor(Math.random() * 101);
}

definePageMeta({
  layout: "main",
});
</script>
