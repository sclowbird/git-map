<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <GitMap msg="Welcome to Your Vue.js App"/>
    <form>
    <input id="gitname" name="gitname" v-model="githubName">
    <button type="button" @click="fetch">Submit</button>
    </form>
    <p> {{ repdata }}</p>
  </div>
</template>

<script>
import GitMap from './components/GitMap.vue';
import axios from "axios";

export default {
  name: 'app',
  components: {
    GitMap
  },
    
  data() {
      return {
          isLoading: false,
          repdata: [],
          githubName: ""
      };
  },

// In the created hook, you will be able to access reactive data and events are active.
// Templates and Virtual DOM have not yet been mounted or rendered.
  created() {
      //this.fetch()
      //this.getGitData();
  },

  methods: {

        async fetch() {
            const data = await this.getGitData();
            console.log(data);
            this.repdata = data;
        },


        getGitData () {
            return axios.get(`https://api.github.com/users/${this.githubName}/repos`)
            .then( response => {
                //handle success
                console.log(response);
                return response.data
            })
            .catch( error =>  {
                //handle error
                console.log(error)
            });
        }



  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
