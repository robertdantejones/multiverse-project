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
// create a function to add new tasks 
const addNewTask = (event) => {
    event.preventDefault();
    const tasksName = document.getElementById('newTaskName');
    const tasksDescription = document.getElementById('tasksDescription');
    const tasksCategory = document.getElementById('taskCategory');
    const tasksStatus = document.getElementById('tasksStatus');
    const tasksDateTime = document.getElementById('tasksDateTime');

    const name = tasksName.value;
    const description = tasksDescription.value;
    const category = tasksCategory.value;
    const status = tasksStatus.value;
    const dateTime = tasksDateTime.value;
    // run form validation during task submission 
    validFormFieldInput(name, description, category, dateTime, status);
    // if task field is entered correctly, render created task to section
    if (valid === true) {
        task.addTask(name, description, category, dateTime, status);
        task.render();
        task.save();
    }
    else {
        return;
    }

    //clear task form on submit
    nameAlert.hidden = true;
    describeAlert.hidden = true;
    categoryAlert.hidden = true;
    statusAlert.hidden = true;
    dateAlert.hidden = true;
    


    tasksName.value = '';
    tasksDescription.value = '';
    tasksCategory.value = '';
    tasksStatus.value = '';
    tasksDateTime.value = '';

    valid = false; 
    // console.log(task.getTaskById(0));
    
}