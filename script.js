function addTask() {
    var inputField = document.getElementById("taskInput");
    var task = inputField.value;
    
    if (task.trim() === "") {
        alert("Please enter a task!");
        return;
    }
    
    
    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.innerHTML = task + " <span class='delete' onclick='deleteTask(this)'>❌</span>";
    taskList.appendChild(li);
    
    inputField.value = "";
}

function deleteTask(element) {
    var li = element.parentElement;
    li.remove();
}
