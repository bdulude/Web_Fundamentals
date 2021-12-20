// PRINT ODDS
function odds(){
    for (let x = 1; x < 20; x++){
        if (x % 2 == 1){
            console.log(x)
        }
    }
}

// DECREASING MULTIPLES OF 3
function multiplesOfThree(){
    for (let y = 99; y > 0; y -= 3){
        console.log(y)
    }
}

// PRINT THE SQUENCE 4, 2.5, 1, -0.5, -2, -3.5
function sequence(){
    for (let z = 4; z > -4; z -= 1.5){
        console.log(z)
    }
}

// SIGMA 
function sigma(){
    let sum = 0
    for (let i = 1; i < 101; i++){
        sum += i
    }
    console.log(sum)
}

// FACTORIAL
function factorial(){
    let product = 1
    for (let j = 1; j <= 12; j++){
        product *= j
    }
    console.log(product)
}



// odds()
// multiplesOfThree()
// sequence()
// sigma()
// factorial()