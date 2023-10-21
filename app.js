

function calculate() {
    let age = parseInt(document.getElementById("age").value)
    let height = parseFloat(document.getElementById("height").value)
    let weight = parseFloat(document.getElementById("weight").value);
    let male = document.getElementById("gender-male").checked;
    if (male) {
        BMR = 66 + (13.7 * (weight)) + (5 * (height)) - (6.8 * (age))
    } else {
        BMR = 665 + (9.6 * (weight)) + (1.8 * (height)) - (4.7 * (age))
    }
    document.getElementById("calculate").innerHTML = BMR.toFixed(2)
    
}

function Clear(){
    let age = parseInt(document.getElementById("age").value = "")
    let height = parseFloat(document.getElementById("height").value = "")
    let weight = parseFloat(document.getElementById("weight").value = "")
}

