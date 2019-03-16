<template>
    <div class="GitMap">
        <input name ="gitname" v-model="githubname">    
        <button type="button" v-on:click="gitData">Submit</button>
        <p> {{ codingDays }}</p>
    </div>
</template>

<script>
import EventService from '../services/EventService.js'
import Moment from '../helpers/moment/index.js'


export default {
  name: "GitMap",
  data() {
      return {
          githubname: "",
          repdata: [],
          commitdata: [],
          codingDays : []
      }
  },

  methods: {
    gitData() {
        //reset data
        this.codingDays = [];

        EventService.getGitData(this.githubname)
            .then(response => {
                //handle success
                this.repdata = response.data;
            })
            .catch(error => {
                console.log(`There was an error: ${error.response}`);
            })
            .then (() => {
                //console.log(this.getReponames()[0]);
                this.getCommitActivity();
            });
    },
    
    getCommitActivity() {
        let repositoryNames = this.getReponames()
        console.log(this.getReponames());
        let obj = {};

        for(let i = 0; i < repositoryNames.length; i++) {
            //console.log(repositoryNames[i]);
            EventService.getCommitActivity(this.githubname, repositoryNames[i]) 
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


        
    },

    // extract all repository names from the entered github user
    getReponames() {
        let repositoryNames = [];
        let obj = this.repdata;
        let repoCount = obj.length;

        //get names of public repositories from github user
        for(let i = 0; i < repoCount; i++) {
            repositoryNames.push(obj[i].name);
            //console.log(`Repo Names: ${obj[i].name}`);
        };
        return repositoryNames;
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
