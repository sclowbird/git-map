import moment from "moment";

export default {
    commitData (data) {
        //return data;
        let weeksUnixTimestamps = this.getUnixTimestamps(data)
        this.convertUnixTimestamps(weeksUnixTimestamps);

    },

    // Get the unix timestamps from all weeks of the 
    // commit activity data as an array.
    getUnixTimestamps (array) {
        let timeStamps = []
        let numberOfWeeks = array.length;        
        for(let i = 0; i < numberOfWeeks; i++) {
            timeStamps.push(array[i]["week"]);
        }
        return timeStamps;     
    },

    //Extract 
    convertUnixTimestamps(timestamps) {
        console.log(`Moment format: ${moment().format("M")}`)
        for(let i=0; i < timestamps.length; i++) {
            console.log(moment.unix(timestamps[i]).toDate().getMonth());

            
        }
    }
}