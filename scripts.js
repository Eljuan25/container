const container = document.getElementById("container");
const incrementTBt = document.getElementById("incrementTBt");
    let count = 0;
    incrementTBt.addEventListener("click", () => {
        count++;
        container.textContent = count;
    });