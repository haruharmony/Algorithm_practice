// 문제: https://programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  const arr = s.split(' ').map((e) => +e);
  return Math.min.apply(null, arr) + ' ' + Math.max.apply(null, arr);
}
