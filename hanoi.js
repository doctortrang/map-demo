const displayHG = document.getElementById("hoguom")
const hoguomDisplay = document.getElementById("icon-hg")
hoguomDisplay.addEventListener("mousemove", function() {
    displayHG.style.display = "block";
})

hoguomDisplay.addEventListener("mouseleave", function() {
    displayHG.style.display = "none";
})
const displayTL = document.getElementById("thanglong")
const thanglongDisplay = document.getElementById("icon-tl")
thanglongDisplay.addEventListener("mousemove", function() {
    displayTL.style.display = "block";
})

thanglongDisplay.addEventListener("mouseleave", function() {
    displayTL.style.display = "none";
})