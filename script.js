const input = document.getElementById('input-todo');
const todoCount = document.getElementById('todo-count');
const addBtn = document.querySelector('#form-todo');
const todoContainer = document.getElementById('todo-container');
var count = 0;

addBtn.addEventListener('submit', addTodo);

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

function taskComplete(checkbox, p) {
  checkbox.addEventListener('click', (e) => {
    p.classList.toggle('task-completed');
  });
}

function taskDelete(deleteBtn) {
  deleteBtn.addEventListener('click', (e) => {
    const taskToDelete = e.currentTarget.parentElement;
    todoContainer.removeChild(taskToDelete);
    count--;
    todoCount.innerText = count;
  });
}
