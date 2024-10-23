<script setup>
import { onBeforeMount, ref } from "vue";
import { RouterLink } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import axios from "axios";

const posts = ref([]);
const isLoading = ref(true);

onBeforeMount(async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/"
    );
    posts.value = response.data;
  } catch (error) {
    console.error("Error to load posts", error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <section v-if="!isLoading">
    <ul>
      <li v-for="post in posts" :key="post">
        <RouterLink :to="`/posts/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>
  </section>

  <div v-else>
    <PulseLoader />
  </div>
</template>

<style></style>
