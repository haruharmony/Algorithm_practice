// 문제: https://programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  let res = [];
  let dones = progresses.map((progress, idx) => {
    return Math.ceil((100 - progress) / speeds[idx]);
  });
  console.log(dones);
  while (dones.length > 0) {
    let first = dones.shift();
    let passCnt = dones.findIndex((e) => first < e);
    if (passCnt == -1) passCnt = dones.length;
    dones.splice(0, passCnt);
    res.push(passCnt + 1);
  }
  return res;
}
