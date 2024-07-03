<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="👍️" v-model="keyword" @input="searchName(keyword)" />
    <div
      class="post-header"
      v-for="follower in filteredFollowers"
      :key="follower.id"
    >
      <div
        class="profile"
        :style="`background-image:url(${follower.image})`"
      ></div>
      <span class="profile-name">{{ follower.name }}</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";

export default {
  name: "MyPage",
  setup() {
    // ! composition API 사용법
    // 항상 ref를 사용해서 사용해야함.
    let followers = ref([]);
    let filteredFollowers = ref([]);

    const searchName = (name) => {
      filteredFollowers.value = followers.value.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase())
      );
    };
    onMounted(() => {
      axios
        .get("/follower.json")
        .then((result) => {
          followers.value = result.data;
          filteredFollowers.value = result.data;
        })
        .catch((error) => {
          console.error("Error fetching followers:", error);
        });
    });

    return { followers, filteredFollowers, searchName };
  },
};
</script>

<style>
@import "../assets/post.css";
</style>
