// 숫자 표기법
let millionaire = 10000000000;
let myNumber = 1e9; // 지수 표기법

console.log(millionaire);
console.log(myNumber);
console.log(millionaire === myNumber);

console.log(25e5 === 2500000);
console.log(5.3e3 === 5300);
console.log.log(-6.1e8 === -610000000);

console.log(16e-5 === 0.00016);
console.log(3.5e-3 === 0.0035);

// Number
let myNumber = 0.3591;

// toFixed(0~100)
console.log(+myNumber.toFixed(2)); //반올림해서 소수 2째자리까지로 만들어줌. Number 함수 대신 + 붙이면 Number 함수 역할함.

// toString (2 ~36)
console.log(myNumber.toString(2)); // 2진수
console.log(255..toString(2)); // 점을 2개 써야함.
console.log((255).toString(2)); // 괄호를 씌우는 것도 방법임
console.log(myNumber.toString(8)); // 8진수
console.log(myNumber.toString(16)); // 16진수

// Math 예제
console.log(Math.abs(-10)); //절대값
console.log(Math.max(2, -1, 4, 6, 0)); // 최댓값
console.log(Math.min(2, -1, 4, 6, 0)); // 최솟값
console.log(Math.pow(2, 4)); // 거듭제곱
console.log(Math.round(2.3)) // 정수값으로 반올림.
console.log(Math.floor(2.4)); // 버림
console.log(Math.ceil(2.4)); // 올림

console.log(Math.random()); // 0이상 1미만의 값이 랜덤으로 리턴됨.

//String
let myString = 'Hi Codeit';

// 양 끝 공백 제거
console.log(myString.trim()); //  trim 메소드

// 대소문자 변환
console.log(myString.toUpperCase()); // 대문자
console.log(myString.toLowerCase()); // 소문자

//요소 탐색
console.log(myString.indexOf('a')); // 앞 부터
console.log(myString.lastIndexOf('i')); // 뒤 부터

// 요소 접근
console.log(myString[3]); // 대괄호 표기법
console.log(myString.charAt(3)) //  charAt 메소드

// 문자열 길이
console.log(myString.length); // length 프로퍼티

// 부분 문자열 접근 (start, end)
console.log(myString.slice(0, 2)); // 0부터 1까지
console.log(myString.slice(3)); // 3번부터 끝까지
console.log(myString.slice()); // 전체 문자열

// 예시
let myString = 'Codeit';
for (let str of myString) {
  console.log(str);
}

// 배열은 mutable(바뀔 수 있는) / 문자열은 immutable(바뀔 수 없는)

// 배열은 요소에 접근해서 할당연산자를 통해 요소 수정 가능하지만 문자열은 한번 할당된 값을 수정할 수 없음.

// 배열과 객체 모두 참조형이기 때문에 주소를 할당받는 것.

// 참조형 복사하기 (Reference Type Copy)
let numbers1 = [1, 2, 3];
let numbers2 = numbers1.slice()

numbers2.push(4); // 새로운 것을 만들어서 복사할 수 있게!

function cloneObject(object) {
  let temp = {};

  for (let key in object) {
    temp [key] = object[key];
  }

  return temp;
};

let course1 = {
  titlel : '파이썬 프로그래밍 기초',
  language : 'Python'
};

let course2= cloneObject(course1);

// const로 변수를 만드는 경우 다수 존재! = 이미 정해져 있는 경우 많기 때문.

// 객체의 Property, 배열의 요소는 const로 해도 충분히 변할 수 있음.

// 변수 : myName / 상수 : MY_NAME

// 지금은 let과 const만 사용함. var은 선언되기 이전에도 사용할 수 있음.