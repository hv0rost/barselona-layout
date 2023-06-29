import { createStore } from 'vuex'
import adminPic from '../assets/Oval_2.1.svg'
import userPic from '../assets/Oval_2.svg'

const store = createStore({
  state () {
    return {
      messages : [
        {
          pic : adminPic,
          text: 'Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотел бы отметить очень важную область исследования ',
          date : 'Вчера в 17:45',
          role : 'admin'
        },
        {
          pic : userPic,
          text: 'Что из себя представляет вулкан? Просто хочу убедиться, что готова к такому путешествию.',
          date : 'Вчера в 18:45',
          role : 'user'
        },
        {
          pic : adminPic,
          text: 'Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотел бы отметить очень важную область исследования ',
          date : 'Вчера в 17:45',
          role : 'admin'
        },
        {
          pic : userPic,
          text: 'Что из себя представляет вулкан? Просто хочу убедиться, что готова к такому путешествию.',
          date : 'Вчера в 18:45',
          role : 'user'
        },
        {
          pic : adminPic,
          text: 'Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотел бы отметить очень важную область исследования ',
          date : 'Вчера в 17:45',
          role : 'admin'
        },
        {
          pic : userPic,
          text: 'Что из себя представляет вулкан? Просто хочу убедиться, что готова к такому путешествию.',
          date : 'Вчера в 18:45',
          role : 'user'
        },
      ]
    }
  },
  getters: {
    getMessages (state) {
      return state.messages
    }
  }
})

export default store;
