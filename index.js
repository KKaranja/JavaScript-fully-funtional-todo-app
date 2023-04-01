('use strict');

// console.log('Hello JavaScript 101');
// alert('Hello JavaScript 101');

// document.body.innerHTML = 'Hello JavaScript';

// const todo1 = 'My first to do from JavaScript';
// const todo2 = 'My second to do';
// const todo3 = 'My third to do';

// const month = 'March';

// const dayOfMonth = 31;

// const year = 2023;

// console.log(`${month} ${dayOfMonth} ${year}`);

// const calc = 4 + 5 * 3;
// const calcWithBracket = (4 + 5) * 3;

// console.log(calc);
// console.log(calcWithBracket);

// const age = 35;
// console.log(`I am ${age} years old.`);

// MVC
let todos;

// retrieve localStorage
const savedTodos = JSON.parse(localStorage.getItem('todos'));

// check if it's an array

if (Array.isArray(savedTodos)) {
  todos = savedTodos;
} else {
  todos = [
    {
      title: 'My first to do from JavaScript',
      dueDate: '2023-04-10',
      id: 'id1',
    },
    {
      title: 'My second to do',
      dueDate: '2023-04-10',
      id: 'id2',
    },
    {
      title: 'My third to do',
      dueDate: '2023-04-10',
      id: 'id3',
    },
  ];
}
// // model

// Create Todo

const createTodo = (title, dueDate) => {
  const id = '' + new Date().getTime();

  todos.push({
    title,
    dueDate,
    id: id,
  });

  SaveTodos();
};

// function createTodo(title, dueDate) {

// }

// Delete Todo

const deleteTodo = (idToDelete) => {
  todos = todos.filter(function (todo) {
    if (todo.id === idToDelete) {
      return false;
    } else {
      return true;
    }
  });

  SaveTodos();
};

// function deleteTodo() {
//   ;
// }

// SaveTodos

const SaveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// Controller
const addTodo = () => {
  const textBox = document.getElementById('todo-title');
  const title = textBox.value;

  const datePicker = document.getElementById('date-picker');
  const dueDate = datePicker.value;

  createTodo(title, dueDate);

  render();
};

// function addTodo() {

// }

const handleDelete = (event) => {
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;

  deleteTodo(idToDelete);

  render();
};

// function handleDelete(event) {

// }
// View

const render = () => {
  document.getElementById('todo-list').innerHTML = '';

  todos.forEach(function (todo) {
    const element = document.createElement('div');
    element.innerText = todo.title + ' ' + todo.dueDate;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.style = 'margin-left: .75rem';
    deleteButton.onclick = handleDelete;
    deleteButton.id = todo.id;
    element.appendChild(deleteButton);

    const todoList = document.getElementById('todo-list');
    todoList.appendChild(element);
  });
};

// function render() {

// }

render();
