// 문제: https://programmers.co.kr/learn/courses/30/lessons/17677

function solution(str1, str2) {
  const str1Arr = Array.from(str1.toUpperCase());
  const str2Arr = Array.from(str2.toUpperCase());
  const a = {};
  const b = {};
  const pattern_eng = /[a-zA-Z]/;
  str1Arr.forEach((e, idx, arr) => {
    if (idx === 0) return;
    if (pattern_eng.test(arr[idx - 1]) && pattern_eng.test(arr[idx])) {
      a[arr[idx - 1] + arr[idx]] = a[arr[idx - 1] + arr[idx]]
        ? a[arr[idx - 1] + arr[idx]] + 1
        : 1;
    }
  });
  str2Arr.forEach((e, idx, arr) => {
    if (idx === 0) return;
    if (pattern_eng.test(arr[idx - 1]) && pattern_eng.test(arr[idx])) {
      b[arr[idx - 1] + arr[idx]] = b[arr[idx - 1] + arr[idx]]
        ? b[arr[idx - 1] + arr[idx]] + 1
        : 1;
    }
  });
  //console.log(a, b);
  //const unionArr = Object.values({...a, ...b});
  const bb = [];
  const bArr = Object.keys({ ...a, ...b });
  let ares = 0;
  if (bArr.length !== 0) {
    console.log(bArr);
    bArr.forEach((e) => {
      if (a[e] === undefined) {
        bb.push(b[e]);
      } else if (b[e] === undefined) {
        bb.push(a[e]);
      } else {
        bb.push(a[e] < b[e] ? b[e] : a[e]);
      }
    });
    if (bb.length !== 0) {
      console.log(bb);
      ares = bb.reduce((pre, cur) => pre + cur);
    }
  }

  const cc = [];
  const aArr = Object.keys(a);
  let bres = 0;
  if (aArr.length !== 0) {
    Object.keys(a).forEach((e) => {
      if (a[e] && b[e]) {
        cc.push(a[e] > b[e] ? b[e] : a[e]);
      }
    });
    if (cc.length !== 0) {
      bres = cc.reduce((pre, cur) => pre + cur);
    }
  }

  const haha =
    bres === 0 && ares === 0 ? 65536 : Math.floor((bres / ares) * 65536);
  return haha;
}
