const TaskInputProduct = document.getElementById("input_product");
const TaskInputPrice = document.getElementById("input_price");
const TaskInputImage = document.getElementById("input_image");
const addTaskBt = document.getElementById("add_task_btn");

let tasks = [];

/* const imageUrl = (TaskInputImage) => {
    const input = new URL(TaskInputImage);
    return /\.(jpg|png|gif)$/.test(input.pathname)
} */

addTaskBt.addEventListener("click",() => {
    const InProduct = TaskInputProduct.value.trim();
    const InPrice = TaskInputPrice.value.trim();
    const InImage = TaskInputImage.value;
    if (InProduct, InPrice,InImage) {
        const task = {
            id: Date.now(),
            text: InProduct,
            price: InPrice,
            Image: TaskInputImage
        };
        tasks.push(task);
        // renderTasks(tasks);
        TaskInputProduct.value = "";
        TaskInputPrice.value = "";
        TaskInputImage.value = "";
    }
})
console.log(tasks);
