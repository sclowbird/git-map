<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <GitMap></GitMap>
  </div>
</template>

<script>
import GitMap from './components/GitMap.vue';

export default {
    name: 'app',
    components: {
        GitMap
    }
}

</script>

<style>
@import './css/materialize.css';

#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  font-family: 'Dancing Script', cursive;
  font-size: 30px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 80px;
  background-color: #7CC2AF;
}

html {
    background-color: #7CC2AF;
}
</style>
