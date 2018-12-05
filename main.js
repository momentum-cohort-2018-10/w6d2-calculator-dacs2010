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

let buttonIds = [
    "button-1",
    "button-2",
    "button-3",
    "button-div",
    "button-4",
    "button-5",
    "button-6",
    "button-mult",
    "button-7",
    "button-8",
    "button-9",
    "button-sub",
    "button-0",
    "button-point",
    "button-plus"
]

function activateButtons(buttonIds) {
    for (let id of buttonIds) {
         button(id)
    }
}

activateButtons(buttonIds)
clear()
equals()
