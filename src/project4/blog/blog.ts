function getRandomId(min: number = 1, max: number = 1000): number {
  return Math.floor(Math.random() * (max - min) + min);
}
export{};
interface IBlog {
  id: number;
  title: string;
  author: string;
  content: string;
}

const btnSave = document.getElementById("btnSave") as HTMLElement;
const tBody = document.getElementById("tBody") as HTMLElement;

const fetchData = async () => {
  const res = await fetch("http://localhost:3000/blogs");
  if (!res.ok) {
    throw new Error(`HTTP is not response: ${res.status}`);
  }
  const data: IBlog[] = (await res.json()) as IBlog[];
  


  renderTable(data);
};




const renderTable = (data: IBlog[]) => {
  tBody.innerHTML = "";
  data.forEach((element) => {
    tBody.innerHTML += `<tr>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.author}</td>
            <td>${element.content}</td>
            <td><button class="btn btn-warning">Edit</button>
                <button class="btn btn-danger">Delete</button>
                </td>
        </tr>
        
        `;
  });
};

fetchData();
