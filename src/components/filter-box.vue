<template>
  <div @click="$store.commit('changeFilterName', filter)" :class="`filter-item ${filter}`" :style="`background-image:url(${uploadedImageUrl})`">
    <slot></slot>
</div> 
</template>

<script>
export default {
    name:'FilterBox',
    props: {
        uploadedImageUrl: String,
        filter: String
    },
    methods: {
    }
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>