function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.textContent = taskText;

  const actions = document.createElement("div");
  actions.className = "actions";

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  doneBtn.className = "done-btn";
  doneBtn.onclick = function () {
    li.classList.toggle("completed");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function () {
    taskList.removeChild(li);
  };

  actions.appendChild(doneBtn);
  actions.appendChild(deleteBtn);
  li.appendChild(actions);

  taskList.appendChild(li);

  taskInput.value = "";
}
