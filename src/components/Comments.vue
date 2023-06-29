<template>
  <Carousel>
    <div  v-for="comment in comments" :key="comment">
      <div class="comment">
        <div class="user">
          <img src="../assets/Oval_2.svg" alt="ProfilePic">
          <div class="name">{{comment.user}}</div>
        </div>
        <div class="reviewTitle">
          <span>БАРСЕЛОНА </span>
          <div>— О ГОРОДЕ:</div>
        </div>
        <div class="text">
          {{ comment.comment }}
        </div>
        <div class="images">
          <div 
            v-for="(image, index) in comment.images.slice(0,3)" :key="index"
            class="image" 
            :style="{'background': 'no-repeat url('+ image +')'}"
            @click="popup(image)"
            >      
          </div>
          <div class="last" v-if="comment.images.length > 3">
            <div 
              class="image"
              :style="{'background': 'no-repeat url('+ comment.images[3] +')'}"
              style="position: absolute; top: 0;">
            </div>
            <div style="position: absolute; top: 0;"> +{{ comment.images.length - 3 }} </div>
          </div>
        </div>
        <div class="footer">
          <div style="padding-right: 11px;">{{comment.date}}</div>
          <div style="padding-right: 5px;">•</div>
          <div style="padding-right: 28px;">{{ comment.commentCount }}</div>
          <div class="like"></div>
          <div style="padding-right: 4px;">{{comment.likes}}</div>
        </div>
      </div>
    </div>
  </Carousel>

  <ImageView v-model:show="dialogVisible">
    <img style="width: 400px;" :src="image" alt="123">
  </ImageView>
</template>
  
  <script>
	import image1 from '../assets/IMG_2299.svg'
	import image2 from '../assets/IMG_2388.svg'
	import image3 from '../assets/IMG_2675.svg'
  
  import Carousel from '../components/Carousel.vue'
  import ImageView from '../components/ImageView.vue'
    export default {
        name: 'ReviewsComponent',
        components : {
          Carousel,
          ImageView
        },
        data () {
            return {
                comments : [
                  {
                    user : 'Наталия Полянская',
                    comment : 'Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...',
                    images : [
                      image1,
                      image2,
                      image3,
                      image3,
                      image2,
                      image1,
                    ],
                    date : 'около 1 года назад',
                    commentCount : '9 комментариев',
                    likes : 9
                  },
                  {
                    user : 'Elena Bulgakova',
                    comment : 'Плюсы города: весь город одни плюсы! Минусы города: не видела. В наш марафон по Европе не вписалось 2 испанских города от усталости - решили остаток путешествия провести в Барселоне ...',
                    images : [
                      image1,
                      image2,
                      image3,
                    ],
                    date : '5 месяцев назад',
                    commentCount : '15 комментариев',
                    likes : 21
                  },
                  {
                    user : 'Наталия Полянская',
                    comment : 'Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...',
                    images : [
                      image1,
                      image2,
                      image3,
                      image3,
                      image2,
                      image1,
                    ],
                    date : 'около 1 года назад',
                    commentCount : '9 комментариев',
                    likes : 9
                  },
                  {
                    user : 'Elena Bulgakova',
                    comment : 'Плюсы города: весь город одни плюсы! Минусы города: не видела. В наш марафон по Европе не вписалось 2 испанских города от усталости - решили остаток путешествия провести в Барселоне ...',
                    images : [
                      image1,
                      image2,
                      image3,
                    ],
                    date : '5 месяцев назад',
                    commentCount : '15 комментариев',
                    likes : 21
                  },
                  {
                    user : 'Наталия Полянская',
                    comment : 'Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...',
                    images : [
                      image1,
                      image2,
                      image3,
                      image3,
                      image2,
                      image1,
                    ],
                    date : 'около 1 года назад',
                    commentCount : '9 комментариев',
                    likes : 9
                  },
                  {
                    user : 'Elena Bulgakova',
                    comment : 'Плюсы города: весь город одни плюсы! Минусы города: не видела. В наш марафон по Европе не вписалось 2 испанских города от усталости - решили остаток путешествия провести в Барселоне ...',
                    images : [
                      image1,
                      image2,
                      image3,
                    ],
                    date : '5 месяцев назад',
                    commentCount : '15 комментариев',
                    likes : 21
                  },
                  {
                    user : 'Наталия Полянская',
                    comment : 'Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...',
                    images : [
                      image1,
                      image2,
                      image3,
                      image3,
                      image2,
                      image1,
                    ],
                    date : 'около 1 года назад',
                    commentCount : '9 комментариев',
                    likes : 9
                  },
                ],
                dialogVisible : false,
                image : ''
            }
        },
        methods : {
          popup(image) {
            this.image = image
            this.dialogVisible = true
          }
        }
  }
  </script>
  
  
  <style scoped>
  .comment {
    background-color: #F9F7F2;
    margin-left: 31px;
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
			margin-right: 6px;
	}
	.image {
		width: 56px;
		height: 50px;
	}
  .image:hover {
    cursor: pointer;
  }
	.last {
    position: relative;
	}
  .last :last-child {
    display: flex;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-size: 17px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    background: rgba(16, 16, 16, 0.40);
  }
  .footer {
    margin: 26px 0 0 19px;
    display: flex;
    color: #9D9D9D;
    font-size: 11px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
  }
  .like {
    width: 14px;
    height: 16px;
    margin-right: 4px;
    background-image: url(../assets/like.svg);
  }
  </style>
  