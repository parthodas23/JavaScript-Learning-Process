// Select elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task when clicking the add button
addBtn.addEventListener("click", addTask);

// Add task on pressing "Enter" key
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    // Create new task list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Add "Completed" toggle functionality
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    // Add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener("click", function () {
      taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
  }
}
