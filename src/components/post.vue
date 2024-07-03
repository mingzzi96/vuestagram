<template>
  <div class="post">
    <div class="post-header">
    <div class="profile" :style="{ backgroundImage : `url(${post.postImage })` }"></div>
      <span class="profile-name">{{post.name}}</span>
    </div>
    <div class="post-body" :style="{ backgroundImage : `url(${post.userImage })` }"></div>
    <div class="post-content">
      <p @click="$store.commit('changeLikes')">{{$store.state.likes}} Likes</p>
      <p><strong>{{post.name}}</strong> {{post.content}}</p>
      <p class="date">{{post.date}}</p>
    </div>
  </div> 
</template>

<script>
export default {
    name: "PostPage",
    props: {
        post: Object
    }
}
</script>

<style>
    @import '../assets/post.css';
</style>