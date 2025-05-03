const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", function () {
  const task = taskInput.value.trim();
  if (task !== "") {
    const li = document.createElement("li");
    li.innerHTML = `${task} <button class="delete-btn">Delete</button>`;
    taskList.appendChild(li);

    li.querySelector(".delete-btn").addEventListener("click", function () {
      li.remove();
    });

    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
});

taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTaskBtn.click();
  }
});