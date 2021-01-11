// 배열 (Array) Property Name보다는 순서가 더 중요한 경우 배열을 씀

let courseRanking = [ // 중괄호 대신 대괄호로 함, 안에 있는 것들은 요소(elements)라고 부름.
  'Javascript',
  'Git',
  'Computer',
  'Python'
];

// indexing (0~ ...)
console.log(courseRanking[2 + 1]);

// 세트 메뉴 묶음
let menus = ['짜장면', '짬뽕', '탕수육'];

//배열
let members = ['쿤갈레', 'Zerrard66', '우리생각해써']

console.log(members.length);
console.log(memebers['length']);
console.log(members[members.length - 1]);

members[5] = 'NiceCodeit';
console.log(members[5]);
delete members[4];

//배열의 메소드 (Array's Method)
let members = ['쿤갈레', 'Zerrard66', '우리생각해써', '흙토끼', 'EndMiracle'];
console.log(memebers);

// splice(startIndex, deleteCount, 추가item)
members.splice(1); // 1번 이후로는 다 지움.
members.splice(1, 2); // 1번 이후로 2개 지움.
members.splice(1, 1); // 1번 이후로 1개 지움.

members.splice(1, 1, 'Nicecodeit', 'HiCodeit'); //제라드 이후의 순서가 밀리게 됨.
members.splice(1, 0, 'Hololo'); // 아무것도 삭제되지 않음.

// 배열의 첫 요소를 삭제: shift()
members.shift();

// 배열의 마지막 요소를 삭제, pop()
members.pop();

// 배열의 첫 요소로 값 추가 : unshift(value)
members.unshift('NiceCodeit');

// 배열의 마지막 요소로 값 추가 : push(value)
members.push('Hicodeit');

// 배열에서 특정 값 찾기(indexOf / lastIndexof)
let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
console.log(brands.indexOf('Kakao'));
console.log(brands.indexOf('Daum')); // 없으면 -1 반환

console.log(brands.lastIndexOf('Kakao')) // 마지막 요소를 1로 놓고 그때부터 반환

// 배열에서 특정 값이 있는지 확인하기 (includes)
console.log(brands.includes('Kakao'));

// 배열 뒤집기(reverse)
brands.reverse();
console.log(brands);

//for...of
let influencer = ['suwonlog', 'small.tiger', 'Minam.ludens', 'cu_convenience24']
for (let element of influencer) {
  console.log(element);
}

for (let index in influencer) {
  console.log(influencer[index]);
}

// 다차원 배열 (multidimensional array)
let twoDimensional = [[1, 2], [3, 4]];

console.log(twoDimensional[0][1]);


