<template>
  <div class="map">
      <p> {{ repdata }}</p>
  </div>
</template>

<script>
export default {
  name: 'GitMap',
  props: {
    repdata: Array
  },

  methods: {
      repositoryNames: function() {
          console.log("Called.")
          for(let data in this.repdata) {
              console.log(`Data Name: ${data.name}`);
          }
      }
  },


  watch: {

  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
