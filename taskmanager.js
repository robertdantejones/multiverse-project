// function to create tasks HTML
// extra: mark as done button will be invisible once clicked
// extra: styling of status will be red if set to 'TODO'
const createTaskHtml = (name, description, assignedTo, dueDate, status, id) => {
    return `<li class="list-group-item" data-task-id= ${id}>
   <div class="card" id="taskCard" style="width: 18rem;" >
     <div class="card-body">
       <h5 class="card-title taskName">Task: ${name}</h5>
       <p class="card-text taskDescription">Description: ${description}</p>
       <p class="card-text assignedTo">Assigned To: ${assignedTo}</p>
       <p class="card-text dueDate">Due Date: ${dueDate}</p>
       <p class="card-text status">Status: ${status}</p>
       <div class="d-grid gap-2 d-md-block">
         <button type="button" class="btn btn-success done-button ${status === 'TO DO' || status === 'REVIEW' || status === 'IN PROGRESS' ? 'visible' : 'invisible'}">Mark As Done</button>
         <button type="button" class="btn btn-secondary delete-button">Delete</button>
       </div>
     </div>
   </div>
 </li>`;
};
// class to manage tasks 
class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }

  // method to add tasks
  addTask(name, description, assignedTo, dueDate, status) {
    const task = {
      id: this.currentId++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status,
    };
    // push created tasks into tasks array
    this.tasks.push(task);
  }

  getTaskById(taskId) {
    let foundTask;
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      if (task.id === taskId) {
        foundTask = task;
      }
    }
    return foundTask;
  }

  // method deletes a task
  deleteTask(taskId) {
    const newTasks = [];
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      if (task.id != taskId) {
        newTasks.push(task);
      }
    }
    this.tasks = newTasks;
  }

  
};