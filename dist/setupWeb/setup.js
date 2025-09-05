// Type Assertions
console.log("Setup Web");
const btnElement = document.getElementById("mybtn");
const inputElement = document.getElementById("name");
btnElement?.addEventListener("click", () => {
    alert(inputElement.value);
});
export {};
