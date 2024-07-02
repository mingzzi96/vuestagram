<template>
  <div class="post">
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">{{posts[0].name}}</span>
    </div>
    <div class="post-body"></div>
    <div class="post-content">
      <p>{{posts[0].likes}} Likes</p>
      <p><strong>{{posts[0].name}}</strong> {{posts[0].content}}</p>
      <p class="date">{{posts[0].date}}</p>
    </div>
  </div> 
</template>

<script>
export default {
    name: "PostPage",
    props: {
        posts: Array
    }
}
</script>

<style>
    @import '../assets/post.css';
</style>