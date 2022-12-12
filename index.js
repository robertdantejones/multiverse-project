// inititalize tasks manager 
const task = new TaskManager(0);
task.load();
task.render();

// store alerts to variables and set to hidden
let valid = false;
const nameAlert = document.getElementById('nameAlert');
nameAlert.hidden = true;

const describeAlert = document.getElementById('describeAlert');
describeAlert.hidden = true;

const categoryAlert = document.getElementById('categoryAlert');
categoryAlert.hidden = true;

const statusAlert = document.getElementById('statusAlert');
statusAlert.hidden = true;

const dateAlert = document.getElementById('dateAlert');
dateAlert.hidden = true;

// assign tasks form to variable for easy readability
const taskForm = document.getElementById('newTaskForm');