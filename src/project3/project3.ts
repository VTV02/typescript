function getRandomId(min: number = 1, max: number = 1000): number {
  return Math.floor(Math.random() * (max - min) + min);
}

interface ITodo {
  id: number;
  name: string;
}

const add = document.getElementById("addTodoBtn") as HTMLButtonElement;
const inputText = document.getElementById("todoInput") as HTMLInputElement;
const table = document.getElementById("todoTableBody") as HTMLElement;

add.addEventListener("click", () => {
  const todoText = inputText.value.trim();
  if (!todoText) {
    alert("Please enter a task!");
    return;
  }
  const myTodo: ITodo = {
    id: getRandomId(1, 100),
    name: todoText,
  };

  // Get existing todos from localStorage
  let todos: ITodo[] = [];
  const existingTodos: ITodo[] = JSON.parse(
    localStorage.getItem("todos") || "[]"
  );
  todos = existingTodos;

  todos.push(myTodo);

  // SetItem to LocalStorage
  localStorage.setItem("todos", JSON.stringify(todos));

  // Clear input after adding
  inputText.value = "";

  // Close modal - Multiple approaches for better compatibility
  const modalElement = document.getElementById("exampleModal") as HTMLElement;
  const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
  // Regenerate table
  if (modal) {
    modal.hide();
  }
  generateTable();
});

const generateTable = () => {
  const todos: ITodo[] = JSON.parse(localStorage.getItem("todos") || "[]");
  table.innerHTML = "";
  if (todos.length === 0) {
    table.innerHTML = `
       <tr>
        <td colspan="3" class="text-center text-muted">No tasks yet. Add your first task!</td>
      </tr>
    `;
    return;
  }

  todos.forEach((td: ITodo, index: number) => {
    table.innerHTML += `<tr>
      <td>${td.id}</td>
      <td>${td.name}</td>
      <td><button class="btn btn-danger btn-sm" onclick="deleteTodo(${index})">Delete</button></td>
    </tr>`;
  });
};

// Function to delete todo
function deleteTodo(index: number) {
  const todos: ITodo[] = JSON.parse(localStorage.getItem("todos") || "[]");
  todos.splice(index, 2);
  localStorage.setItem("todos", JSON.stringify(todos));
  generateTable();
}

// Initialize table on page load
document.addEventListener("DOMContentLoaded", function (): void {
  generateTable();
});
