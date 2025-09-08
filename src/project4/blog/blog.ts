export{};

function getRandomId(min: number = 1, max: number = 1000): number {
  return Math.floor(Math.random() * (max - min) + min);
}

interface IBlog {
  id: number;
  title: string;
  author: string;
  content: string;
}

const btnSave = document.getElementById("btnSave") as HTMLElement;
const tBody = document.getElementById("tBody") as HTMLElement;
const mTitle = document.getElementById("mTitle") as HTMLInputElement;
const mAuthor = document.getElementById("mAuthor") as HTMLInputElement;
const mContent = document.getElementById("mContent") as HTMLInputElement;
const modalPopup = document.getElementById("exampleModal") as HTMLElement;

// Biến để track edit mode
let isEditMode = false;
let currentEditId: string | null = null;

const fetchData = async () => {
  const res = await fetch("http://localhost:3000/blogs");
  if (!res.ok) {
    throw new Error(`HTTP is not response: ${res.status}`);
  }
  const data: IBlog[] = (await res.json()) as IBlog[];
  renderTable(data);
};

const postData = async (blogsData: IBlog) => {
  try {
     const res = await fetch("http://localhost:3000/blogs", {
      method: 'POST',
      headers: {
        'Content-Type': `application/json`
      },
      body: JSON.stringify(blogsData) 
     })
     if(!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
     }
     return await res.json();
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
}

// 
const updateData = async (id: string, blogsData: IBlog) => {
  try {
     const res = await fetch(`http://localhost:3000/blogs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': `application/json`
      },
      body: JSON.stringify(blogsData) 
     })
     if(!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
     }
     return await res.json();
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
}

btnSave.addEventListener("click", async()=> {
  const mTValue = mTitle.value.trim();
  const mAValue = mAuthor.value.trim();
  const mCValue = mContent.value.trim();

  if(!(mTValue && mAValue && mCValue)) {
    alert("Please fill in completely!");
    return;
  }

  if (isEditMode && currentEditId) {
    // Update existing blog
    const updatedBlog: IBlog = {
      id: parseInt(currentEditId),
      title: mTValue,
      author: mAValue,
      content: mCValue
    }
    await updateData(currentEditId, updatedBlog);
    
    // Reset edit mode
    isEditMode = false;
    currentEditId = null;
  } else {
    // Create new blog
    const newBlog: IBlog = {
      id: getRandomId(1,1000),
      title: mTValue,
      author: mAValue,
      content: mCValue
    }
    await postData(newBlog);
  }
  
  await fetchData();
  
  // Clear form
  mTitle.value = '';
  mAuthor.value = '';
  mContent.value = '';
  
  const modal = (window as any).bootstrap.Modal.getInstance(modalPopup);
  if (modal) {
    modal.hide();
  }
})

const renderTable = (data: IBlog[]) => {
  tBody.innerHTML = "";
  data.forEach((element) => {
    tBody.innerHTML += `<tr>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.author}</td>
            <td>${element.content}</td>
            <td>
                <button class="btn btn-warning edit" edit-id="${element.id}">Edit</button>
                <button class="btn btn-danger delete" dele-id="${element.id}">Delete</button>
            </td>
        </tr>`;
  });

  // Delete buttons
  document.querySelectorAll(".delete").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("dele-id");
      if (id) {
        deleteData(id);
      } 
    });
  });

  // Edit buttons - SỬA: dùng .edit thay vì .delete
  document.querySelectorAll(".edit").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("edit-id");
      if (id) {
        editData(id);
      } 
    });
  });
};

const deleteData = async(id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/blogs/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': `application/json`
      },
    });
    if(!res.ok) {
      throw new Error(`HTTP is not response: ${res.status}`);
    }
    await fetchData();
    return;
  } catch (error) {
    alert(error);
    return;
  }
}

const editData = async(id: string) => {
  try {
    // GET single blog by id
    const res = await fetch(`http://localhost:3000/blogs/${id}`, {
      method: "GET",
      headers: {
        'Content-Type': `application/json`
      }
    });
    
    if(!res.ok) {
      throw new Error(`HTTP is not response: ${res.status}`);
    }
    
    const data: IBlog = (await res.json()) as IBlog;
    
    // Fill form với data
    mTitle.value = data.title;
    mAuthor.value = data.author;
    mContent.value = data.content;
    
    // Set edit mode
    isEditMode = true;
    currentEditId = id;
    
    // Show modal
    const modal = new (window as any).bootstrap.Modal(modalPopup);
    modal.show();
    
    return;
  } catch (error) {
    alert(error);
    return;
  }
}

document.addEventListener("DOMContentLoaded", function (): void {
  fetchData();
});