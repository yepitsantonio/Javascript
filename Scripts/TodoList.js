const TodoList = [];

function makeListHTML() {
    let ListHTML = "";
    for (let i = 0; i < TodoList.length; i++) {
        ListHTML += `
        <div class="Todo-Grid">
            <div>
                ${TodoList[i].name}
            </div>
            <div>
                ${TodoList[i].date}
            </div>
            <button class="Todo-Delete" onclick="TodoList.splice(${i}, 1); renderHTML();">Delete</button>
        </div>
        `;
    }
    console.log(ListHTML);
    return ListHTML;
}

function printTodoList() {
    const nameElement = document.querySelector(".Todo-Name");
    const TodoName = nameElement.value;
    const dateElement = document.querySelector(".Todo-Date");
    const TodoDate = dateElement.value;
    console.log(TodoDate);
    nameElement.value = '';
    dateElement.value = '';
    if (TodoName === '' || TodoDate === '') {
        alert("Please enter the name and date of the Todo.");
        return;
    }
    else {
        TodoList.push({ name: TodoName, date: TodoDate });
        renderHTML();
    }
}

function renderHTML() {
    const ListHTML = makeListHTML();
    document.querySelector(".Display-Todo-List").innerHTML = ListHTML;
}