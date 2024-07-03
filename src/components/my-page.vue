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
import { onMounted, ref, watch } from "vue";

export default {
  name: "MyPage",
  setup() {
    // ! composition API 사용법
    // ? : ref(원시형 데이터에 사용)나 reactive(참조형 데이터에 사용)를 사용하면 된다.

    let followers = ref([]);
    let filteredFollowers = ref([]);
    let computedResult = ref(0);

    const searchName = (name) => {
      filteredFollowers.value = followers.value.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase())
      );
    };
    // ! 하지만 이렇게 찍어보면 length가 제대로 나오지 않고 0이 출력됨.
    // console.log(computedResult.value);
    // ! 왜냐하면 비동기 처리인 axios보다 먼저 실행되어서 배열의 길이가 0인것임.
    // ! 해결법은 watch를 사용해서 데이터 변경을 감지해야한다. react의 의존성배열 같은 느낌
    watch(followers, (newVal) => {
      computedResult.value = newVal.length;
      // watch 덕분에 followers가 변화될 때 마다 그 값이 업데이트 되고, 출력됨.
      console.log(computedResult.value);
    });

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
