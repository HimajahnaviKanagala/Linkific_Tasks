const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const filterInput = document.getElementById("filterInput");

addBtn.addEventListener("click", function () {
  const taskText = taskInput.value;
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }
  const li = document.createElement("li");
  li.innerHTML = `${taskText}<span class="delete">Delete</span>`;
  taskList.appendChild(li);
  taskInput.value = "";
});

taskList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

filterInput.addEventListener("keyup", function () {
  const filterText = filterInput.value.toLowerCase();
  const tasks = taskList.getElementsByTagName("li");
  Array.from(tasks).forEach(function (task) {
    const taskName = task.firstChild.textContent.toLowerCase();
    if (taskName.includes(filterText)) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
});
