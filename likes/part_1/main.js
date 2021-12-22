function like() {
    let span = document.querySelector("#card1Likes")
    let num = parseInt(span.innerText);
    num++;
    span.innerText = num;
}