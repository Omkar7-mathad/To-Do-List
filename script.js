const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");
window.onload = loadTasks;
addBtn.addEventListener("click", addTask);
function addTask() {
    const task = taskInput.value.trim();
    if (task === "") return alert("Please enter a task!");
    const li = document.createElement("li");
    li.innerHTML = `${task} <button class="delete" onclick="deleteTask(this)">X</button>`;
    taskList.appendChild(li);
    saveTasks();
    taskInput.value = "";
}
function deleteTask(button) {
    button.parentElement.remove();
    saveTasks();
}
function saveTasks() {
    localStorage.setItem("tasks", taskList.innerHTML);
}
function loadTasks() {
    const data = localStorage.getItem("tasks");
    if (data) taskList.innerHTML = data;
}
