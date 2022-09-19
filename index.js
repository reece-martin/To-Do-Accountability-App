// To display the current day on top of the screen.
const daysofweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ,'Saturday'];
const day = new Date();
let today = day.getDay();
document.getElementById("today").innerHTML = (daysofweek[today]);

// A list of tasks in approximate time order
const tasks = ['Drink Water', 'Workout', 'Meditate'];

function returnText(){
    tasks.push(document.getElementById("userInput").value);
    alert(tasks)
}
