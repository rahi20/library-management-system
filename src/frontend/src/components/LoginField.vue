<template>
  <div class="login-field">
    <img :src="require(`@/assets/img/${imgsrc}`)" />
    <input v-bind:type = "{kind}" :placeholder = "[[ txt ]]" />
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: "LoginField",

  props : {
    imgsrc : String,
    kind : String,
    txt : String,
  },

  components : {
    FontAwesomeIcon,
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500&display=swap');

.login-field {
  display: flex;
  justify-content: center;
  align-items: center;
  border : 1px solid #BCAC9B;
  border-radius: 7px;
  width : 250px;
  height : 30px;
  margin-bottom: 10px;
  font-family: 'Open Sans', sans-serif;
}

.login-field img {
  width : 16px;
  height : 16px;
  padding : 7px;
}

.login-field input {
  flex-grow: 1;
  padding: 5px;
  background: none;
  border: none;
  font-family: 'Open Sans', sans-serif;

}

.login-field input:focus{
  outline: none;
}

::placeholder {
  color: #CCC;
  opacity: 0.85;
}

:-ms-input-placeholder {
  color: #CCC;
  opacity: 0.85;
}

::-ms-input-placeholder {
  color: #CCC;
  opacity: 0.85;
}

</style>