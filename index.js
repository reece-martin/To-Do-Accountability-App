window.addEventListener('load', () => {
    


    document.getElementById("tasklist").style.display = "none";
    // trying to link an API that provides a random inspirational quote.
    
  




    // Displays the current day on top of the screen.
    const daysofweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ,'Saturday'];
    const day = new Date();
    let today = day.getDay();
    document.getElementById("today").innerHTML = (daysofweek[today]);

    // Hides/shows the necessary buttons to start the app.
    document.getElementById("finishday").style.display = "none";
    document.getElementById("addedit").style.display = "none";
    document.getElementById("daysover1").style.display = "none";
    document.getElementById("daysover2").style.display = "none";
    document.getElementById("today").style.display = "inline";
    document.getElementById("reset").style.display = "none";
    document.getElementById("goback").style.display = "none";
     
    function submitText(){
        /* Allows the user to input any number of tasks, only tasks with text 
        will be added to the list. */
        if ((document.getElementById("userInput").value) !== ""){

            var createBox = document.createElement("input");
            var createTask = document.createElement("label");
            var createBr = document.createElement("br")
            
            createBox.value = (document.getElementById("userInput").value);
            createBox.type = "checkbox";
            // this is what i'm trying to reference for greying out complete tasks.
            createBox.name = "checkboxes";
            //testing area
            createBox.className = "listbox";
            //testing area
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
        document.getElementById("finishday").style.display = "inline";
        document.getElementById("tasklist").style.display = "block";
        document.getElementById("addedit").style.display = "inline";
    }

    function addEdit(){
        // Returns to the submit tasks screen to add tasks, no edit functionality yet.
        document.getElementById("submittasks").style.display = "inline";
        document.getElementById("userInput").style.display = "inline";
        document.getElementById("finishinput").style.display = "block";
        document.getElementById("finishday").style.display = "none";
        document.getElementById("tasklist").style.display = "none";
        document.getElementById("addedit").style.display = "none";
    }
    
        function greyOut(){
        // Supposed to make checked items grey. Debugging currently.
        
    }

    // Allows the user to submit tasks by pressing enter.
    var input = document.getElementById("userInput");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("submittasks").click();
        }
    });
    
    // End of day.
    function finishDay(){
        document.getElementById("submittasks").style.display = "none";
        document.getElementById("userInput").style.display = "none";
        document.getElementById("finishinput").style.display = "none";
        document.getElementById("finishday").style.display = "none";
        document.getElementById("tasklist").style.display = "none";
        document.getElementById("addedit").style.display = "none";
        document.getElementById("daysover1").style.display = "inline";
        document.getElementById("daysover2").style.display = "inline";
        document.getElementById("reset").style.display = "inline";
        document.getElementById("goback").style.display = "inline";

    }

    // Reloads the document. Used for resetting the day.
    function resetDay(){
        location.reload();
    }

    // Returns to the list of tasks, incase of accidental calling of finishDay.
    function goBack(){     
        document.getElementById("daysover1").style.display = "none";
        document.getElementById("daysover2").style.display = "none";
        document.getElementById("today").style.display = "inline";
        document.getElementById("reset").style.display = "none";
        document.getElementById("goback").style.display = "none";
        document.getElementById("submittasks").style.display = "none";
        document.getElementById("userInput").style.display = "none";
        document.getElementById("finishinput").style.display = "none";
        document.getElementById("finishday").style.display = "block";
        document.getElementById("tasklist").style.display = "block";
        document.getElementById("addedit").style.display = "block";
    }

    // Calls submitText when button is clicked.
    document.getElementById("submittasks").onclick = submitText;
    // Calls hideSubmit when button is clicked.
    document.getElementById("finishinput").onclick = hideSubmit;
    // Calls addEdit when button is clicked.
    document.getElementById("addedit").onclick = addEdit;
    // Greys out tasklist when clicked (Not Working)
    document.getElementById("tasklist").onclick = greyOut;
    // Congratulates the user on finishing the day.
    document.getElementById("finishday").onclick = finishDay;
    // Calls resetDay to reload the document.
    document.getElementById("reset").onclick = resetDay;
    // Returns to the list of tasks, incase of accidental calling of finishDay.
    document.getElementById("goback").onclick = goBack;
   
});
// Upcoming additions to the app:
// Can't click "thats all my tasks" without submitting at least 1 task.
// If you click finsh day without completing all tasks. A warning apears.
// import random inspirational quote from API.
// onclick turn existing task into submission box with previous text as placeholder.
// Grey out completed tasks.
// Visual improvements on background, buttons, and animations.
