// 문제: https://programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  const clothesCnts = {};
  clothes.forEach((e) => {
    clothesCnts[e[1]] =
      clothesCnts[e[1]] === undefined ? 1 : clothesCnts[e[1]] + 1;
  });
  const cnts = Object.keys(clothesCnts).map((key) => {
    return clothesCnts[key] + 1;
  });
  let res = cnts.reduce((acc, cur) => acc * cur);
  return res - 1;
}
