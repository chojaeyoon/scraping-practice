// if문 (if statement)

let temperature = 0;

if (temperature <= 0) {
  console.log('물이 업니다.');
} else if (temperature < 100) {
  console.log('물이 얼지도 끓지도 않습니다.');
} else if (temperature < 150) {
  console.log('물이 끓습니다.');
} else {
  console.log('물이 모두 수증기가 되었습니다.')
}

// switch문 (swich statement)

let myChoice = 4;

switch(myChoice) {
  case 1:
    console.log('토끼');
    break;
  case 2:
    console.log('고양이');
    break;
  case 3:
    console.log('코알라');
    break;
  case 4:
    console.log('강아지');
    break; 
  default :
    console.log('1에서 4까지의 숫자를 선택해 주세요.'); //조건문과 파라미터를 비교한 후 같을 때 동작 부분을 실행한다. break 문을 통해 빠져나온다.
}

// switch문은 값들을 비교할 때 자료형을 엄격하게 구분한다.
// if문으로 대체할 때에는 반드시 등호 3개로 일치비교를 해야한다. 

// 반복문 (loop statement)

for (let i = 1; i <= 10; i++) {   // 초기 부분; 조건 부분; 추가 동작 부분
  console.log(`${i} 2021년 화이팅!`);
}

let i = 1;
for (; i <= 10; i++) { // 세미 콜론 삭제 안됨 - 세미콜론은 무조건 두개가 있어야 함.
  console.log(`${i} 2021년 화이팅!`);
}
// while문 (while statement)

let i = 1; // 이걸 밖에서 작성해주어야 하고 반복하는 부분도 안에서 따로 써줘야 함.
while (i <= 1) {
  console.log(`${i} 2021년 화이팅!`);
  i++;
}

let i = 30;

while (i % 7 !== 0) {
  i++;
}

console.log(i); // global 변수를 조건 비교에 사용하고 반복문 내부에서 다루면서 결과적으로 반복문이 종료된 이후에도 변수를 사용할 경우에는 while문을 사용하는 것이 더 맞다.


// 나머지 문제
const N = 180;

let sum = 0;
let i = 1;

while (i <= N) {
  if (N % i === 0) {
      console.log(i);
      sum++
    }
  i++;
}

console.log(`180의 약수는 총 ${sum}개입니다.`)

// break와 continue
let i = 1;

while (i <= 10) {
  console.log(i);
  if (i === 7) {
    break;
  }
  i++;
}

for (let i = 1; i < 10; i++) { // 반복문이 실행되는 도중에 빠져나오는 법
  console.log(i);
  if (i === 7) {
    break;
  }
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // 다음 동작 부분을 무시하고 바로 추가 동작 부분으로 감.
  }
  console.log(i);
}

let i = 1;

while (i <= 10) {
  if (i % 2 === 0) {
    i++; // continue 전에 미리 넣어줌.
    continue;
  }
  console.log(i);
  i++;
}

// while 문 구구단

let i = 1;
while (i <= 9) {
  let j = 1;
  while (j <= 9) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
  i++;
}
