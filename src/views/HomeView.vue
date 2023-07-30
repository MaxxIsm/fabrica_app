<script setup>
import { useImagesStore } from "@/stores/images.js";

const images = useImagesStore();

// images.search();
</script>

<template>
  <div class="image-container">
    <RouterLink
      :to="{ name: 'image', params: { imageId: image.id } }"
      v-for="image in images.images"
    >
      <img
        :src="image.urls.thumb"
        :alt="image.alt_description"
        class="image-item"
      />
    </RouterLink>
  </div>
</template>

<style scoped>
.image-container {
  margin: 0 auto;
  max-width: 1240px;
  display: grid;
  padding: 20px;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

@media (max-width: 1200px) {
  .image-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}

@media (max-width: 600px) {
  .image-container {
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
  }
}

.image-item {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 8px;
}
</style>
