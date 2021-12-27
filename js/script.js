let header = document.querySelector("header")

window.addEventListener("scroll", () => {
    let pos = window.scrollY > 100

    header.classList.toggle("scroll", pos)
})


let modal = document.querySelector(".modalContainer")
let close = document.querySelector(".close")
let cari = document.querySelector(".cari")

cari.addEventListener("click", () => {
    modal.classList.toggle("active")
})

close.addEventListener("click", () => {
    modal.classList.toggle("active")
})