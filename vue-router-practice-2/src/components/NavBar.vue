<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
  </div>
</template>

<style>
.router-link-active {
  color: red;
}

div {
  position: relative;
  top: 0;
  left: 0;
}
</style>
