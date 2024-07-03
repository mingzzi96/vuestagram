<template>
  <div class="header">
      <ul class="header-button-left">
        <li @click="clickCancel">Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li @click="clickNext">Next</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>

    <Container :posts="posts" :step="step" :uploadImageUrl="uploadImageUrl" />

    <button @click="more">더보기</button>

    <div class="footer">
      <ul class="footer-button-plus">
        <input @change="upload" type="file" id="file" class="inputfile" />
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
      step: 0,
      uploadImageUrl: '',
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
    },
    upload(e){
      let file = e.target.files;
      // 이미지 url
      let url = URL.createObjectURL(file[0])
      this.uploadImageUrl = url
      this.step++
    },
    clickNext(){
      if(this.step === 2){
        return false
      }

      return this.step++
    },
    clickCancel(){
      this.step = 0
    }
  }
}
</script>

<style>
  @import './assets/style.css';
</style>