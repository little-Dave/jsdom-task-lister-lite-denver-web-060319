document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const list = document.getElementById('list');
  const form = document.getElementById('create-task-form');
  const newTask = document.getElementById('new-task-description')

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    addTodo();
    newTask.value = '';
  })

  function addTodo() {
    let item = document.createElement('li');
    item.innerText = newTask.value
    list.appendChild(item);
  }

  // function addDeleteButton () {
  //   deleteItem = document.createElement('button');
  //   deleteItem.innerText = 'x';
  //   deleteItem.addEventListener('click', removeItemFromList);
  // }

});
