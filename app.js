const form = document.querySelector('form');
const input = document.querySelector('#new-todo');
const ul = document.querySelector('#todo-list');
const template = `{
  "todos|5-10": [{
    "id": "{{@index}}",
    "text": "{{lorem}}",
    "completed": {{boolean}}
  }]
}`;

// Render the todos on the page
// function renderTodos(todos) {
//   ul.innerHTML = '';
//   for (let i = 0; i < todos.length; i++) {
//     const li = document.createElement('li');
//     li.dataset.id = todos[i].id;
//     li.textContent = todos[i].text;
//     if (todos[i].completed) {
//       li.classList.add('completed');
//     }
//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Delete';
//     deleteButton.addEventListener('click', deleteTodo);
//     const editButton = document.createElement('button');
//     editButton.textContent = 'Edit';
//     editButton.addEventListener('click', editTodo);
//     li.appendChild(deleteButton);
//     li.appendChild(editButton);
//     ul.appendChild(li);
//   }
// }

// Fetch todos from API
async function getTodos() {
  const response = await fetch('https://dummyjson.com/todos')
    .then(res => res.json())
    .then(console.log);


  // const { data } = await response.json();
  // renderTodos(data);
}
getTodos()
// Add a new todo to the list
// async function addTodo() {
//   const newTodo = {
//     text: input.value.trim(),
//     completed: false
//   };
//   const response = await fetch('https://dummyapi.io/data/api/user/0ff1c1al/todo', {
//     method: 'POST',
//     headers: {
//       'app-id': 'my-app-id',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(newTodo)
//   });
//   const { data } = await response.json();
//   todos.push(data);
//   renderTodos(todos);
//   input.value = '';
// }

// // Delete a todo from the list
// async function deleteTodo(event) {
//   const li = event.target.parentNode;
//   const id = li.dataset.id;
//   const response = await fetch(`https://dummyapi.io/data/api/user/0ff1c1al/todo/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'app-id': 'my-app-id'
//     }
//   });
//   todos = todos.filter(todo => todo.id !== id);
//   renderTodos(todos);
// }

// // Edit a todo in the list
// async function editTodo(event) {
//   const li = event.target.parentNode;
//   const id = li.dataset.id;
//   const text = prompt('Edit
