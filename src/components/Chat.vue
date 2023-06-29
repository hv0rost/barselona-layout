<template>
  <div class="chat">
    <div class="title">Чат с пользователем</div>
    <div class="chatBody">

      <div class="chatHeader">
        <img class="profilePic" src="../assets/Oval_2.svg" alt="ProfilePic">
        <div>
          <div>{{ name }}</div>
          <div class="subtitle">
          <img style="width: 7.273px; height: 10px;" src="../assets/flag.svg" alt="flag">
          <div style="padding-left: 3.75px;">{{subtitle}}</div>
        </div>
        </div>
        <img v-if="role !== 'admin'" class="rating" src="../assets/rating.svg" alt="rating">
      </div>

      <div class="messages">
        <div class="message" :class="{user : message.role === 'user'}" v-for="message in messages" :key="message">
          <img class="profilePic" :src="message.pic" alt="ProfilePic">
          <div style="margin-left: 19px;">
            <div class="messageText"> {{ message.text }}</div>
            <div class="messageDate"> {{ message.date }}</div>
          </div>
        </div>
      </div>

      <div class="chatFooter">
        <img style="padding-left: 0;" class="profilePic" src="../assets/Oval_2.1.svg" alt="ProfilePic">
        <input class="textField" v-model="message" type="text" placeholder="Напишите сообщение...">
        <img class="send" src="../assets/send.svg" alt="Send" @click="sendMessage">
      </div>
    </div>
  </div>

</template>

<script>
export default{
    name : 'ChatComponent',
    props : ['name', 'subtitle', 'role'],
    data () {
      return {
        message : ''
      }
    },
    computed : {
      messages () {
        return this.$store.getters.getMessages
      }
    },
    methods : {
      sendMessage() {
        console.log(this.message);
        this.message = ''
      }
    }
}
</script>

<style scoped>
.chat {
  margin: 50px 0 50px 0;
}
.title {
  color: #000;
  font-size: 29px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  letter-spacing: 0.87px;
}
.chatBody {
  width: 415px;
  height: 698px;
}
.chatHeader {
  margin-top: 25px;
  width: 415px;
  height: 98px;
  display: flex;
  color: #000;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;;
  font-weight: 700;
  line-height: 17px;
  align-items: center;
  border-bottom: 1px solid #ECECEC;
}
.profilePic {
  width: 44px;
  height: 44px;
  padding-left: 27px;
  padding-right: 19px;
}
.subtitle {
  display: flex;
  color: #FF4641;
  font-size: 13px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  margin-right: 67px;
  margin-top: 7px;
  align-items: center;
}
.rating {
  width: 75.75px; 
  height: 12px; 
}
.chatFooter {
  padding: 27px;
  display: flex;
  align-items: center;
  border-top: 1px solid #ECECEC;;
}
.textField {
  width: 270px;
  height: 49px;
  border: 1px solid #ECECEC;
  background: #FFF;
  margin-left: 19px;
  margin-right: 15px;

  color: #A3A2A2;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 24px;
  text-align: start;
  padding-left: 15px;
}
.textField:focus {
  outline: none;
  border:1px solid #FF4641;
  box-shadow: 0 0 10px #719ECE;
  color : #000;
}
.textField::placeholder {
   text-align: center; 
}
.message {
  display: flex;
  margin-top: 17px;
}
.messageText {
  color: #000;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding-right: 28px;
}
.messageDate {
  color: #9D9D9D;
  font-size: 11px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
}
.messages {
  overflow-y: auto;
  overflow-x: hidden;  
  max-height: 498px;
}
.messages::-webkit-scrollbar {
  width: 3px;
}
.messages::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
.messages::-webkit-scrollbar-thumb {
  background-color: #FF4641;;
}
.user {
  background-color: #F9F7F2;
}
.send {
  width: 22px;
}
.send:hover {
  cursor: pointer;
}
</style>