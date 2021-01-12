// 문제: https://programmers.co.kr/learn/courses/30/lessons/60057

function solution(s) {
  let answer = s.length;
  for (let step = 1; step <= Math.ceil(s.length / 2); step++) {
    const repeat = {};
    let preStr = '';
    let resStr = '';
    for (let i = 0; i <= s.length; i += step) {
      const str = s.substr(i, step);
      if (preStr === str) {
        repeat[str] = repeat[str] === undefined ? 2 : repeat[str] + 1;
      } else {
        resStr +=
          repeat[preStr] && repeat[preStr] >= 2
            ? repeat[preStr] + preStr
            : preStr;
        delete repeat[preStr];
        if (str.length < step) resStr += str;
      }
      preStr = str;
    }
    //console.log(repeat, resStr);
    if (resStr.length < answer) answer = resStr.length;
  }
  return answer;
}
