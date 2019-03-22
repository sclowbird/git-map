<template>
    <div class="GitMap">
        <label class="input-style" for="githubName">Enter a GitHub name</label> <br>
        <input class="input-style" name ="githubName" v-model="githubname">    <br>
        <label class="input-style" for="repositoryName">Enter a corresponding repository name </label> <br>
        <input class="input-style" name ="repositoryName" v-model="repoName">  <br> 
        <button class="input-style" type="button" v-on:click="getCommitActivity">Submit</button>
        <h1> {{ githubname }} </h1>
        <h2> {{ repoName }}</h2>
        <h4> {{ errorMess }}</h4>
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
          codingDays : [],
          errorMess : ""
      }
  },

  methods: {
    getCommitActivity() {
            //reset data
            this.codingDays = [];
            EventService.getCommitActivity(this.githubname, this.repoName) 
            .then(response => {
                //handle success
                if(response.status === 200) {
                    this.commitdata = response.data;
                    this.codingDays.push(Moment.commitData(this.commitdata));
                } else {
                    this.getCommitActivity();
                }
            })
            .catch(error => {
                if (error.response.status === 404) {
                    this.errorMess = "This Github name or repository doesn't exist. Please try a different combination."; 
                }
            });
    }
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


h1 {
    font-family: 'Dancing Script', cursive;
    margin-top: 40px;
}

h2 {
    font-family: 'Dancing Script', cursive;
    margin-bottom: 40px;
}

h3 {
  margin: 40px 0 0;
}

h4 {
    color: red;
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

.input-style {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 20px;
}

</style>
