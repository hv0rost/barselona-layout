<template>
  <div class="main">
    <img src="../assets/BarcelonaSpain.png" alt="BarcelonaImg">
    <div class="text">
      <div class="title">
        Барселона — обзор города
      </div>
      <div class="description">
        Барселона с её золотистыми пляжами,
       архитектурными шедеврами Гауди, 
       многочисленными фестивалями и 
       гастрономическим разнообразием понравилась 
       мне в первый же день пребывания и стала местом, в котором...
      </div>
      <div class="more">
        Читать дальше
        <div class="underline"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityView',

}
</script>


<style scoped>
img {
  width: 440px;
  height: 440px;
  flex-shrink: 0;
}
.title {
  padding-left: 29px;
  font-size: 29px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  letter-spacing: 0.87px;
}
.main {
  display: flex;
}
.description {
  padding: 19px 0px 0px 29px;
  font-size: 17px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}
.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.more {
  width: 122px;
  font-size: 17px;
  font-family: 'Roboto', sans-serif;
  padding: 6px 0 0 29px;
}
.underline {
  height: 3px;
  flex-shrink: 0;
  background: #FF4641;
}
</style>
