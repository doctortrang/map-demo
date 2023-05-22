const searchBox = document.getElementById("searching")

searchBox.addEventListener('click', function() {
    searchBox.placeholder = '';
    searchBox.style.backgroundImage = 'none';
});

const people = document.getElementById("people")
const map = document.getElementById("map")
const climate = document.getElementById("climate")
const wind = document.getElementById("wind")

const mapIcon = document.getElementById("map-icon")
mapIcon.addEventListener("click", function() {
    people.style.display = "none"
    climate.style.display = "none"
    wind.style.display = "none"
    map.style.display = "block";
})

const peopleIcon = document.getElementById("people-icon")
peopleIcon.addEventListener("click", function() {
    map.style.display = "none";
    climate.style.display = "none"
    wind.style.display = "none"
    people.style.display = "block"
})

const climateIcon = document.getElementById("air-icon")
climateIcon.addEventListener("click", function() {
    map.style.display = "none";
    people.style.display = "none";
    wind.style.display = "none";
    climate.style.display = "block";
})

const windIcon = document.getElementById("wind-icon")
windIcon.addEventListener("click", function() {
    map.style.display = "none";
    people.style.display = "none"
    climate.style.display = "none"
    wind.style.display = "block"
})





