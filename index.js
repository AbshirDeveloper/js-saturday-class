// use-strict


const root = document.getElementById("root");
// operators

// root.innerHTML = "test"


// equality (checking value -> type)


// loose equality

let numberOne = 5;
let numberTwo = '5';

// root.innerHTML = numberOne == numberTwo;


// strict equality

numberOne = 5;
numberTwo = '5';

// root.innerHTML = numberOne === numberTwo;


// not equal (checking type -> value)

// loose

numberOne = 5;
numberTwo = '5';

// root.innerHTML = numberOne != numberTwo;

// stric

numberOne = 5;
numberTwo = '5';

// root.innerHTML = numberOne !== numberTwo;



// greater than (>)

let num = 4;
let num2 = 5;

root.innerHTML = num > num2

// less then   (<)

root.innerHTML = num < num2



// less than or equal (>=)

root.innerHTML = num >= num2


// greater than or eual (<=)

root.innerHTML = num <= num2



// type checking


let name = '5';
// string number array function boolean null undefined



if (typeof name !== 'string') {
    // root.innerHTML = "yes, the condition is true"
    alert("condition one")
}
else if (typeof name === 'string') {
    // root.innerHTML = "no, the condition is not true"
    // alert("condition two")
   
}
else {
    root.innerHTML = "non of them is correct";
    alert("no condition is true")
}


