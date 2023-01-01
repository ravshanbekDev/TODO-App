//? Switch
const switchButton = document.querySelector('.switch');

switchButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode')
});

// Todos
let menuToggle = document.getElementById("btn-menu-toggle");
let navigationDrawer = document.getElementById("drawer");
let btnCloseDrawer = document.getElementById("btn-close-drawer");
let overlay = document.getElementById("overlay");
let todoForm = document.getElementById("todo-form");
let todoInput = document.getElementById("todo-input");
let todoList = document.getElementById("todo-list");

function renderTodoCard(todoText) {
    // <div class="todo-card">
    //     <div class="todo-view-wrapper">
    //         <p class="todo-message">Buy Apples!</p>
    //         <div>
    //             <i class="fas fa-pen"></i>
    //             <i class="fas fa-trash"></i>
    //         </div>
    //     </div>

    //     <div class="todo-edit-wrapper">
    //         <input type="text" value="Buy Apples!" />
    //         <i class="fas fa-save"></i>
    //     </div>
    // </div>

    let card = document.createElement("div");
    card.classList.add("todo-card");

    let todoViewWrapper = document.createElement("div");
    todoViewWrapper.className = "todo-view-wrapper";

    let message = document.createElement("p");
    message.classList.add("todo-message");
    message.innerHTML = todoText;
    todoViewWrapper.appendChild(message);

    let iconWrapper = document.createElement("div");
    let editIcon = document.createElement("i");
    editIcon.className = "fas fa-pen";
    iconWrapper.appendChild(editIcon);
    editIcon.onclick = function() {
        todoViewWrapper.style.display = "none";
        todoEditWrapper.style.display = "flex";
    }

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas")
    deleteIcon.classList.add("fa-trash");
    iconWrapper.appendChild(deleteIcon);
    deleteIcon.addEventListener("click", function(e) {
        card.remove();
    })
    todoViewWrapper.appendChild(iconWrapper);
    card.appendChild(todoViewWrapper);

    let todoEditWrapper = document.createElement("div");
    todoEditWrapper.className = "todo-edit-wrapper";

    let todoEditInputField = document.createElement("input");
    todoEditInputField.type = "text";
    todoEditInputField.value = todoText;
    todoEditWrapper.appendChild(todoEditInputField);

    let saveIcon = document.createElement("i");
    saveIcon.className = "fas fa-save";
    saveIcon.addEventListener("click", function() {
        message.innerHTML = todoEditInputField.value;
        todoViewWrapper.style.display = "flex";
        todoEditWrapper.style.display = "none";
    })

    todoEditWrapper.appendChild(saveIcon);
    card.appendChild(todoEditWrapper);

    // console.log(card);
    todoList.appendChild(card);
}

todoForm.addEventListener("submit", function(e) {
    e.preventDefault();
    if(todoInput.value !== "") {
        renderTodoCard(todoInput.value);
        todoInput.value = "";
    } else {
        alert("Please enter a TODO")
    }
})



menuToggle.onclick = function() {
    overlay.style.display = "block";
    navigationDrawer.style.transform = "translateX(0%)";
}

function hideNavDrawer() {
    overlay.style.display = "none";
    navigationDrawer.style.transform = "translateX(-100%)";
}

btnCloseDrawer.onclick = hideNavDrawer

overlay.onclick = hideNavDrawer
