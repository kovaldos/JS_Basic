// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
//
// x
// xx
// xxx
// xxxx
// xxxxx

function printTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let str = "";
        for (let j = 1; j <= i; j++) {
            str += "x";
        }
        console.log(str);
    }
}

printTriangle(20);

