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
    // ? : ref(원시형 데이터에 사용)나 reactive(참조형 데이터에 사용)를 사용하면 된다.

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
          console.error("에러 발생: ", error);
        });
    });

    return { followers, filteredFollowers, searchName };
  },
};
</script>

<style>
@import "../assets/post.css";
</style>
