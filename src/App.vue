<template>
  <div class="main">
    <CityView />
    <Reviews />
    <div class="chats">
      <Chat :name="'Наталия Полянская'" :subtitle="'Гид по Баварии, фотограф'" :role="'user'" />
      <div class="spacer"></div>
      <Chat :name="'Администратор'" :subtitle="'TravelAsk'" :role="'admin'" />
    </div>
  </div>
</template>

<script>

import CityView from "@/components/CityView.vue";
import Reviews from "@/components/Reviews.vue";
import Chat from "@/components/Chat.vue";

export default {
  name: 'App',
  components: {
    CityView,
    Reviews,
    Chat
  },
  data() {
    return {
      user : 'Наталия Полянская'
    }
  }
}
</script>

<style>
  .main {
    width: 879px;
    margin: auto;
  }
  .chats {
    display: flex;
    justify-content: space-between;
  }
  .spacer {
    width: 2px;
    height: 758px;
    background: #EBE9E4;
    margin-top: 50px;
  }
</style>
