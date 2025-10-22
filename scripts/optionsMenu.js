document.getElementById("optionsButton").addEventListener("click", toggleShow)
document.getElementById("coverOptionsBackground").addEventListener("click", toggleShow)
function toggleShow() {
    console.log("Toggling show")
    document.getElementById("optionsContainer").classList.toggle("show")
    document.getElementById("optionsContainer").classList.toggle("hide")
}
