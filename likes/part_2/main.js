function like(post) {
    let span

    if (post == 1) {
        span = document.querySelector("#card1Likes")
    }
    else if (post == 2) {
        span = document.querySelector("#card2Likes")
    }
    else if (post == 3) {
        span = document.querySelector("#card3Likes")
    }
    let num = parseInt(span.innerText);
    num++;
    span.innerText = num;
}