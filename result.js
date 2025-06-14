// Question 01
const result = 10;
if(result >= 0 && result <40 ){
    console.log('faild');
}else if(result >= 40 && result <50){
    console.log('he got grade: C');
}else if(result >= 50 & result <60){
    console.log('he got grade: B');
}
else if(result >= 60 & result <70){
    console.log('he got grade: B+');
}
else if(result >= 70 & result <80){
    console.log('he got grade: A');
}
else if(result >= 80 & result <=100){
    console.log('he got grade: A+');
}
else{
    console.log('invaild');
}
// question 02
const input = prompt("5");
const number = parseInt(input);

if (isNaN(number)) {
  console.log("please write correct number");
} else {
  const result = (number % 2 === 0) ? "evenNum" : "oddNum";
  console.log(`${number} হলো ${result}`);
}
// question 03
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

