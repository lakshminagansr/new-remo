document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    const saveTasksBtn = document.getElementById("saveTasksBtn");
  
    
    loadTasks();
  
    
    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
        addTaskToDOM(taskText);
        taskInput.value = ""; 
    });
  
    
    saveTasksBtn.addEventListener("click", function () {
        saveTasks();
    });
  
    
    function addTaskToDOM(taskText) {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");
  
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
  
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
  
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");
  
        
        deleteBtn.addEventListener("click", function () {
            taskItem.remove();
            saveTasks();
        });
  
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
    }
  
   
    function saveTasks() {
      const tasks = [];
      document.querySelectorAll(".task-item span").forEach(task => {
          tasks.push(task.textContent);
      });
  
      localStorage.setItem("tasks", JSON.stringify(tasks));
      alert("Tasks saved successfully!");
  }
  
  function loadTasks() {
      const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      savedTasks.forEach(task => {
          addTaskToDOM(task);
      });
  }
  });