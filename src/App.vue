<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="clickCancel">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step === 2" @click="clickPublish">Publish</li>
      <li v-else @click="clickNext">Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container
    :filterName="filterName"
    :filters="filters"
    :posts="posts"
    :step="step"
    :uploadedImageUrl="uploadedImageUrl"
    @write="uploadedContent = $event"
  />

  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from "./components/container.vue";
import Posts from "./assets/post-data";
import Filters from "./assets/filter-data";

export default {
  name: "App",
  data() {
    return {
      step: 3,
      uploadedImageUrl: "",
      uploadedContent: "",
      filterName: "",
      clicked: 0,
      posts: Posts,
      filters: Filters,
    };
  },
  components: {
    Container,
  },
  methods: {
    more() {
      // ! store actions를 실행시키는 방법.
      // ! dispatch를 활용하여야 한다.
      this.$store.dispatch("getMore").then(() => {
        this.posts.push(this.$store.state.more);
      });
    },
    upload(e) {
      let file = e.target.files;
      // 이미지 url
      let url = URL.createObjectURL(file[0]);
      this.uploadedImageUrl = url;
      this.step++;
    },
    clickNext() {
      if (this.step === 2) {
        return false;
      }

      return this.step++;
    },
    clickCancel() {
      this.step = 0;
    },
    publish() {
      let uploaded = {
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.uploadedImageUrl,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.uploadedContent,
        filter: this.state.clickedFilterName,
      };
      this.step.unshift(uploaded);
      this.step = 0;
    },
  },
};
</script>

<style>
@import "./assets/style.css";
</style>
