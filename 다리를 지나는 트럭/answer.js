// 문제: https://programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
  const crossing = [];
  const done = [];
  const weightsLength = truck_weights.length;
  let time = 0;
  while (done.length < weightsLength) {
    if (crossing.length !== 0) {
      for (let i = 0; i < crossing.length; i++) crossing[i].distance += 1;
      if (crossing[0].distance >= bridge_length) done.push(crossing.shift());
    }
    let crossingWeight =
      crossing.length === 0
        ? 0
        : crossing.reduce((acc, cur) => acc + cur.truck_weight, 0);
    if (crossingWeight + truck_weights[0] <= weight) {
      crossing.push({
        truck_weight: truck_weights.shift(),
        distance: 0,
      });
    }
    time += 1;
  }
  return time;
}
