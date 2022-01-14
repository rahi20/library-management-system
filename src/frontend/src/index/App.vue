<template>
  <FrostedGlassBox />

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
  background-attachment: fixed;
  background: rgb(22,66,91);
  background: radial-gradient(circle, rgba(22,66,91,0.9) 31%, rgba(198,136,128,0.94) 100%);
}
#app {
  position: relative;
  width : 100%;
  height : 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
