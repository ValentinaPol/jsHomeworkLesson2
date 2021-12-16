//1. Напишите функцию, которая принимает массив целых чисел и строк. Преобразуйте целые числа в строки и верните новый массив.
//convertElements([1, 2, "x", "z"]) ➞ ["1", "2", "x", "z"]
//convertElements(["pdf", 123, "def", 456]) ➞ ["pdf", "123", "def", "456"]
//convertElements([1, 2, 3, 17, 24, 3, "a", "123b"]) ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]
//convertElements([]) ➞ []
 


function convertElements(arr){
    var arrResult = [];
    for (var i = 0; i < arr.length; i++) {
        arrResult.push(String(arr[i]));
    }
    return arrResult;
}

console.log(convertElements([1, 2, "x", "z"]));
console.log(convertElements(["pdf", 123, "def", 456]));
console.log(convertElements([1, 2, 3, 17, 24, 3, "a", "123b"]));
console.log(convertElements([]));




// 2. Создайте функцию, которая возвращает количество " true” значений в массиве.
//numericTrue([true, false, false, true, false]) ➞ 2
//numericTrue ([false, false, false, false]) ➞ 0
//numericTrue ([]) ➞ 0
//Вернуть 0, если дан пустой массив.
//Все элементы массива имеют тип bool (true или false).

function numericTrue(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === true){
            sum++;
        }
    }
    return sum; 
}

console.log(numericTrue([true, false, false, true, false]));
console.log(numericTrue([false, false, false, false]));
console.log(numericTrue([]));



// 3. Вернуть наибольшее и наименьшее числа
//Создайте функцию, которая принимает массив чисел, и возвращает наибольшее и наименьшее число.
//highLow([1, 2, 3, 4, 5]) ➞ 5, 1
//highLow([1, 2, -3, 4, 5]) ➞ 5. -3
//highLow([1, 9, 3, 4, –5]) ➞ 9, -5
//highLow([13]) ➞ 13, 13


function highLow(arr){
    var result = {max: arr[0], min: arr[0]}
    for (var i = 1; i < arr.length; i++){
        if (result.max < arr[i]){
            result.max = arr[i];
        } 
        if (result.min > arr[i]){
            result.min = arr[i];
        } 
    }
    return result;
}

console.log (highLow([1, 2, 3, 4, 5]));
console.log (highLow([1, 2, -3, 4, 5]));
console.log (highLow([1, 9, 3, 4, -5]));
console.log (highLow([13]));




 
