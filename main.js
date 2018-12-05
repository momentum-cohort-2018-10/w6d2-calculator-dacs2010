function getId(id) {
    let element = document.getElementById(id)
    return element
}
getId()

function equals(event) {
    let button = getId("equals")
    button.onclick = function () {
        let equation = getId("display").innerText
        let sum = eval(equation)
        getId("display").innerText = sum
    }
}

function clear(event) {
    let button = getId("clear")
    button.onclick = function () {
        getId("display").innerText = ""
        // location.reload()
    }
}

function button1(event){
    let button = getId("button-1")
    let text = button.innerText
    button.onclick = function () {
        getId("display").innerText += text
    }
}
function button2(event) {
    let button = getId("button-2")
    let text = button.innerText
    button.onclick = function () {
        getId("display").innerText += text
    }
}

function button3(event) {
    let button = getId("button-3")
    let text = button.innerText
    button.onclick = function () {
        getId("display").innerText += text
    }
}

function buttonDiv(event) {
    let button = getId("button-div")
    let text = button.innerText
    button.onclick = function () {
        getId("display").innerText += text
    }
}


button1()
button2()
button3()
buttonDiv()
clear()
equals()

console.log("js connected")
