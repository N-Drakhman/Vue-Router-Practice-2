<script setup>
import axios from "axios";
import { onBeforeMount, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
const postId = route.params.id;

const post = ref({});

onBeforeMount(async () => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    post.value = response.data;
  } catch (error) {
    console.error("Error loading post", error);
  }
});
</script>

<template>
  <ul>
    <li v-for="(value, key) in post">{{ key }}: {{ value }}</li>
  </ul>
</template>

<style scoped></style>
