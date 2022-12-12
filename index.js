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
// run addNewTask on submit 
taskForm.addEventListener('submit', addNewTask);

// form validation 
const validFormFieldInput = (name, description, category, dateTime, status) => {
    // if input field(s) is empty, unhide alert
    if(name === null || name === '') {
        nameAlert.hidden = false;
    } 
    else if (description === null || description === '') {
        describeAlert.hidden = false;
    }
    else if (category === null || category === '') {
        categoryAlert.hidden = false;
    }
    else if (dateTime === null || dateTime === '') {
        dateAlert.hidden = false;
    }
    else if (status === null || status === '') {
        statusAlert.hidden = false;
    }
    else {
       valid = true;
    }
    return valid;
};

const tasksList = document.querySelector('#currentTaskList');
tasksList.addEventListener('click', (event) => {
    // mark task as done
    if(event.target.classList.contains('done-button')) {
        const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
        console.log(parentTask);

        const taskId = Number(parentTask.dataset.taskId);
        const _task = task.getTaskById(taskId);
        
        console.log(_task);
        _task.status ='DONE';
        task.render();
        task.save();
    }
    // delete task
    if (event.target.classList.contains('delete-button')) {
        const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
        console.log(parentTask);

        const taskId = Number(parentTask.dataset.taskId);
        task.deleteTask(taskId);
        task.save();
        task.render();
    };
    
})