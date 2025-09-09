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
const fetchData = async() => {
  try {
    const res = await fetch("http://localhost:3000/posts");
    if(!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }
    const data: IPosts[] = (await res.json()) as IPosts[];
    // render table
  } catch (error) {
    alert(error);
  }

}

// postData 
const postData = async(data:IPosts) => {
  try {
    const res = await fetch("http://localhost3000", {
      method: "POST",
      headers: {
        'Content-Type': `application/json`
      },
      body: JSON.stringify(data)
    });
    if(!res.ok) {
      throw new Error(`Error ${res.status}`);
    }
  await fetchData();
  } catch (error) {
    alert(error);
  }
}

// update data 
const updateData = async(id: string, data: IPosts) {
  try {
    const res = await fetch(`http://localhost:3000/posts/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': `application/json`
      },
      body: JSON.stringify(data)
    });
  } catch (error) {
    
  }
}



// render table

btnSave.addEventListener("click", () => {
  const mTValue = mTitle.value.trim();
  const mCValue = mContent.value.trim();
  if(!(mCValue && mCValue)) {
    alert("Please fill in completely");
    return;
  }

  if(isEdit && editID) {
    // update
  }



})







