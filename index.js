window.addEventListener('load', () => {
    


    document.getElementById("tasklist").style.display = "none";




    // Displays the current day on top of the screen.
    const daysofweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ,'Saturday'];
    const day = new Date();
    let today = day.getDay();
    document.getElementById("today").innerHTML = (daysofweek[today]);

    // Hides the finish day button, button is revealed when all tasks are input.
    // This should be bound to the "add task" button in the future.
    document.getElementById("finishday").style.display = "none";
    
    // A list of tasks in approximate time order, Needs to change to a user
    //inputted list.
    const tasks = [];
    const taskNum = ["task1", "task2", "task3", "task4", "task5", "task6"];
    var count = 0;
    // Trying to make a HTML list out of the array above once created.
   

    // Changes placeholder tasks to tasks in array above.
    // Primes them to be displayed when called.
    function submitText(){
        // Changes the pre filled tasks into customizable task names..
        
        tasks.push(document.getElementById("userInput").value);
        document.getElementById(taskNum[count]).innerHTML = tasks[count];
        count++;
        document.getElementById("userInput").value = "";
        
        //document.getElementById("submittasks").style.display = "none";
        //document.getElementById("userInput").style.display = "none";

        }
    function hideSubmit(){
        document.getElementById("submittasks").style.display = "none";
        document.getElementById("userInput").style.display = "none";
        document.getElementById("finishinput").style.display = "none";
        document.getElementById("finishday").style.display = "block";
        document.getElementById("tasklist").style.display = "block";
    }

    // Calls submitText when button is clicked.
    document.getElementById("submittasks").onclick = submitText;
    // Calls hideSubmit when button is clicked.
    document.getElementById("finishinput").onclick = hideSubmit;
       
    
});

// Hide tasks placeholders that don't get overwritted.
// I need an "Add additional tasks" button.
// Either increase the ammount of placeholder tasks or find a way to create
//an n ammount of tasks.
