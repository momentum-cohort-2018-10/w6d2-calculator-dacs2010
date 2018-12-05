
function equals(event) {
    let button = document.getElementById("equals")
    button.onclick = function () {
        let equation = document.getElementById("display").innerText
        let sum = eval(equation)
        document.getElementById("display").innerText = sum
        console.log("check")
    }
}

function button1(event){
    let button = document.getElementById("button-1")
    let text = button.innerText
    button.onclick = function () {
        document.getElementById("display").innerText += text
        console.log("1")
    }
}
function button2(event) {
    let button = document.getElementById("button-2")
    let text = button.innerText
    button.onclick = function () {
        document.getElementById("display").innerText += text
    }
}

function button3(event) {
    let button = document.getElementById("button-3")
    let text = button.innerText
    button.onclick = function () {
        document.getElementById("display").innerText += text
    }
}

function buttonDiv(event) {
    let button = document.getElementById("button-div")
    let text = button.innerText
    button.onclick = function () {
        document.getElementById("display").innerText += text
    }
}


button1()
button2()
button3()
buttonDiv()

equals()

console.log("js connected")
