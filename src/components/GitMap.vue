<template>
    <div class="GitMap">
        <h1> Git-Map </h1>
        <h2> visualize your commit activity !</h2>

        <label class="input-label" for="githubName">Enter a GitHub name</label> <br>
        <input class="input-style" name ="githubName" v-model="githubname">    <br>

        <label class="input-label" for="repositoryName">Enter a corresponding repository name </label> <br>
        <input class="input-style" name ="repositoryName" v-on:keyup.13="getCommitActivity" v-model="repoName">  <br> 
        
        <button class="waves-effect waves-light btn" type="button" v-on:click="getCommitActivity">Submit</button>
        <!-- <h1> {{ githubname }} </h1>
        <h2> {{ repoName }}</h2> -->
        <h4 v-if="errorBool"> {{ errorMess }}</h4>
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
          errorMess : "",
          errorBool : false
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
                    this.errorBool = false;
                    this.commitdata = response.data;
                    this.codingDays.push(Moment.commitData(this.commitdata));
                } else {
                    this.getCommitActivity();
                }
            })
            .catch(error => {
                if (error.response.status === 404) {
                    this.errorBool = true;
                    
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
    color: #427bb9;
    font-size: 40px;
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

button {
    margin-top: 40px;
    margin-bottom: 50px;
    width: 30%;
}

.input-style {
    font-family: 'Dancing Script', cursive;
    font-size: 35px;
   /* color: #070707; */
    color: #000000; 
    border-color: #000000;
    width: 40%;
    text-align: center;
}

.input-label {
    font-family: 'Avenir', Helvetica, Arial, sans-serif; 
    font-size: 25px;  
    color: #000000; 
  /*  color: #379689; */
    margin-top: 20px; 
    margin-bottom: 5px;
}

</style>
