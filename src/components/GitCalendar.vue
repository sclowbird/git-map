<template>
    <div class="GitCalendar">
            <div v-for="(item,index) in renderMonths" :key="index">
                <div class="month-display"> Commit activity in {{ monthList[index] }} </div>
                    <div class="container">
                        <div v-for="(days, dayindex) in renderMonths[index]" :key="dayindex" v-bind:id="`${monthList[index]}-${days}`" class="git-days"> 
                            {{ days }}
                        </div>   
                    </div>
            </div>

        <p id="update-dom"> Coding Days {{ codingDays }}</p>
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
        this.codingDates();
  },

  methods: {
      codingDates() {
          // Reset data on first function call
          this.codingMonths = [];
          this.renderMonths = [];
          this.monthList = [];
          this.codingDatesFormatted = [];

          let codingDates = [];
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
            codingDays.push(dates.format("MMMM YYYY-D"));
        }

        this.$nextTick(function() {
            for (let j = 0; j < codingDays.length; j++) {
                document.getElementById(codingDays[j]).id = "coding-day";
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
            obj[dates.format("MMMM YYYY")] = codingMonth[i];
        }
        
        this.codingMonths.push(obj)
        this.getDayIterator();
      },



      getDayIterator() {
        let obj = Object.values(this.codingMonths[0]);
        this.monthList = Object.keys(this.codingMonths[0]);
        let days = [];

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
    .container {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 40px;
    }

    .month-display {
        margin-top: 30px;
        margin-bottom: 20px;
    }

    .git-days {
        margin: 4px 4px 4px 4px;
        width: 13%;
        border-style: solid;
        border-width: 1px;

    }

    #coding-day {
        background-color: #c38d9e;
    }

    #update-dom {
        display: none;
    }
</style>