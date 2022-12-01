const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'data.txt'), 'utf8');

const grouped = data.split('\n').reduce((acc, line) => {
  if (!line) {
    return acc.concat([0]);
  } else {
    const calories = parseInt(line);
    acc[acc.length - 1] += calories;
    return acc;
  }
}, [0])

const mostCalories = grouped.reduce((acc, calories) => {
  if (calories > acc) {
    return calories;
  } else {
    return acc;
  }
} , 0);

// Part one
console.log(mostCalories);

const sorted = grouped.sort((a, b) => b - a);

const topThree = sorted.slice(0, 3);

const total = topThree.reduce((acc, calories) => acc + calories, 0);

// Part two
console.log(total);