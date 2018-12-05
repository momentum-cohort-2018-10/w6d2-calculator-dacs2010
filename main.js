function getId(id) {
    let element = document.getElementById(id)
    return element
}
getId()

function button(id) {
    let button = getId(id)
    let text = button.innerText
    let action = button.onclick = function () {
        getId("display").innerText += text
    }
    return action
}

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
    }
}
clear()

button("button-1")
button("button-2")
button("button-3")
button("button-div")

button("button-4")
button("button-5")
button("button-6")
button("button-mult")

button("button-7")
button("button-8")
button("button-9")
button("button-sub")

button("button-0")
button("button-point")
button("button-plus")

equals()

console.log("js connected")
