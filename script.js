// get todo input
const input = document.getElementById('input-todo');
// For todo item count
const todoCount = document.getElementById('todo-count');
// get todo form
const addBtn = document.querySelector('#form-todo');
// todo container
const todoContainer = document.getElementById('todo-container');
var count = 0;
// form submit event
addBtn.addEventListener('submit', addTodo);

// To create todo item
function addTodo(event) {
  const newTodo = input.value;
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const p = document.createElement('p');
  p.innerText = newTodo;

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('del-todo');
  deleteBtn.innerText = 'Delete';

  const taskContainer = document.createElement('div');
  taskContainer.classList.add('task');

  const list = document.createElement('div');
  list.classList.add('list');

  list.appendChild(checkbox);
  list.appendChild(p);

  taskContainer.appendChild(list);
  taskContainer.appendChild(deleteBtn);

  todoContainer.appendChild(taskContainer);

  input.value = '';
  count++;
  todoCount.innerText = count;
  taskComplete(checkbox, p);
  taskDelete(deleteBtn);
  event.preventDefault();
}

// To mark strikethrough completed todo
function taskComplete(checkbox, p) {
  checkbox.addEventListener('click', (e) => {
    p.classList.toggle('task-completed');
  });
}

// To delete Todo item
function taskDelete(deleteBtn) {
  deleteBtn.addEventListener('click', (e) => {
    const taskToDelete = e.currentTarget.parentElement;
    todoContainer.removeChild(taskToDelete);
    count--;
    todoCount.innerText = count;
  });
}
