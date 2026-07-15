import {id, tasksContainer, createTask} from "./taskManagerFunctions.js";

const createTaskButton = document.getElementById('createTaskButton');
const textBox = document.getElementById('textBox');

//Allow user to create task with the click of button
createTaskButton.onclick = () => {
    if(textBox.value == ""){
        alert("Enter a task description");
    }else{
        createTask();
        textBox.value = "";
    }
}