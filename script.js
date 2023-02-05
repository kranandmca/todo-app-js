const input = document.getElementById('input-todo');
const addBtn = document.querySelector('#add-todo');
const todoContainer = document.getElementById('todo-container');

addBtn.addEventListener('submit', addTodo);

function addTodo() {
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
  event.preventDefault();
}
