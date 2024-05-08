const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

inputBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
})

function addTask() {
    if (inputBox.value === '') {
        alert("Task cannot be empty!");
    }

    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let rmvBtn = document.createElement("span");
        rmvBtn.innerHTML="\u00d7"
        li.appendChild(rmvBtn);
    }
    inputBox.value = '';
}