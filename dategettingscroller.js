
const currentDate = new Date();

// Get the current month and year
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

// Create a new Date object for the first day of the current month
const firstDayOfMonth = new Date(currentYear, currentMonth, 19);
console.log(firstDayOfMonth)
// Get the number of days in the current month
const numDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
console.log(numDaysInMonth)
// Iterate through each day of the current month
for (let i = 0; i < numDaysInMonth; i++) {
  // Create a new Date object for the current day
  const date = new Date(currentYear, currentMonth, i + 1);

  // Get the day of the week for the current day
  const dayOfWeek = date.toLocaleString('default', { weekday: 'long' });

  // Print out the date and day of the week for the current day
  console.log(`${date.toLocaleDateString()} is a ${dayOfWeek}`);
}