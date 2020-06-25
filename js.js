let container, input, btn, tasks;

container = document.querySelector(".container");

input = document.getElementById("task-input");

btn = container.querySelector("#btn");

tasks = container.querySelector(".tasks");

btn.addEventListener("click", addTasks);

function addTasks() {
    if (input.value === "") {
        alert("Please Check The Input Area");
    } else {


        let pTag, taskSpan, task, delTask, delicon;

        pTag = document.createElement("p");

        taskSpan = document.createElement("span");

        taskSpan.style.cursor = "pointer";

        task = document.createTextNode(input.value);

        taskSpan.appendChild(task);

        pTag.appendChild(taskSpan);

        delTask = document.createElement('span');

        delicon = document.createTextNode("X");

        delTask.appendChild(delicon);

        delTask.style.cursor = "pointer";

        delTask.style.color = "red";

        pTag.appendChild(delTask);

        pTag.style.color = "white";

        pTag.style.background = "rgb(0, 0, 90)";


        tasks.appendChild(pTag);

        taskSpan.addEventListener("click", done);

        delTask.addEventListener("click", dellTask);


        function done() {
            taskSpan.style.color = "rgb(85, 241, 85)";
            taskSpan.style.textDecoration = "line-through";
        };

        function dellTask() {
            tasks.removeChild(pTag);
        };

        document.getElementById("task-input").value = "";
    }
}