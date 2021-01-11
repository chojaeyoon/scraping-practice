/* 아래 코드는 

15를 출력하는 코드입니다.*/

// console.log(10 + 5);
// console.log(20 - 5);

// 변수 선언
let expressoPrice;
expressoPrice = 3000;
let lattePrice = 4300;
let mochaPrice = 4800;

console.log(expressoPrice * 2);
console.log(lattePrice * 4 + mochaPrice * 2);
console.log(lattePrice + mochaPrice);
console.log(lattePrice * 3);

// 함수 선언
function greetings(sentence) {
  console.log('Hi');
  console.log('안녕');
  console.log('Guten tag!');
  console.log(sentence);
};

greetings('Hola');
greetings();

// 이름과 인사말 같이 출력 함수

function welcome(name){
  console.log('안녕하세요 ' + name + '님!')
};

welcome('조재윤');

// 숫자의 거듭제곱 출력

function printSquare(x){
  console.log(x * x);
};

printSquare(4);

// 여러 개의 파라미터

function printSum(num1, num2){
  console.log(num1 + num2);
}

printSum(10, 5);

function introduce(name, birth, nationality, job) {
  console.log('안녕하세요! 반갑습니다.')
  console.log('제 이름은 ' + name + '입니다.');
  console.log('생년월일은 ' + birth + '이고,');
  console.log('국적은 ' + nationality + '입니다.');
  console.log('직업은 ' + job + '입니다.');
  console.log('잘 부탁드립니다!');
};

introduce('조재윤', '95.08.22', '대한민국', '대학생');

// return문

function getTwo() {
  return 2;
};

console.log(getTwo());

function getTwice(number){
  return number * 2;
};

console.log(getTwice(5));

let x = getTwice(5);
let y = getTwice(2);

console.log(x * y);
