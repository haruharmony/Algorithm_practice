// 문제: https://programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
  let orgLength = priorities.length;
  while (priorities.length > 0) {
    let first = priorities.shift();
    let max = Math.max(...priorities);
    if (max > first) {
      priorities.push(first);
      location = location === 0 ? priorities.length - 1 : location - 1;
    } else {
      if (location === 0) return orgLength - priorities.length;
      location--;
    }
  }
}
