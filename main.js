const left = document.getElementById("left")
const right = document.getElementById("right")

const container = document.querySelector(".container")


left.addEventListener("mouseover", () => {
    container.classList.add("left-hover");
})
left.addEventListener("mouseleave", () => {
    container.classList.remove("left-hover");
})


right.addEventListener("mouseover", () => {
    container.classList.add("right-hover");
})
right.addEventListener("mouseleave", () => {
    container.classList.remove("right-hover");
})