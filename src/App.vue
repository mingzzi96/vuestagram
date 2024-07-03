<template>
  <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li>Next</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>

    <Container :posts="posts"/>

    <button @click="more">더보기</button>

    <div class="footer">
      <ul class="footer-button-plus">
        <input type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
  </div>
</template>

<script>

import Container from './components/container.vue'
import Posts from './assets/post-data'
import axios from 'axios'

export default {
  name: 'App',
  data(){
    return {
      clicked: 0,
      posts: Posts
    }
  },
  components: {
    Container
  },
  methods: {
    more(){
      if(this.clicked >= 1){
        return axios.get('https://codingapple1.github.io/vue/more1.json')
        .then((result) => {
          this.posts.push(result.data)
        })
      }
      return axios.get('https://codingapple1.github.io/vue/more0.json')
      .then((result) => {
        this.clicked++
        console.log(this.clicked)
        this.posts.push(result.data)
      })
    }
  }
}
</script>

<style>
  @import './assets/style.css';
</style>