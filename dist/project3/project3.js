"use strict";
function getRandomId(min = 1, max = 1000) {
    return Math.floor(Math.random() * (max - min) + min);
}
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
    const modal = window.bootstrap.Modal.getInstance(modalElement);
    // Regenerate table
    if (modal) {
        modal.hide();
    }
    generateTable();
});
const generateTable = () => {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    table.innerHTML = "";
    if (todos.length === 0) {
        table.innerHTML = `
       <tr>
        <td colspan="3" class="text-center text-muted">No tasks yet. Add your first task!</td>
      </tr>
    `;
        return;
    }
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
    todos.splice(index, 2);
    localStorage.setItem("todos", JSON.stringify(todos));
    generateTable();
}
// Initialize table on page load
document.addEventListener("DOMContentLoaded", function () {
    generateTable();
});
