// elde if practice


/*

A,B,C,D,E
A = Execelent
B = Very Good
C = Good
D = Poor
E = Very Poor
F = Failed
*/


const grades = {
    A:'Excelent',
B :'Very Good',
C:'Good',
D:'Poor',
E:'Very Poor',
F:'Failed',
};

const grade = 'Very Good';

 if (grade === 'Excelent'){
console.log('A');
 } else if (grade === 'Poor'){
     console.log('D');
 }  else if (grade === 'Failed'){
    console.log('F');
 } else if (grade === 'Very Good'){
    console.log('B');
 }
