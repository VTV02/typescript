"use strict";
function getRandomId(min = 1, max = 1000) {
    return Math.floor(Math.random() * (max - min) + min);
}
<<<<<<< HEAD
const addInput = document.getElementById("mInput");
const btnAdd = document.getElementById("btnAdd");
const tBody = document.getElementById("tBody");
btnAdd.addEventListener("click", () => {
    const todoText = addInput.value.trim();
    if (todoText.length === 0) {
        alert("Please enter the Task!");
        return;
    }
    const myTodo = {
        id: getRandomId(1, 1000),
        name: todoText,
    };
    // get existing task
    let todos = [];
    //   declared and change get data to Object
    const eData = JSON.parse(localStorage.getItem("tasks") || "[]");
    todos = eData;
    //   Push new data
    todos.push(myTodo);
    //   Change to string and push to localStorage
    localStorage.setItem("tasks", JSON.stringify(todos));
    // delete input plain
    addInput.value = "";
    // Close modal - Multiple approaches for better compatibility
    const modalElement = document.getElementById("exampleModal");
    //   take a instance of window modal
=======
const add = document.getElementById("addTodoBtn");
const inputText = document.getElementById("todoInput");
const table = document.getElementById("todoTableBody");
add.addEventListener("click", () => {
    const todoText = inputText.value.trim();
    if (!todoText) {
        alert("Please enter a task!");
        return;
    }
    const myTodo = {
        id: getRandomId(1, 100),
        name: todoText,
    };
    // Get existing todos from localStorage
    let todos = [];
    const existingTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    todos = existingTodos;
    todos.push(myTodo);
    // SetItem to LocalStorage
    localStorage.setItem("todos", JSON.stringify(todos));
    // Clear input after adding
    inputText.value = "";
    // Close modal - Multiple approaches for better compatibility
    const modalElement = document.getElementById("exampleModal");
>>>>>>> refs/remotes/origin/main
    const modal = window.bootstrap.Modal.getInstance(modalElement);
    // Regenerate table
    if (modal) {
        modal.hide();
    }
<<<<<<< HEAD
    showToast("Task created successfully!", "success", 3000);
    //   Close modal after enter tasks
    generateTable();
});
const generateTable = () => {
    const todos = JSON.parse(localStorage.getItem("tasks") || "[]");
    tBody.innerHTML = "";
    if (todos.length === 0) {
        tBody.innerHTML = `
=======
    generateTable();
});
const generateTable = () => {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    table.innerHTML = "";
    if (todos.length === 0) {
        table.innerHTML = `
>>>>>>> refs/remotes/origin/main
       <tr>
        <td colspan="3" class="text-center text-muted">No tasks yet. Add your first task!</td>
      </tr>
    `;
        return;
    }
<<<<<<< HEAD
    todos.forEach((element) => {
        tBody.innerHTML += `<tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td><button class = "btn btn-danger delete" data-id = "${element.id}">Delete</button></td>
        </tr>`;
    });
    document.querySelectorAll(".delete").forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            deleteHandle(id);
        });
    });
};
const deleteHandle = (id) => {
    const currentData = localStorage.getItem("tasks");
    if (currentData) {
        // Create a array contain object
        const todos = JSON.parse(currentData);
        // filter which element difference id
        const newTodos = todos.filter((todo) => todo.id.toString() !== id);
        localStorage.setItem("tasks", JSON.stringify(newTodos));
        showToast("Task deleted successfully!", "danger", 3000);
    }
    generateTable(); // Cập nhật lại bảng sau khi xóa
};
const showToast = (message, type = "success", duration = 3000) => {
    const toastEl = document.getElementById("liveToast");
    const toastBody = document.getElementById("toastMessage");
    const progressBar = document.getElementById("toastProgress");
    // Đổi text
    toastBody.innerText = message;
    // Đổi màu theo loại
    if (type === "success") {
        toastEl.classList.remove("text-bg-danger");
        toastEl.classList.add("text-bg-success");
    }
    else {
        toastEl.classList.remove("text-bg-success");
        toastEl.classList.add("text-bg-danger");
    }
    // Reset progress
    progressBar.style.transition = "none";
    progressBar.style.width = "100%";
    // Kích hoạt Toast
    const toast = new window.bootstrap.Toast(toastEl, {
        delay: duration,
    });
    toast.show();
    // Animate progress
    setTimeout(() => {
        progressBar.style.transition = `width ${duration}ms linear`;
        progressBar.style.width = "0%";
    }, 50);
};
=======
    todos.forEach((td, index) => {
        table.innerHTML += `<tr>
      <td>${td.id}</td>
      <td>${td.name}</td>
      <td><button class="btn btn-danger btn-sm" onclick="deleteTodo(${index})">Delete</button></td>
    </tr>`;
    });
};
// Function to delete todo
function deleteTodo(index) {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    generateTable();
}
>>>>>>> refs/remotes/origin/main
// Initialize table on page load
document.addEventListener("DOMContentLoaded", function () {
    generateTable();
});
