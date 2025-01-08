let barBtn = document.querySelector(".sidebar-toggle")
let closeBtn = document.querySelector(".close-btn")
let sidebarSection = document.querySelector(".sidebar")

barBtn.addEventListener("click", barFunc)
closeBtn.addEventListener("click", closeFunc)

function barFunc(){
    sidebarSection.classList.toggle("show-sidebar")
}
function closeFunc(){
    // instead of remove we use add because show-didebar is -100% instead of 0
    sidebarSection.classList.add("show-sidebar");
}