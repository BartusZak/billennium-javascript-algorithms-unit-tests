const buildFinalArray = (number) => {
  if (number % 2 === 1) {
    return [Math.floor(number / 2), Math.floor(number / 2)]
  } else {
    return [Math.floor(number / 2), Math.floor(number / 2) - 1]
  }
}

const addPerson = (array) => {
  let largestGap = array.pop();
  let newArray = [];
  let newSets = buildFinalArray(largestGap);

  newArray.push(newSets[0]);
  newArray.push(newSets[1]);

  newArray.sort((a, b) => {
    return a > b;
  })

  return newArray;
}

const compute = (stalls, people) => {
  if (stalls == people) return [0,0]
  let stallsTmp = [stalls];

  for (let i = 0; i < people - 1; i++) {
    stallsTmp = addPerson(stallsTmp);
  }

  return buildFinalArray(stallsTmp.pop());
}

exports.bathroomStalls = () => {
  const input = [
    [4, 2],
    [5, 2],
    [6, 2],
    [1000, 1000],
    [1000, 1]
  ];

  let output = [];

  const cases = input.length;

  for (let x = 0; x < cases; x++) {
    let singleCase = input[x];

    let answer = compute(singleCase[0], singleCase[1]);

    output.push(answer);
  }
  return output;
}