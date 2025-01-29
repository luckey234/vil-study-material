function getTimeInMinutes(timeString) {
    const [time, period] = timeString.split(' ');
    const [hour, minute] = time.split(':').map(Number);
    return period === "AM" ? hour * 60 + minute : (hour === 12 ? 0 : hour + 12) * 60 + minute;
  }
  
  function getTimeDifference(time1, time2) {
    const time1InMinutes = getTimeInMinutes(time1);
    const time2InMinutes = getTimeInMinutes(time2);
    return time2InMinutes - time1InMinutes;
  }
  
  function getTimeInHoursAndMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} hours and ${remainingMinutes} minutes`;
  }
  
  const time1 = "5:22 AM";
  const time2 = "5:27 PM";
  
  const timeDifferenceInMinutes = getTimeDifference(time1, time2);
  const timeDifferenceInHoursAndMinutes = getTimeInHoursAndMinutes(
    timeDifferenceInMinutes
  );
  
  console.log("Time difference:", timeDifferenceInHoursAndMinutes);
  