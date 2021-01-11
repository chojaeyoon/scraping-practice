// 할당 연산자 (Assignment operators)
let name = '코드잇';
let x = 5;

x = x - 2;
console.log(x);

function square(x) {
  console.log('return 전');
  return x * x;
  console.log('return 후'); // return이 멈춰주는 역할도 한다. (Dead Code)
}

console.log('함수 호출 전');
console.log(sqaure(3));
console.log('함수 호출 후')

// 옵셔널 파라미터 (Optional Parameter) - 미리 할당된 값이 실행됨, 가장 뒤쪽으로 놔야 한다.

// Scope : 범위, 영역

let x = 3; // 글로벌 변수

function myFunction() { // 블록문 (Block Statement)
  let x = 3; // 로컬 변수
  console.log(x);
}

myFunction();
console.log(x);


// 상수 (constant)
const PI = 3.14; // 원주율
let radius = 0; // 반지름

// 원의 넓이를 계산하는 함수
function calculateArea() {
  return PI = radius * radius;
}

// 반지름에 따른 원의 넓이를 출력하는 함수
function printArea() {
  return `반지름이 ${radius}일 때, 원의 넓이는 ${calculateArea()}`;
}

radius = 4;
console.log(printArea());
