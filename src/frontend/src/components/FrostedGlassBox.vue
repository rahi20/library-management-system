<template>
  <div class="box">
    <div class="container">
      <LoginField imgsrc = "user.png" kind = "text" txt = "username" />
      <LoginField imgsrc = "unlock.png" kind = "password" txt = "password" />
      <input type = "submit" value="LOGIN">
    </div>
  </div>
</template>

<script>
import LoginField from "@/components/LoginField";

export default {
  name: "FrostedGlassBox",

  components : {
    LoginField,
  },

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&display=swap');
  .box{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width : 400px;
    height : 300px;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2);
    border-radius: 5px;
    z-index: 1;
    background: inherit;
    overflow: hidden;
  }

  .box::before {
    content: "";
    position: absolute;
    background: inherit;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /*transform: translate(-50%, -50%);*/
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
    filter: blur(20px);
    margin: -20px;
  }

  .container {
    position: absolute;
    top : 50%;
    left : 50%;
    transform: translate(-50%, -50%);
  }

  .container input{
    border: none;
    border-radius: 7px;
    background: #C68880;/*#BCAC9B;*/
    color: #E6D7C7;
    margin-top: 15px;
    padding: 7px 20px 7px 20px;
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
  }

</style>