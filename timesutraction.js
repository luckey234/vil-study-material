let endTime = "12:00:00 PM"
let startTime = "12:20:00 PM"
let startTimeSeconds = (parseInt(startTime.substr(0, 2)) * 60 * 60) + (parseInt(startTime.substr(3, 2)) * 60) + (parseInt(startTime.substr(6, 2)));

let endTimeSeconds = (parseInt(endTime.substr(0, 2)) * 60 * 60) + (parseInt(endTime.substr(3, 2)) * 60) + (parseInt(endTime.substr(6, 2)));

let difference = endTimeSeconds - startTimeSeconds;

let hours = Math.floor(difference / 3600);
let minutes = Math.floor((difference % 3600) / 60);
let seconds = difference % 60;

console.log(`${hours}h:${minutes}m:${seconds}s`);
