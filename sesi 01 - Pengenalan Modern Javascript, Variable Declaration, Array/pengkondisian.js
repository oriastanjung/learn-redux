// if - else if - else

let number = "-1";

if(number[0] === "-"){
    console.log("negatif")
}
else if(number[0] === "0" ){
    console.log("nol");
}
else {
    console.log("bilangan bulat positif");
}



// dengan ternary (?)
// variable === kondisi ? kondisi true : kondisi false

number[0] === "-" ? console.log("negatif") : console.log("positif");

// demgam && operator
// variabel && kondisi true

number[0] === '0' && console.log("nol")