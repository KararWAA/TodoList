const form = document.querySelector('#form');
const msg = document.querySelector('.msg');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#tasks');
const taskContainer = document.getElementById('TaskContainer');

form.addEventListener('submit', submitTask);  //event listener that will add a task

function submitTask(e) {
  e.preventDefault();

   if(taskInput.value === '') {
      msg.classList.add('error');
      msg.innerHTML = 'You did not fill in a task...';
      setTimeout(() => msg.remove(), 2000)  //sets timer on error message

  } else {
    taskContainer.innerHTML += `  <div class = 'task'>
                                    <h1>${taskInput.value}</h1>   
                                    <button class = 'delete'>Delete</button>
                                </div>`;
    taskInput.value = ''; // clears input field
const currentTasks = document.querySelectorAll(".delete");  //deletes task onclick
    for(let i = 0; i<currentTasks.length; i++) {
      currentTasks[i].onclick = function () {
        this.parentNode.remove();

        
      }
    }
  }
}






