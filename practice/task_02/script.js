// 1.
const getSum = (num1, num2, num3) => +num1 + +num2 + +num3;

console.log(getSum(1, 2 , 3));

// 2.
let param1 = '1';
let param2 = 2;
let param3 = 3;

console.log(getSum(param1, param2, param3));

// 3.
function func(num = 5) {
  console.log(num * num);
}

func(2);
func(3);
func();
