//Codewars.  Задача 1. Пройдитесь пешком десять минут

function isValidWalk(walk) {
        if(walk.length !== 10) {
        return false;
        }
        
        let verticalCount = 0;
        let horizontalCount = 0;
        
        for (let i = 0; i<walk.length; i++) {
        if (walk[i] === 'n') {
            verticalCount++
        } else if (walk[i] === 's') {
            verticalCount--;
        } else if (walk[i] === 'e') {
            horizontalCount++;
        } else if (walk[i] === 'w') {
            horizontalCount--;
        }
        }
        return verticalCount === 0 && horizontalCount === 0;
    }

//Codewars.  Задача с массивами. Подсчет овец

    let arrayOfSheep = [true,  true,  true,  false,
        true,  true,  true,  true ,
        true,  false, true,  false,
        true,  false, false, true ,
        true,  true,  true,  true ,
        false, false, true,  true ];

    // function countSheeps(arrayOfSheep) {
    //     let count = 0;
    //     for (let i = 0; i < arrayOfSheep.length; i++) {
    //         if(arrayOfSheep[i] !== null && arrayOfSheep[i] !== undefined) {
    //             if (arrayOfSheep[i] === true) {
    //                 count++;
    //             }
    //         }             
    //     }
    //     return count;
    //     }

    
    function countSheeps(arrayOfSheep) {
        return arrayOfSheep.filter(Boolean).length;
    }
    console.log(countSheeps(arrayOfSheep));

// Функция использует метод `filter` для создания нового массива, в котором присутствуют только элементы, соответствующие условию `Boolean`. Затем функция возвращает длину этого нового массива с использованием метода `length`. 
// В общем случае, функция `countSheeps` считает количество элементов в массиве, удовлетворяющих условию `true`. В данном случае, функция подсчитывает количество истинных значений, то есть количество `true` в исходном массиве `arrayOfSheep`.


// Codewars. Преобразовать число в перевернутый массив цифр

function digitize(n) {
    const numArr = n.toString().split('').reverse(); //преобразовали в строковый массив и перевернули
    return numArr.map(Number); //обратно из строк в числа
}
console.log(digitize(12345));

// метод `split()` можно применять к строкам, но не к числам. В данном случае, переменная `n` является числом, и попытка применить метод `split('')` к ней вызывает ошибку. 
// Для исправления этой ошибки, можно преобразовать число `n` в строку перед применением метода `split('')`. Например, можно использовать метод `toString()`

//Альтернативное решение других участников
function digitize(n) {
    return String(n).split('').map(Number).reverse();
}