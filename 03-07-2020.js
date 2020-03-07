//else if practice
/*

A, B, C, D, E, F

A = Excelent
B = very good
C = good
D = poor
E = very poor
F = fail
 
*/

// const grades ={
// A: 'Excelent',
// B: 'very good',
// C: 'good',
// D: 'poor',
// E: 'very poor',
// F: 'fail'
// }

var grade = promt("what is your grade");


if (grade === "Excelent"){
    console.log('A');
} else if (grade ==='poor'){
    console.log('D');
} else if (grade === 'Failed'){
    console.log("F");
}else if (grade === 'very good'){
    console.log("B");
}else if (grade === 'good'){
    console.log("C");
}else if (grade === 'very poor'){
    console.log("E");
}

var age = prompt("what is your age");
         
if( age > 18 ) {
   document.write("<b>Qualifies for driving</b>");
} else {
   document.write("<b>Does not qualify for driving</b>");
}