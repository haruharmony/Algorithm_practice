// 문제: https://programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
  const oneCnt = n.toString(2).match(/1/g).length;
  while (n++) {
    if (oneCnt === n.toString(2).match(/1/g).length) break;
  }
  return n;
}
