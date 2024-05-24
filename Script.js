const addTaskBt = document.getElementById("add_task_btn");

const productArray = [];
let id = 0;

/* const imageUrl = (TaskInputImage) => {
    const input = new URL(TaskInputImage);
    return /\.(jpg|png|gif)$/.test(input.pathname)
} */

addTaskBt.addEventListener("click",() => {
    const nameProduct = document.getElementById("input_product").value.trim();
    const price = document.getElementById("input_price").value.trim();
    const urlImage = document.getElementById("input_image").value;
    if (nameProduct && price && urlImage) {
        const product = {
            id: ++id,
            name: nameProduct,
            price: price,
            image: urlImage
        };
        productArray.push(task);
        renderTasks(productArray);
        TaskInputProduct.value = "";
        TaskInputPrice.value = "";
        TaskInputImage.value = "";
    }
})

function renderTasks(upload) {
	const displaySection = document.getElementById("displayProduct");
	const card = document.createElement("div");
    card.className = "bg-white p-4 rounded-lg shadow-lg";

    card.innerHTML=`
    <input type="checkbox" class=""
    <img src="${upload.TaskInputImage}" alt="${upload.TaskInputProduct}"
    <h2>
    <p>${TaskInputProduct}</p>
    <p>${TaskInputPrice}</p>
    </h2>
    `;
    displaySection.appendChild(card);
}