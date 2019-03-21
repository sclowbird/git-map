import moment from "moment";

export default {
    commitData (data) {
        // Three functions in order to get all relevant timestamps which
        // are retrieved from the commit activity github api
        let weeksUnixTimestamps = this.getUnixTimestamps(data);
        let timestampsEveryDay = this.getTimestampsForEveryDay(weeksUnixTimestamps);
        let convertedTimestamps = this.convertUnixTimestamps(timestampsEveryDay);

        // get array of days where data was commited to the repository
        let codingDays = this.getCodingDays(data);

        // match the coding days with an corresponding date
        let datesOfCodingDays = this.getDatesOfCodingDays(convertedTimestamps, codingDays);

        return datesOfCodingDays;

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

    getTimestampsForEveryDay (timestamp) {
        let timeStampsEveryDay = []
        let totalDays = timestamp.length * 7;
        const oneDayInSeconds = 86400;

        // push beginning timestamp
        timeStampsEveryDay.push(timestamp[0]);

        for (let i = 0; i < totalDays; i++) {
            timeStampsEveryDay.push(timeStampsEveryDay[i] + oneDayInSeconds);
        }
        return timeStampsEveryDay;
    },

    // Gets all dates from an array of timestamps
    convertUnixTimestamps(timestamps) {
        let convertedTimestamps = [];
        for(let i=0; i < timestamps.length; i++) {       
            convertedTimestamps.push(moment.unix(timestamps[i]).format());
        }

        return convertedTimestamps;
    },

    // Returns all days from commit activity 
    getCodingDays(array) {
        let codingDays = [];
        const daysArrayLength = 7;
        // First iteration iterates over all objects
        for (let i = 0; i < array.length; i++) {         
            // Second iteration iterates over all days
            for (let j = 0; j < daysArrayLength; j++){
                codingDays.push(array[i].days[j]);
                
            }    
            
        }
        return codingDays;
    },


    getDatesOfCodingDays(timestamp, days) {
        let obj = {};
        for (let i = 0; i < days.length; i++) {
            if (days[i] > 0) {
                obj[timestamp[i]] = days[i];      
            }
        }
        return obj;


    }

}