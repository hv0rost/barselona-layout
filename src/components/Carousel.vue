<template>
    <div>
      <div class="carousel" @wheel.prevent="changeSlide">
        <slot></slot>
      </div>

      <div class="footer">
        <div class="allReviews">
          Все отзывы
        </div>
        <div class="dots">
          <div class="dot" :class="{active : n === active}" v-for="n in dotsCount" :key="n">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CarouselComponent',
    data () {
      return {
        dotsCount : 0,
        active : 1,
      }
    },
    methods: {
      changeSlide(event) {
        let delta = -1;
        if (event.deltaY > 0) {
            delta = 1;
        }
        let carousel = this.$el.querySelector(".carousel");
        const width = carousel.offsetWidth;
        carousel.scrollTo(carousel.scrollLeft + width * delta, 0);
        
        const page = Math.round(Number(carousel.scrollLeft + width) / Number(carousel.offsetWidth)) + delta
        if (page !== 0 && page <= this.dotsCount) {
          this.active = page
        }
      }
    },
    mounted() {
      const carousel = this.$el.querySelector(".carousel");
      this.dotsCount = Math.ceil(carousel.scrollWidth / carousel.offsetWidth)
    }
  };
  </script>
  
  
  <style scoped>
  .carousel {
    display: flex;
    margin-top: 21px;
    overflow-x: hidden;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
  }
  
  .carousel > * {
    flex: 1 0 100%;
    scroll-snap-align: start;
  }
  .dots {
    display: flex;
    align-items: center;
  }
  .dot{
    height: 3px;
    width: 3px;
    margin-right: 10px;
    background-color: #212121;
    border-radius: 50%;
  }

  .active {
    height: 6px;
    width: 6px;
    background-color: #FF4641;
  }
  
  .allReviews {
    width: 124px;
    height: 40px;
    border-radius: 2px;
    border: 2px solid #FF4641;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #212121;
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    margin-top: 43px;
  }
  </style>
  