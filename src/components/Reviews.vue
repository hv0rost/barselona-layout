<template>
    <div class="main">
        <div class="title">
            Отзывы о Барселоне
        </div>
        <Comments />
    </div>
  </template>
  
  <script>
import Comments  from '../components/Comments.vue';
  export default {
    name: 'ReviewsComponent',
    components : {
      Comments
    }
  }
  </script>
  
  
  <style scoped>
  .main {
    margin-top: 55px;
  }
  .title {
    color: #000;
    font-size: 29px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    letter-spacing: 0.87px;
    padding-left: 31px;
  }
  </style>
  