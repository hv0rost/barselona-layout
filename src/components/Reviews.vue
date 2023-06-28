<template>
    <div class="main">
        <div class="title">
            Отзывы о Барселоне
        </div>
        <div style="padding-left: 31px;">
            <div class="sliderContent">
                <div class="user">
                    <img src="../assets/Oval_2.svg" alt="ProfilePic">
                    <div class="name">Наталия Полянская</div>
                </div>
                <div class="reviewTitle">
                    <span>БАРСЕЛОНА </span>
                    <div>— О ГОРОДЕ:</div>
                </div>
                <div class="text">
                   {{ comments[0] }}
                </div>
                <div class="images">
                    <div 
										v-for="(image, index) in images" :key="index"
										class="image" 
										:class="{last : images.length - 1 === index}"
										:style="{'background': 'no-repeat url('+ image +')'}">
									</div>
                </div>
            </div>
        </div>

    </div>
  </template>
  
  <script>
	import image1 from '../assets/IMG_2299.svg'
	import image2 from '../assets/IMG_2388.svg'
	import image3 from '../assets/IMG_2675.svg'
  export default {
    name: 'ReviewsComponent',
    data () {
        return {
            comments : [
							'Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...'
            ],
						images : [
							image1,
							image2,
							image3,
							image3,
						]
        }
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
  .sliderContent {
    padding-top: 21px;
    background-color: #F9F7F2;
    
  }
  .name {
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    padding-left: 10px;
  }
  .user {
    display: flex;
    align-items: center;
    padding: 26px 0 28px 19px; 
  }
  span {
    color: #FC4F1E;
    font-size: 13px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    letter-spacing: 0.464px;
    white-space: pre-wrap;
  }
  .reviewTitle {
    display: flex;
    padding-left: 19px;
  }
  div.reviewTitle {
    color: #212121;
    font-size: 13px;
    font-family: 'Roboto', sans-serif;
    line-height: 17px;
    letter-spacing: 0.464px;
  }
  .text {
    width: 272px;
    padding: 12px 0 0 19px;
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    line-height: 25px;
  }
  .images {
    margin: 8px 0 0 19px;
		display: flex ;
  }
	img {
			padding-right: 6px;
	}
	.last {

	}
	.image {
		width: 56px;
		height: 50px;
	}
	.last {
		padding: 10px;
	}
  </style>
  