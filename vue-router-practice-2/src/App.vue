<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>


  <div>
<NavBar/>

    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <div :key="route.fullPath">
          <component :is="Component"></component>
        </div>
      </transition>
    </router-view>
  </div>
</template>

<style>
.router-link-active {
  color: red;
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

.fade-leave-active {
  position: absolute;
}
</style>
