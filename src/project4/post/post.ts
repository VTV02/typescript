export {};

function getRandomId(min: number = 1, max: number = 1000): number {
  return Math.floor(Math.random() * (max - min) + min);
}

interface IPosts {
  id: number;
  title: string;
  content: string;
}

const btnSave = document.getElementById("btnSave") as HTMLElement;
const tBody = document.getElementById("tBody") as HTMLElement;
const mTitle = document.getElementById("mTitle") as HTMLInputElement;
const mContent = document.getElementById("mContent") as HTMLInputElement;
const modalPopup = document.getElementById("exampleModal") as HTMLElement;

let isEdit: boolean = false;
let editID: string | null = null;

// read data from API
const fetchData = async () => {
  try {
    const res = await fetch("http://localhost:3000/posts");
    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }
    const data: IPosts[] = (await res.json()) as IPosts[];
    renderTable(data);
  } catch (error) {
    alert(error);
  }
};

// postData
const postData = async (data: IPosts) => {
  try {
    const res = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": `application/json`,
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error(`Error ${res.status}`);
    }
    await fetchData();
  } catch (error) {
    alert(error);
  }
};

// update data
const updateData = async (id: string, data: IPosts) => {
  try {
    const res = await fetch(`http://localhost:3000/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": `application/json`,
      },
      body: JSON.stringify(data),
    });
    await fetchData();
  } catch (error) {
    alert(error);
  }
};

// render table
const renderTable = (data: IPosts[]) => {
  tBody.innerHTML = "";
  data.forEach((item) => {
    tBody.innerHTML += `<tr>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.content}</td>
            <td>
                <button class="btn btn-warning edit" edit-id = "${item.id}">Edit</button>
                <button class="btn btn-danger delete" dele-id = "${item.id}">Delete</button>
            </td>
        </tr>`;
  });

  //   delete
  document.querySelectorAll(".delete").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("dele-id");
      if (id) {
        deleteData(id);
      }
    });
  });
  //   edit
  document.querySelectorAll(".edit").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("edit-id");
      if (id) {
        editData(id);
      }
    });
  });
};

const deleteData = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/post/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": `application/json`,
      },
    });
    if (!res.ok) {
      throw new Error(`${res.status}`);
    }
    await fetchData();
  } catch (error) {
    alert(error);
  }
};

const editData = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": `application/json`,
      },
    });
    if (!res.ok) {
      throw new Error(`${res.status}`);
    }
    const data: IPosts = (await res.json()) as IPosts;
    if (data.id.toString() === id) {
      mTitle.value = data.title;
      mContent.value = data.content;
      isEdit = true;
      editID = id;
    }
    await fetchData();
    const modal = (window as any).bootstrap.Modal.getInstance("modalPopup");
    modal.show();
  } catch (error) {
    alert(error);
  }
};

btnSave.addEventListener("click", async () => {
  const mTValue = mTitle.value.trim();
  const mCValue = mContent.value.trim();
  if (!(mCValue && mCValue)) {
    alert("Please fill in completely");
    return;
  }

  if (isEdit && editID) {
    // update data
    const updata: IPosts = {
      id: parseInt(editID),
      title: mTValue,
      content: mCValue,
    };
    await updateData(editID, updata);
    await fetchData();
    isEdit = false;
    editID = null;
  } else {
    const data: IPosts = {
      id: getRandomId(1, 1000),
      title: mTValue,
      content: mCValue,
    };
    await postData(data);
    await fetchData();
  }

  const modal = (window as any).bootstrap.Modal.getInstance("modalPopup");
  if (modal) {
    modal.hide();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});
