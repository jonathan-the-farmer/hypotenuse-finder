//hypotenuse calc by jonathan d

//button click listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
    //input
    
    let a = +document.getElementById("a-in").value;
    let b = +document.getElementById("b-in").value;

    //process
    let c = Math.sqrt(a ** 2 + b ** 2)

    //output
    document.getElementById("output").innerHTML = c;
}
