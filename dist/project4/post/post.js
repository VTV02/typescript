function getRandomId(min = 1, max = 1000) {
    return Math.floor(Math.random() * (max - min) + min);
}
const btnSave = document.getElementById("btnSave");
const tBody = document.getElementById("tBody");
const mTitle = document.getElementById("mTitle");
const mContent = document.getElementById("mContent");
const modalPopup = document.getElementById("exampleModal");
let isEdit = false;
let editID = null;
// read data from API
const fetchData = async () => {
    try {
        const res = await fetch("http://localhost:3000/posts");
        if (!res.ok) {
            throw new Error(`Error: ${res.status}`);
        }
        const data = (await res.json());
        // render table
    }
    catch (error) {
        alert(error);
    }
};
// postData 
const postData = async (data) => {
    try {
        const res = await fetch("http://localhost3000", {
            method: "POST",
            headers: {
                'Content-Type': `application/json`
            },
            body: JSON.stringify(data)
        });
        if (!res.ok) {
            throw new Error(`Error ${res.status}`);
        }
        await fetchData();
    }
    catch (error) {
        alert(error);
    }
};
// update data 
const updateData = async (id, data) => {
    try {
        const res = await fetch(`http://localhost:3000/posts/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': `application/json`
            },
            body: JSON.stringify(data)
        });
    }
    catch (error) {
    }
};
// render table
btnSave.addEventListener("click", () => {
    const mTValue = mTitle.value.trim();
    const mCValue = mContent.value.trim();
    if (!(mCValue && mCValue)) {
        alert("Please fill in completely");
        return;
    }
    if (isEdit && editID) {
        // update
    }
});
export {};
