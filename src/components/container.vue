<template>
  <div>
    <!-- 메인페이지 -->
    <template v-if="step === 0">
      <Post
        v-for="(post, index) in posts"
        :key="post.content"
        :post="posts[index]"
      />
    </template>

    <div v-if="step === 1">
      <!-- 필터선택페이지 -->
      <div
        :class="`upload-image ${$store.state.clickedFilterName}`"
        :style="{ backgroundImage: `url(${uploadedImageUrl})` }"
      ></div>
      <div class="filters">
        <FilterBox
          v-for="(filter, index) in filters"
          :key="filter + index"
          :uploadedImageUrl="uploadedImageUrl"
          :filter="filter"
        >
          {{ filter }}
        </FilterBox>
      </div>
    </div>
    <div v-if="step === 2">
      <!-- 글작성페이지 -->
      <div
        class="upload-image"
        :style="{ backgroundImage: `url(${uploadedImageUrl})` }"
      ></div>
      <div class="write">
        <textarea
          @input="$emit('write', $event.target.value)"
          class="write-box"
        />
      </div>
    </div>
    <!-- 팔로워 검색 페이지 -->
    <div v-if="step === 3">
      <MyPage />
    </div>
  </div>
</template>

<script>
import FilterBox from "./filter-box.vue";
import MyPage from "./my-page.vue";
import Post from "./post.vue";

export default {
  name: "ContainerPage",
  data() {
    return {};
  },
  props: {
    posts: Array,
    step: Number,
    uploadedImageUrl: String,
    filters: Array,
  },
  components: {
    Post,
    FilterBox,
    MyPage,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
