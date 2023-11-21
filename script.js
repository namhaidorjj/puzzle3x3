const state = {
    tasks: [],
};
function render() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    state.tasks.forEach((task) => {
        const taskItem = document.createElement ('li');
        const taskLabel = document.createElement  ('span');
        const deleteButton = document.createElement('button');
        taskLabel.textContent = task.text;
        deleteButton.textContent = 'delete';
        deleteButton.onclick = function () {
            taskList.removeChild(taskItem);
        };
        taskItem.appendChild(taskLabel);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        taskLabel.addeventlistener('click', () =>{
            task.complated = !task.complated;
            render();
        });
        taskLabel.style.textDecoration = task.completed ? 'line-though': 'none';

    });
}
function addTask() {
    const newTaskInput = document.getElementById('new-task-input');
    const taskText = newTaskInput.value.trim();
    if(taskText !== ''){
        state.tasks.push({text: taskText, complated: false});
        render();
        newTaskInput.value = '';
    }
}
document.onload = function () { 
  console.log(document.getElementById('new-task-input')) 
   document.getElementById('new-task-input').focus();
};