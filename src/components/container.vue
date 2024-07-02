<template>
    <div>
        <Post v-for="(post, index) in posts" :key="post.title+index" :post="posts[index]" />
    </div>
</template>

<script>
import Post from './post.vue'

export default {
    name: "ContainerPage",
    props: {
        posts: Array
    },
    components: {
        Post
    }
}
</script>

<style>

</style>