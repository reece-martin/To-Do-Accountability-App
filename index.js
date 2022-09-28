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
    document.getElementById("addedit").style.display = "none";
     
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
        document.getElementById("addedit").style.display = "block";
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
    
    var checkboxes = document.getElementsByName("checkboxes");

    function greyOut(){
        // Supposed to make checked items grey. Debugging currently.
        for (let i = 0; i < checkboxes.length; i++){
            if (checkboxes[i].checked == true) {
                checkboxes[i].style.color = "grey";
            }  else {
                checkboxes[i].color = "black";
        }
    }    
    }
    // End of day, add warnings about unfinished tasks ect.
    function finishDay(){
        alert("Congratulations! Another day done!")
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
   
});

// onclick turn text into submission box with previous text as placeholder?
// The whole tasklist is turning grey, needs to just be the checked elements.
// I need to make pressing enter in userInput, activate the submit function.
// I need an "Add additional/edit tasks" button.
// Finish my day sould bring up an alert/new screen.
