function getRandomId(min = 1, max = 1000) {
    return Math.floor(Math.random() * (max - min) + min);
}
const btnSave = document.getElementById("btnSave");
const tBody = document.getElementById("tBody");
const fetchData = async () => {
    const res = await fetch("http://localhost:3000/blogs");
    if (!res.ok) {
        throw new Error(`HTTP is not response: ${res.status}`);
    }
    const data = (await res.json());
    renderTable(data);
};
const renderTable = (data) => {
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
export {};
