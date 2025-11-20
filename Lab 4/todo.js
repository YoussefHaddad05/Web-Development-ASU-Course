const intask = document.getElementById('intask');
const addTask = document.getElementById('addTask');
const mylist = document.getElementById('mylist');
let arrs = [];

addTask.addEventListener("click", adt);

function adt() {
    const inp = intask.value.trim();
    if (inp) {
        new TaskClass(inp);
        intask.value = '';
    } else {
        alert("Enter a task!");
    }
}

class TaskClass {
    constructor(taskk) {
        arrs.push(taskk);
        this.appendTask(taskk);
    }

    appendTask(task) {
        mylist.innerHTML += `<li>${task} <button>Delete</button></li>`;
    }
}

mylist.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.style.color = event.target.style.color === 'black' ? 'green' : 'black';
    }

    if (event.target.tagName === 'BUTTON') {
        const li = event.target.parentElement;
        const taskText = li.firstChild.textContent.trim();
        li.remove();
        arrs = arrs.filter(item => item !== taskText);
    }
});
