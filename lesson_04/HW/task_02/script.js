// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

function modifyArray(arr) {
    const index4 = arr.indexOf(4);
    const index5 = arr.indexOf(5);
    if (index4 > -1) {
        arr.splice(index4, 1);
    }
    if (index5 > -1) {
        arr.splice(index5, 1);
    }
    return arr;
}

let originalArray = [1, 2, 3, 4, 5, 6, 7];
let modifiedArray = modifyArray(originalArray);
console.log(modifiedArray);
