// 문제: https://programmers.co.kr/learn/courses/30/lessons/60058

function solution(p) {
  if (p.length === 0) return '';
  const temp = [];
  const tempCnt = {
    '(': 0,
    ')': 0,
  };
  let breakIndx = null;
  for (let i = 0; i < p.length; i++) {
    tempCnt[p[i]] += 1;
    if (temp[temp.length - 1] === '(' && p[i] === ')') temp.pop();
    else temp.push(p[i]);
    if (tempCnt['('] === tempCnt[')']) {
      breakIndx = i + 1;
      break;
    }
  }
  if (temp.length === 0) {
    return p.substring(0, breakIndx) + solution(p.substring(breakIndx));
  } else {
    let v = '(' + solution(p.substring(breakIndx)) + ')';
    let u = p.substring(0, breakIndx);
    u = u.substring(1, u.length - 2 > 1 ? u.length - 1 : 1);
    u = u.replace(/\(/g, '!');
    u = u.replace(/\)/g, '(');
    u = u.replace(/\!/g, ')');
    return v + u;
  }
}
