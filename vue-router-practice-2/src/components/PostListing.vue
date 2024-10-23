<script setup>
import { onBeforeMount, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import axios from "axios";

const route = useRoute();
const postId = route.params.id;

const post = ref({});
const isLoading = ref(true);

onBeforeMount(async () => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    post.value = response.data;
  } catch (error) {
    console.error("Error loading post", error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <section v-if="!isLoading">
    <ul>
      <li v-for="(value, key) in post">{{ key }}: {{ value }}</li>
    </ul>
  </section>

  <div v-else>
    <PulseLoader />
  </div>
</template>

<style scoped></style>
