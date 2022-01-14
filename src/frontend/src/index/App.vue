<template>
  <div class="tocenter">
    <img class="logo" :src="require(`@/assets/img/logo.png`)" alt="logo-libri" />
    <FrostedGlassBox />
  </div>
</template>

<script>
import FrostedGlassBox from '../components/FrostedGlassBox'

export default {
  name: 'App',

  components: {
    FrostedGlassBox,
  },

}
</script>

<style>
* {
  margin : 0;
  padding : 0;
}

body, html {
  width : 100%;
  height : 100%;
}

body {
  background: rgb(22,66,91);
  background: radial-gradient(circle, rgba(22,66,91,0.9) 31%, rgba(198,136,128,0.94) 100%);
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  width : 100%;
  height : 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.tocenter {
  width: 600px;
  height : 600px;
}

.logo{
  width : 250px;
  height: 180px;
}

</style>
