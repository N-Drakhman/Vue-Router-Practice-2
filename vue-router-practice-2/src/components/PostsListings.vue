<script setup>
import { onBeforeMount, ref } from "vue";
import { RouterLink } from "vue-router";
import axios from "axios";

const posts = ref([]);

onBeforeMount(async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/"
    );
    posts.value = response.data;
  } catch (error) {
    console.error("Error to load posts", error);
  }
});
</script>

<template>
  <section>
    <ul>
      <li v-for="post in posts" :key="post">
        <RouterLink :to="`/posts/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>
  </section>
</template>

<style></style>
