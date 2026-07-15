/**
 * This js file exits to handle all functions needed to create and handle tasks in 
 * task manager
 */
export let id = 0;

//I decided to take away array of tasks for now until I need to actually handle the tasks as data in the future
//let tasks = [];
export const tasksContainer = document.getElementById("tasksContainer");

export function createTask(){
    //This id is unique to the task that this function creates 
    const taskId = id;

    //This determines what function to run when editing task
    let isEditing = false;

    //This element will pop up to take user input when they want to edit tasks
    const editTextBox = document.createElement('input');
    editTextBox.setAttribute("id", "editTextBox");
    editTextBox.placeholder = "Enter Task";

    //Create elemensts and set attributes to be the same as what's in css file
    const taskCard = document.createElement('div');
    taskCard.setAttribute("class", "taskCard");
    taskCard.setAttribute("id", `taskCard${taskId}`);

    //Task detail - what the task is 
    const taskDetail = document.createElement('h3');
    taskDetail.innerText = document.getElementById('textBox').value;
    taskDetail.setAttribute("class", "taskDetail")

    //Task status
    const status = document.createElement('p');
    status.setAttribute("class", "statusParagraph")
    status.innerText = "Status: Todo";

    //A container to hold all the task buttons
    const taskButtonContainer = document.createElement('div');
    taskButtonContainer.setAttribute("class", "taskButtons");

    // This section handles all the buttons and gives them functionality
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete";
    deleteButton.setAttribute("class", "delete");

    //All task buttons
    const markInProgressButton = document.createElement('button');
    markInProgressButton.innerText = "Mark In Progress";
    markInProgressButton.setAttribute("class", "markInProgress");

    const markDoneButton = document.createElement('button');
    markDoneButton.innerText = "Mark Done";
    markDoneButton.setAttribute("class", "markDone");

    const editButton = document.createElement('button');
    editButton.innerText = "Edit";
    editButton.setAttribute("class", "edit");
    

    //append buttons to their containers 
    taskButtonContainer.appendChild(deleteButton);
    taskButtonContainer.appendChild(markInProgressButton);
    taskButtonContainer.appendChild(markDoneButton);
    taskButtonContainer.appendChild(editButton);

    taskCard.appendChild(taskDetail);
    taskCard.appendChild(status);
    taskCard.appendChild(taskButtonContainer);

    //Pushing an obeject containing the element with it's unique id so that we can mipulate it later on
    
    // tasks.push(taskCard);
    // console.log(tasks);

    id += 1;

    //The following functions delete and modify the status/content of the task 
    deleteButton.onclick = () => {
        console.log(`delete button clicked for ${taskCard.id}`);
        taskCard.remove();
        
    }

    markInProgressButton.onclick = () => {status.innerText = "Status: In Progress";}

    markDoneButton.onclick = () => {status.innerText = "Status: Done";}

    editButton.onclick = () => {
       if(!isEditing){
            editTask(editButton, taskCard, editTextBox);
            isEditing = true;
       }else{
            finishEditTask(taskDetail, editTextBox, editButton);
            isEditing = false;
       }
    }

    tasksContainer.appendChild(taskCard);
}

//These functions handle task editing for readablity sake up above
function editTask(editButton, taskCard, editTextBox){
    editButton.innerText = "Confirm";
    taskCard.appendChild(editTextBox);
}

function finishEditTask(taskDetail, editTextBox, editButton){
    taskDetail.innerText = editTextBox.value;
    editTextBox.value = "";
    editButton.innerText = "Edit"
    editButton.onclick 
    editTextBox.remove();
}

