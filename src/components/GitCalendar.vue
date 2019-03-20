<template>
    <div class="GitCalendar">
        <h1> Git Calendar</h1>
        <p> These are the {{ codingDays }}</p>

        <div v-for="(item,index) in renderMonths" :key="index">
            <div v-for="(days, dayindex) in renderMonths[index]" :key="dayindex" v-bind:id="`${monthList[index]}-${days}`"> 
                {{ days }}
            </div>   
        </div>


    </div>
</template>


<script>
import moment from "moment";

export default {
  name: "GitCalendar",
  data() {
      return {
          codingMonths: [],
          renderMonths: [],
          monthList: [],
          codingDatesFormatted: []
      }
  },

  props: {
      codingDays: Array
  },

  beforeUpdate: function() {
      //this.$nextTick(function() {
          //console.log(`Next Tick accessed.`);
          this.codingDates();
      //})
  },

  methods: {
      codingDates() {
          this.codingMonths = [];
          this.renderMonths = [];
          this.monthList = [];
          this.codingDatesFormatted = [];

          let codingDates = [];
          //console.log(moment().daysInMonth("11, Sep, 2019", "D, MMM, YYYY"));
          for (let dates in this.codingDays[0]) {
              codingDates.push(dates);
              this.codingDatesFormatted.push(dates);
          }

          this.getCodingMonths(codingDates);
          

      },

      getCodingDays() {
        let codingDays = [];
        for (let i = 0; i < this.codingDatesFormatted.length; i++) {
            let arr = [];
            let dates = moment(this.codingDatesFormatted[i]);
            codingDays.push(dates.format("MMMM-D"));
        }

        //TODO: Reassign ids to elements with "codingDays" id
        // Example: document.getElementById("demo").id = "newid";
        
        this.$nextTick(function() {
            for (let j = 0; j < codingDays.length; j++) {
                //console.log(`Coding Days: ${codingDays[j]}`);
                document.getElementById(codingDays[j]).id = "codingDay";
            }
        });



      },

      getCodingMonths(codingDates) {
        // Includes all dates on which has been programmed (as date object).
        let codingMonth = [];   
        let obj = {};
        for (let i = 0; i < codingDates.length; i++) {
            let dates = moment(codingDates[i]);
            codingMonth.push(dates.daysInMonth());          
            obj[dates.format("MMMM")] = codingMonth[i];
        }
        
        this.codingMonths.push(obj)
        this.getDayIterator();
        //console.log(obj)
      },



      getDayIterator() {
        let obj = Object.values(this.codingMonths[0]);
        this.monthList = Object.keys(this.codingMonths[0]);
        let days = [];
        //console.log(this.monthList[0]);
        for(let i = 0; i < obj.length; i++) {
            let arr = [];
            for(let j = 1; j < obj[i] + 1; j++) {
                arr.push(j);
                
            }
            days.push(arr);
        }

        this.renderMonths = days;

        this.getCodingDays();

      }

  },



}
</script>


<!-- Removed scope attribute because when you use "scoped" 
on style tags in .vue files it adds an attribute specifier
to each of your CSS selectors therefore I wouldn't <style lang="less">
the coding days.
</style> -->
<style>
    #codingDay {
        background-color: aqua;
    }
</style>