
const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

const tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
showTasks();

function showTasks() {

    tasks.forEach((task, index) => {
        const div = document.createElement("div");
        div.setAttribute("class", "task");

        const innerDiv = document.createElement("div");
        div.append(innerDiv);

        const p = document.createElement("p");
        p.innerText = task.title;

        const span = document.createElement("span");
        span.innerText = task.description;

        innerDiv.append(p);
        innerDiv.append(span);

        const deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("id", "deleteBtn");
        deleteBtn.innerText = "-";

        deleteBtn.addEventListener("click", () => {
            removeTasks();
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            showTasks();
        });
        
        div.append(deleteBtn);
        container.append(div);

    });
}

const removeTasks = () => {
    tasks.forEach(() => {
        const div = document.querySelector(".task");
        div.remove();
    })
}

const getFormData = (e) => {
    e.preventDefault();
    
    removeTasks();

    tasks.push({ title: title.value, description: description.value });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTasks();
}

form.addEventListener("submit", getFormData);