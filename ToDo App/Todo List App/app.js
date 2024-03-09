const taskText = document.querySelector('#taskText');
const taskList = document.querySelector('.taskList');
const addTaskBtn = document.querySelector('#addTaskBtn');
const clearInput = document.querySelector('#clearInput');
const appTitle = document.querySelector('#appTitle');
const todoTitle = "To Do's";
const taskListData = loadData();

appTitle.innerHTML = todoTitle;

renderTaskList();

clearInput.addEventListener('click', function (e) {
    taskText.value = "";
    renderTaskList();
})

addTaskBtn.addEventListener('click', function (e) {
    const taskItem = { 
        text: taskText.value,
        color: 'yellow',
        completed: false,
    };
    taskListData.push(taskItem);
    renderTaskList();
});

function renderTaskList() {
    taskList.innerHTML = "";
    for (let index = 0; index < taskListData.length; index++) {
        const userTask = document.createElement('li');
        const completedBtn = document.createElement('input');
        const spanUserTask = document.createElement('span');
        const removeBtn = document.createElement('button');
        
        removeBtn.innerText = 'X';
        removeBtn.className = "removeBtn";
        removeBtn.dataIndex = index;

        completedBtn.className = 'completedBtn'
        completedBtn.type = 'checkbox';
        completedBtn.dataIndex = index;

        spanUserTask.innerText = taskListData[index].text;
        spanUserTask.className = 'spanUserTask';
        spanUserTask.dataIndex = index;

        completedBtn.addEventListener('change', function (e) {
            if (this.checked) {
                taskListData[index].completed = true;
            } 
            if (taskListData[index].completed = true) {
                spanUserTask.classList.toggle('completedTask');
            } else {
                taskListData[index].completed = false;
            }
        })

        userTask.prepend(completedBtn);
        userTask.appendChild(spanUserTask);
        userTask.appendChild(removeBtn);
        taskList.appendChild(userTask);

        saveData(taskListData)

    }
}

function saveData(taskListData) {
    localStorage.setItem('taskListData', JSON.stringify(taskListData));
}

function loadData() {
    const dataToLoad = localStorage.getItem('taskListData');
    const parseJSON = JSON.parse(dataToLoad);
    if (dataToLoad != null) {
        return parseJSON;
    } 
    return [];

}

taskList.addEventListener('click', function (e) {
    const removeBtn = e.target.className === 'removeBtn';

    if (removeBtn) {
        taskListData.splice(e.target.dataIndex, 1);
        renderTaskList();
    }
})



