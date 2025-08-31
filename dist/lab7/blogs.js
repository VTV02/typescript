"use strict";
const tb = document.querySelector("#blogs");
const blogs = async () => {
    const res = await fetch("http://localhost:8000/blogs");
    const data = (await res.json());
    data.forEach(dt => {
        tb.innerHTML += `<tr>
            <td>${dt.id}</td>
            <td>${dt.title}</td>
            <td>${dt.author}</td>
            <td>${dt.content}</td>
        </tr>`;
        console.log(dt.id);
    });
};
blogs();
