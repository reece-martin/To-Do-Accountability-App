window.addEventListener('load', () => {
    


    document.getElementById("tasklist").style.display = "none";




    // Displays the current day on top of the screen.
    const daysofweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ,'Saturday'];
    const day = new Date();
    let today = day.getDay();
    document.getElementById("today").innerHTML = (daysofweek[today]);

    // A list of tasks in approximate time order, Needs to change to a user
    //inputted list.
    const tasks = ['Drink Water', 'Workout', 'Meditate'];

    // Trying to make a HTML list out of the array above once created.
   
    // This part of the code changes the tasks to be what's in the array.
    document.getElementById("task1").innerHTML = tasks;

    // Changes placeholder tasks to tasks in array above.
    // Primes them to be displayed when called.
    // Hides the "Submit Tasks" button.
    function returnText(){
        //making the below output in console means it's usable. next step.
        console.log(document.getElementById("userInput").value);
        document.getElementById("tasklist").style.display = "block";
        //document.getElementById("submittasks").style.display = "none";

        }

    // Calls returnText when button is clicked.
    document.getElementById("submittasks").onclick = returnText;
       
    
});
