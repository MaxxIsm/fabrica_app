<script setup>
import { RouterView } from "vue-router";
import MainHeader from "@/components/MainHeader.vue";
import SecondaryHeader from "@/components/SecondaryHeader.vue";
import { useRoute } from "vue-router";
import { onBeforeMount } from "vue";
import { useImagesStore } from "@/stores/images.js";

const route = useRoute();
const images = useImagesStore();

onBeforeMount(() => {
  images.setFavoriteImages()
});
</script>

<template>
  <MainHeader v-if="route.name === 'home'" />

  <SecondaryHeader v-else />
  
  <RouterView />
</template>