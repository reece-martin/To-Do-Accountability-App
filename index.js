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
     
    function submitText(){
        /* Allows the user to input any number of tasks, only tasks with text 
        will be added to the list. */
        if ((document.getElementById("userInput").value) !== ""){

            var createBox = document.createElement("input");
            var createTask = document.createElement("label");
            var createBr = document.createElement("br")
            
            createBox.value = (document.getElementById("userInput").value);
            createBox.type = "checkbox";
            createTask.innerHTML = (document.getElementById("userInput").value);
            document.getElementById("tasklist").appendChild(createBox);
            document.getElementById("tasklist").appendChild(createTask);
            document.getElementById("tasklist").appendChild(createBr);

            document.getElementById("userInput").value = "";
            }
        }

    function hideSubmit(){
        /* Once the user has finished inputting their tasks, displays the tasks 
        and hides the input components. */
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

// I need to center the finishday button which is ignoring the global center.
// I need to make pressing enter in userInput, activate the submit function.
// I need an "Add additional/edit tasks" button.
// Finish my day sould bring up an alert/new screen.
