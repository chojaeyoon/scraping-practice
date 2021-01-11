//거듭제곱

console.log(2 ** 3);

// 문자열

console.log(`He said "I'm Iron man"`); // ` 로 쓰면 더 가독성이 높아진다.
console.log('Hello' + 'Codeit');

// 불린형 (Boolean)

console.log(2 > 1);
console.log(2 < 1);
console.log(3 >= 2);
console.log(3 <= 2);
console.log(3 === 2);
console.log(3 !== 3);

// and 연산자
console.log(true && false);

// or 연산자
console.log(true || false);

// 반대 연산자
console.log(!true);
console.log(!!true);

// typeof 연산자
console.log(typeof 101);
console.log(typeof 'Codeit');
console.log(typeof true);

// not a number = NaN
console.log(typeof 'Hello' + 'Codeit'); // typeof가 더 먼저라서 앞의 것을 먼저 계산한다. --> 괄호로 우선순위 결정

// 형 변환(Type Conversion)

console.log(Number('10') + Number('5'));
console.log(String(10) + String(5));

// 숫자 -> 불린

let y = NaN;
console.log(y);
console.log(Boolean(y)); // 보통 true 값이 나오지만 '', 0, NaN 은 false값이 된다.

console.log(4 + '2'); // +는 숫자 연산보다 문자 연산이 먼저이다.
console.log(4 + 2);
console.log('4' - true);
console.log(4 * false);
console.log(4 / '2'); // /는 문자 연산보다 숫자 연산이 먼저이다.
console.log('4' ** true);
console.log(4 % 'two');

console.log(2 < '3');
console.log('2' <= false);

console.log(1 == '1'); // 일치, 불일치(!==)  --> 숫자 형태로 형변환이 일어난다. 
console.log(1 == '1'); // 동등, 부등(!=)

// == 보다는 === 사용을 생활화 해야한다. 

// template : 일정한 틀, 형식
// 템플릿 문자열 (template strings)
let year = 2018;
let month = 3;
let day = 11;

console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`);

// null - 의도적으로 값이 없음을 표현할 때 사용하는 값, undefined - 처음부터 값이 없다는 것을 확인하는 값

let codeit;
let cup
console.log(cup); //undefined
cup = '물';
console.log(cup) // 물
cup = null;
console.log(cup); //null

console.log(null == undefined);
console.log(null === undefined);



