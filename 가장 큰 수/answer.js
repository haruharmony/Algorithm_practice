// 문제: https://programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
  var answer = numbers
    .sort((a, b) => {
      if ('' + a + ('' + b) > '' + b + ('' + a)) {
        return -1;
      } else {
        return 1;
      }
    })
    .join('');
  return answer[0] === '0' ? '0' : answer;
}
