<template>
    <div class="GitCalendar">
        <h1> Git Calendar</h1>
        <p> These are the {{ codingDays }}</p>
        <p> Coding months: {{ codingMonths }}</p>
    </div>
</template>


<script>
import moment from "moment";

export default {
  name: "GitCalendar",
  data() {
      return {
          codingMonths: []
      }
  },

  props: {
      codingDays: Array
  },

  beforeUpdate: function() {
      //this.$nextTick(function() {
          console.log(`Next Tick accessed.`);
          this.codingDates();
      //})
  },

  methods: {
      codingDates() {
          this.codingMonths = [];
          let codingDates = [];
          //console.log(moment().daysInMonth("11, Sep, 2019", "D, MMM, YYYY"));
          for (let dates in this.codingDays[0]) {
              codingDates.push(dates);
          }

          this.getCodingMonths(codingDates);

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


        console.log(obj)






      }



  }


}
</script>