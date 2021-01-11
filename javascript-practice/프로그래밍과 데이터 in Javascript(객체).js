// 객체 (Object)
/* Property Name / Value : 

1. 첫 번째 글자는 반드시 문자, 밑줄(_), 달러 기호($) 중 하나로 시작
2. 띄어쓰기와 하이픈 금지이므로 만약에 있는 경우 ''로 감싸줘야 한다. 
3. Property Value는 모든 자료형 가능하다. 객체 안에 객체도 가능하다. */

let codeit = {
  name : '조재윤',
  'born Year' : 1995,
  isVeryNice : true,
  worstCourse : null,
  bestCourse : {
    title : 'Javascript Basic',
    language : 'Javascript'
  }
}

// 점 표기법 (objectiveName, propertyName)
console.log(codeit.isVeryNice);



// 대괄호 표기법 (objectiveName['propertyName'])
console.log(codeit['born Year']);

let propertyName = 'name';
console.log(codeit[propertyName]);
console.log(codeit.bestCourse['title']);

// Property 추가
console.log(codeit.ceo);
codeit.ceo = '조재윤';
console.log(codeit.ceo);

// Property 삭제
console.log(codeit.worstCourse);
delete codeit.worstCourse;
console.log(codeit.worstCourse);

// Property 여부 확인
console.log('name' in codeit);

// 메소드 (Method) - Property 값으로 함수를 넣어주는 것이 method
let greetings = { // greetings라는 객체에 3가지 메소드가 정의된 것으로 볼 수 있음.
  sayHello : function (name) {
    console.log(`Hello! ${name}!`);
  },
  sayHi : function () {
    console.log('Hi!');
  },
  sayBye : function () {
    console.log('Bye!'); // console 이라는 객체의 log라는 메소드임.
  },
};

greetings.sayHello();
greetings['sayHello']('Codeit')

// 어떤 객체의 메소드인지에 따라서 그 객체에 맞는 동작을 실행함.

let rectAngle = {
  width : 30,
  height : 50,
  getArea : function () {
    return rectAngle.width * rectAngle.height;
  }
}
let triAngle = {
  width : 15,
  height : 40,
  getArea : function () {
    return triAngle.width * triAngle.height / 2;
  }
}

// 메소드 실습
let myVoca = {
  addVoca : function(word, meaning) {
    myVoca[word] = meaning;
  },
  deleteVoca : function(string) {
    delete myVoca[string];
  },
  printVoca : function(string) {
    console.log(`"${string}"의 뜻은 "${myVoca[string]}"입니다.`)
  }
}

// for..in 객체 안에 있는 Property들을 가지고 반복적인 동작을 할 때 사용한다.

for (let k in codeit) {
  console.log(k);
  console.log(codeit[k]);
}

// 숫자형 프로퍼티 네임

let myObject = {
  300 : '정수',
  1.2 : '소수'
}
console.log(myObject['300']) // 대괄호로만 접근 가능함.

// 정수형 프로퍼티 네임 --> 정수형 프로퍼티 네임을 오름차순으로 먼저 정렬하고, 나머지 프로퍼티들은 추가한 순서대로 정렬하는 특징 있어서 잘 사용되지 않음.

// Date 객체 (내장 객체 중 하나)

let myDate = new Date(); // 객체를 만든 시간
let myDate = new Date('2017-02-22');
let myDate = new Date('2017-02-22T19:11:16');
let myDate = new Date(2017, 4, 22); // 4지만 0이 1월이기에 5월로 실제로 생성됨.

// Date.getTime()
let myDDate = new Date(2017, 4, 18, 19, 11, 16);
let today = new Date();

let timeDiff = myDate.getTime() - today.getTime();

console.log(timeDiff + '밀리초');
console.log(timeDiff / 1000 + '초');
console.log(timeDiff / 1000 / 60 + '분');
console.log(timeDiff / 1000 / 60 / 60 + '시간');

console.log(myDate.getFullYear());
console.log(myDate.getMonth()); // 실제보다 하나 적게 나옴.
console.log(myDate.getDate()); // 일자
console.log(myDate.getDay()); // 요일(0~6, 일월화수목금토)
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.getMilliseconds());


// 지금 이순간

let myDate = new Date();

console.log(Date.now() === myDate.getTime()); 

// Date 정보 수정

myDate.setFullYear(2002);
myDate.setMonth(6);
myDate.setDate(20);

// Date 객체의 형변환 

let myDate = new Date(2017, 4, 18);

console.log(Number(myDate)); // 타임스탬프 값이 나오기 때문에 사칙연산 가능하다.

let myDate1 = new Date(2017, 4, 18);
let myDate2 = new Date(2017, 4, 19);

timeDiff = myDate2 - myDate1

console.log(timeDiff + '밀리초');
console.log(timeDiff / 1000 + '초');
console.log(timeDiff / 1000 / 60 + '분');
console.log(timeDiff / 1000 / 60 / 60 + '시간');
console.log(timeDiff / 1000 / 60 / 60 / 24 + '일');