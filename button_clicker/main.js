function like() {
    alert("Ninja was liked")
}

function login(element) {
    if (element.innerText == "Login"){
        element.innerText = "Logout";
    }
    else {
        element.innerText = "Login";
    }
}

function add(element) {
    element.remove();
}