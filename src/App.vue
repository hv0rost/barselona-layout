<template>
  <div class="main">
    <CityView />
    <Reviews />

  </div>
</template>

<script>

import CityView from "@/components/CityView.vue";
import Reviews from "@/components/Reviews.vue";
export default {
  name: 'App',
  components: {
    CityView,
    Reviews
  }
}
</script>

<style>
  .main {
    width: 879px;
    margin: auto;
  }
  html { height: 100%; overflow:auto; }
  body { height: 100%; }
</style>
