 // Wait for the DOM to fully load before adding event listeners
 document.addEventListener('DOMContentLoaded', function() {
    // Get the add button
    var addBtn = document.getElementById('addBtn');

    // Add event listener to the add button
    addBtn.addEventListener('click', function() {
      addTask();
    });
  });

  // Function to add a new task
  function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();

    if (taskText !== '') {
      var taskList = document.getElementById('taskList');
      var li = document.createElement('li');
      li.innerHTML = '<span class="task-text">' + taskText + '</span>' +
                     '<span class="delete-btn" onclick="deleteTask(this)">❌</span>';
      taskList.appendChild(li);
      taskInput.value = '';
    }
  }

  // Function to mark a task as completed
  function toggleCompleted(taskElement) {
    taskElement.classList.toggle('completed');
  }

  // Function to delete a task
  function deleteTask(deleteButton) {
    var listItem = deleteButton.parentElement;
    listItem.remove();
  }