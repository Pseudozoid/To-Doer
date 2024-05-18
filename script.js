const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

inputBox.focus();

inputBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
})

function addTask() {
    if ((inputBox.value).length > 70) {
            alert("Task name is too big!");
        }
    
    else {
        
        if (inputBox.value === '') {
            alert("Task cannot be empty!");
        }

        else {
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
            
            let rmvBtn = document.createElement("span");
            rmvBtn.setAttribute("id", "cross");
            rmvBtn.innerHTML="\u00d7"
            li.appendChild(rmvBtn);

            let editBtn = document.createElement("div");
            editBtn.setAttribute("id", "editicon");
            editBtn.innerHTML="\u270e"
            li.appendChild(editBtn);
        }
        inputBox.value = '';
        saveData();
    }   
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }

    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }

    else if (e.target.tagName === "DIV") {
        let selectedTask = (e.target.parentElement.innerHTML);
        selectedTask = selectedTask.substring(0, selectedTask.indexOf('<'));
        e.target.parentElement.remove();
        inputBox.value = selectedTask;
        inputBox.focus();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem("data")
}

showData();