import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useImagesStore = defineStore("images", {
  state() {
    return {
      searchTerm: "",
      images: [],
      image: {},
      imageId: "",
      favoriteImages: [],
    };
  },

  actions: {
    setImageId(imageId) {
      this.imageId = imageId;
    },

    setFavoriteImages(images) {
      this.favoriteImages = JSON.parse(localStorage.getItem("favoriteImages"));
    },

    addToFavorite(image) {
      const hasImage = this.favoriteImages.some(function (item) {
        return item.id === image.id;
      });

      if (!hasImage) {
        this.favoriteImages.push(image);

        localStorage.setItem(
          "favoriteImages",
          JSON.stringify(this.favoriteImages)
        );

        return;
      }

      alert("Already in favorites");
    },

    search() {
      if (this.searchTerm.length) {
        this.byTerm();

        return;
      }

      this.random();
    },

    async random() {
      this.images = [];

      try {
        let response = await axios.get(
          `https://api.unsplash.com/photos/random?count=8&client_id=fzuOmwSLFvjqFRUkH6UIzRAI2qEdJ6RcwA4e5DtwqVg`
        );

        this.images = response.data;
        console.log("random images", response.data);
      } catch (e) {
        console.log(e);
      }
    },

    async byTerm() {
      this.images = [];

      try {
        let response = await axios.get(
          `https://api.unsplash.com/search/photos?per_page=8&query=${this.searchTerm}&client_id=fzuOmwSLFvjqFRUkH6UIzRAI2qEdJ6RcwA4e5DtwqVg`
        );

        this.images = response.data.results;
        this.searchTerm = "";

        console.log("searched iamges", response.data.results);
      } catch (e) {
        console.log(e);
      }
    },

    async searchById() {
      this.image = {};

      try {
        let response = await axios.get(
          `https://api.unsplash.com/photos/${this.imageId}?client_id=fzuOmwSLFvjqFRUkH6UIzRAI2qEdJ6RcwA4e5DtwqVg`
        );

        console.log(response.data);
        this.image = response.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
});
