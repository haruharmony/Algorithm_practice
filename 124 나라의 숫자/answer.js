// 문제: https://programmers.co.kr/learn/courses/30/lessons/12899

function solution(n) {
  const res = [];
  let nanum = n;
  while (nanum) {
    let namuge = nanum % 3;
    nanum = Math.floor(nanum / 3);
    if (namuge === 0) {
      namuge = 4;
      nanum--;
    }
    res.push(namuge);
  }
  return res.reverse().join('');
}
