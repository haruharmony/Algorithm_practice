// 문제: https://programmers.co.kr/learn/courses/30/lessons/17680

function solution(cacheSize, cities) {
  const arr = [];
  let res = 0;
  const citiesUpperStream = cities.map((e) => e.toUpperCase());
  citiesUpperStream.forEach((ele) => {
    const findIdx = arr.findIndex((findEle) => findEle === ele);
    if (findIdx > -1) {
      res += 1;
      arr.splice(findIdx, 1);
    } else {
      if (arr.length >= cacheSize) arr.shift();
      res += 5;
    }
    if (cacheSize !== 0) arr.push(ele);
  });
  return res;
}
