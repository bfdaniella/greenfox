export{}
let numbers = [3, 4, 5, 6, 7]
let total = 0;
for (let i in numbers) {
  total += numbers[i];
}

console.log(total)