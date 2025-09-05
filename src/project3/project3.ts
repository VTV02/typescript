function getRandomId(min: number = 1, max: number = 1000): number {
  return Math.floor(Math.random() * (max - min) + min);
}

interface ITask {
  id: number;
  name: string;
}

const addInput = document.getElementById("mInput") as HTMLInputElement;
const btnAdd = document.getElementById("btnAdd") as HTMLButtonElement;
const tBody = document.getElementById("tBody") as HTMLElement;

btnAdd.addEventListener("click", () => {
  const todoText = addInput.value.trim();
  if (todoText.length === 0) {
    alert("Please enter the Task!");
    return;
  }

  const myTodo: ITask = {
    id: getRandomId(1, 1000),
    name: todoText,
  };

  // get existing task
  let todos: ITask[] = [];
  //   declared and change get data to Object
  const eData: ITask[] = JSON.parse(localStorage.getItem("tasks") || "[]");
  todos = eData;
  //   Push new data
  todos.push(myTodo);
  //   Change to string and push to localStorage
  localStorage.setItem("tasks", JSON.stringify(todos));
  // delete input plain
  addInput.value = "";
  // Close modal - Multiple approaches for better compatibility
  const modalElement = document.getElementById("exampleModal") as HTMLElement;
  //   take a instance of window modal
  const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
  // Regenerate table
  if (modal) {
    modal.hide();
  }
  showToast("Task created successfully!", "success", 3000);

  //   Close modal after enter tasks
  generateTable();
});

const generateTable = () => {
  const todos: ITask[] = JSON.parse(localStorage.getItem("tasks") || "[]");
  tBody.innerHTML = "";

  if (todos.length === 0) {
    tBody.innerHTML = `
       <tr>
        <td colspan="3" class="text-center text-muted">No tasks yet. Add your first task!</td>
      </tr>
    `;
    return;
  }

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
      deleteHandle(id!);
    });
  });
};

const deleteHandle = (id: string) => {
  const currentData = localStorage.getItem("tasks");
  if (currentData) {
    // Create a array contain object
    const todos: ITask[] = JSON.parse(currentData);
    // filter which element difference id
    const newTodos = todos.filter((todo) => todo.id.toString() !== id);
    localStorage.setItem("tasks", JSON.stringify(newTodos));
    showToast("Task deleted successfully!", "danger", 3000);
  }
  generateTable(); // Cập nhật lại bảng sau khi xóa
};
const showToast = (
  message: string,
  type: "success" | "danger" = "success",
  duration: number = 3000
) => {
  const toastEl = document.getElementById("liveToast") as HTMLElement;
  const toastBody = document.getElementById("toastMessage") as HTMLElement;
  const progressBar = document.getElementById("toastProgress") as HTMLElement;

  // Đổi text
  toastBody.innerText = message;

  // Đổi màu theo loại
  if (type === "success") {
    toastEl.classList.remove("text-bg-danger");
    toastEl.classList.add("text-bg-success");
  } else {
    toastEl.classList.remove("text-bg-success");
    toastEl.classList.add("text-bg-danger");
  }

  // Reset progress
  progressBar.style.transition = "none";
  progressBar.style.width = "100%";

  // Kích hoạt Toast
  const toast = new (window as any).bootstrap.Toast(toastEl, {
    delay: duration,
  });
  toast.show();

  // Animate progress
  setTimeout(() => {
    progressBar.style.transition = `width ${duration}ms linear`;
    progressBar.style.width = "0%";
  }, 50);
};

// Initialize table on page load
document.addEventListener("DOMContentLoaded", function (): void {
  generateTable();
});
