let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

// Empty Array To Store The Tasks


let arrayOfTasks = [];
//check if there is tasks


getDataFromApi()
// console.log(arrayOfTasks);
// Add Task
submit.onclick = function () {
  if (input.value !== '') {
    addTaskToArray(input.value); // Add Task To Array Of Tasks
    input.value = '';
  } else {
    // ----------------------------------------------------------------------------
  }
}

function addTaskToArray(taskText) {
  // Task Data
  const task = {
    id: Date.now(),
    todo: taskText,
    completed: false,
  };
  // Push Task To Array Of Tasks
  arrayOfTasks.todos.push(task);
  // console.log(arrayOfTasks);
  // Add Tasks To Page
  addElementsToPageFrom(arrayOfTasks);
  // add tasks to api
  addDataToApiFrom(arrayOfTasks)

}

function addElementsToPageFrom(arrayOfTasks) {
  // Empty Tasks Div
  tasksDiv.innerHTML = '';
  // // Looping On Array Of Tasks
  console.log('arrayOfTasks', arrayOfTasks);
  arrayOfTasks.todos.forEach(task => {
    let div = document.createElement('div');
    div.className = 'task';
    // Check If Task is Done
    if (task.completed) {
      div.className = "task done";
    }
    div.setAttribute('dataId', task.id)
    div.appendChild(document.createTextNode(task.todo))
    // console.log(div);
    // Create Delete Button
    let span = document.createElement("span");
    span.className = "del";
    span.appendChild(document.createTextNode("Delete"));
    // Append Button To Main Div
    div.appendChild(span);
    // Add Task Div To Tasks Container
    tasksDiv.appendChild(div);
  });
}

function addDataToApiFrom(arrayOfTasks) {

}
async function getDataFromApi() {
  await fetch('https://dummyjson.com/todos')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      arrayOfTasks = data;
      console.log(arrayOfTasks.todos);
    })
  console.log(arrayOfTasks);
  addElementsToPageFrom(arrayOfTasks)
}

tasksDiv.addEventListener('click', (e) => {
  if (e.target.classList.contains('del')) {
    // console.log(e.target.parentElement.getAttribute('dataId'));
    fetch(`https://dummyjson.com/todos/${e.target.parentElement.getAttribute('dataId')}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(console.log);
    // Remove Element From Page
    e.target.parentElement.remove()
  }
  if (e.target.classList.contains('task')) {
    // Toggle Completed For The Task
    toggleStatusTaskWith(e.target.getAttribute("dataId"));
    // toggle done class
    e.target.classList.toggle("done");

  }
})

function toggleStatusTaskWith(taskId) {
  for (let i = 0; i < arrayOfTasks.length; i++) {
    if (arrayOfTasks[i].id == taskId) {
      arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true) : (arrayOfTasks[i].completed = false);
    }
  }
  /* updating completed status of todo with id 1 */
  fetch(`https://dummyjson.com/todos/${taskId}`, {
    method: 'PUT', /* or PATCH */
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      completed: false,
    })
  })
    .then(res => res.json())
    .then(console.log);
}