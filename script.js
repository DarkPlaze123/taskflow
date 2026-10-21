
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");
const emptyMessage = document.getElementById("empty-message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    const task = document.createElement("li");
    const taskLabel = document.createElement("span");
    const completeButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    taskLabel.textContent = taskText;
    completeButton.textContent = "Complete";
    deleteButton.textContent = "Delete";

    completeButton.style.marginLeft = "10px";
    deleteButton.style.marginLeft = "5px";

    completeButton.addEventListener("click", function () {
        taskLabel.style.textDecoration =
            taskLabel.style.textDecoration === "line-through"
                ? "none"
                : "line-through";
    });

    deleteButton.addEventListener("click", function () {
        task.remove();
        updateEmptyMessage();
    });

    task.appendChild(taskLabel);
    task.appendChild(completeButton);
    task.appendChild(deleteButton);
    list.appendChild(task);

    input.value = "";
    updateEmptyMessage();
});

function updateEmptyMessage() {
    emptyMessage.hidden = list.children.length > 0;
}
