<template>
    <div class="GitMap">
        <label for="githubName">Enter a GitHub name</label> <br>
        <input name ="githubName" v-model="githubname">    <br>
        <label for="repositoryName">Enter a corresponding repository name </label> <br>
        <input name ="repositoryName" v-model="repoName">   
        <button type="button" v-on:click="getCommitActivity">Submit</button>
        <h1> {{ githubname }} </h1>
        <h2> {{ repoName }}</h2>
        <GitCalendar :codingDays=codingDays></GitCalendar>
    </div>
</template>

<script>
import EventService from '../services/EventService.js'
import Moment from '../helpers/moment/index.js'
import GitCalendar from './GitCalendar.vue'

export default {
  name: "GitMap",
  components: {
      GitCalendar
  },

  data() {
      return {
          githubname: "",
          repoName: "",
          commitdata: [],
          codingDays : []
      }
  },

  methods: {
    getCommitActivity() {
            //reset data
            this.codingDays = [];
            EventService.getCommitActivity(this.githubname, this.repoName) 
            .then(response => {
                //handle success
                this.commitdata = response.data;
            })
            .catch(error => {
                console.log(`There was an error: ${error.response}`);
            })
            .then (() => {                   
                 this.codingDays.push(Moment.commitData(this.commitdata));
            });
    }
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
