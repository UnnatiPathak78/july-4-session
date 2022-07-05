let calculator = {
    "name": "My Calculator",
    "sum": function(a, b){
        let s = a + b;
        return s;
    },
    "sub": function(num1, num2){
        let num = num2- num1;
        return num;
    },  
    "multiply": function(n1, n2){
        let n = n1 * n2;
        return n;
    },
    "divide": function(number1, number2){
        let number = number1 / number2;
        return number;
    }
}

let sum_result = calculator.sum(22,34);
let sub_result = calculator.sub(34, 23);
let multiply_result = calculator.multiply(33,2);
let divide_result = calculator.divide(42,2);
console.log(sum_result,sub_result,multiply_result,divide_result);