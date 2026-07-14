import {id, tasksContainer, createTask} from "./taskManagerFunctions.js";

const createTaskButton = document.getElementById('createTaskButton');

//Allow user to create task with the click of button
createTaskButton.onclick = () => {
    if(!document.getElementById('textBox').value == ""){
        createTask();
    }
}