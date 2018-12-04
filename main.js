
function click1(event){
    let thing = document.getElementById("num-1")
    let display = document.getElementById('display')
    let newDisplay = document.createElement('h2')
    thing.onclick = function () {
        newDisplay.innerText = "1"
        display.appendChild(newDisplay)
    }
}
click1()