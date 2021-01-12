// 문제: https://programmers.co.kr/learn/courses/30/lessons/43165

function dfs(curr, idx, arr, target) {
  if (idx >= arr.length) {
    return curr === target ? 1 : 0;
  }
  const curr1 = curr + arr[idx];
  const curr2 = curr - arr[idx];
  return dfs(curr1, idx + 1, arr, target) + dfs(curr2, idx + 1, arr, target);
}
function solution(numbers, target) {
  return (
    dfs(+numbers[0], 1, numbers, target) + dfs(-numbers[0], 1, numbers, target)
  );
}
