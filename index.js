// 'use strict'
// TypeError
// Возникает при попытке выполнить операцию на значении неправильного типа

// let str = 'str'
// str()
// let obj = {}
// obj.map()
// let num = 24
// num.toUpperCase()

// ReferenceError
// Возникает когда код ссылается на несуществующую или необъявленную переменную

// console.log(age);
// let age = 32

// SyntaxError
// Возникает при синтаксической ошибке в коде

// console.log(age);

// const car
// {]
// const foo = ;

// RangeError
// Возникает когда значение передеется за пределы допустимого диапазона

// let arr = new Array(-1)

// EvalError
// Возникает в функциях eval

// eval('let home = true; console.log(home); home()')

// Error

// let er = new Error('CUSTOM ERROR')
// console.log(er);

// СИНТАКСИС

try {
    // Наш код

} catch (error) {
    // обработчку ошибки 
}


// Пример 1
// try {
//     console.log('try')
// } catch (e) {
//     console.log('catch')
// }

// Пример 2
// try {
//     console.log('try Пример 2')
//     console.log(notVariable);
//     console.log('этот код не выполнится!');
// } catch (e) {
//     console.log(e);
//     console.log('catch Пример 2')
// }


// Пример 3
// try {
//     console.log('try Пример 3')
//     let str = 'str'
//     str()
// } catch (e) {
//     console.log(e);
//     console.log('catch Пример 3')
// }

// Пример 4
// try {
//     console.log('try Пример 4')
//     const arr = [1, 2, 3, 4, 5]
//     const result = arr.map((i) => {
//         console.log(i);
//         return i()
//     })
//     console.log(result);
// } catch (e) {
//     console.log('catch Пример 4')

// }


// Пример 4.1
// try {
//     console.log('try Пример 4.1')
//     const arr = [1, 2, 3, 4, 5]
//     const result = arr.map((i) => {
//         try {
//             console.log(i);
//             return i()
//         } catch (e) {
//             console.log('Возникла ошибка в map');
//         }
//     })
//     console.log(result);
// } catch (e) {
//     console.log('catch Пример 4.1')
// }


// Пример 5
// try {
//     console.log('try Пример 5')


//     var @l_123 = 123
// } catch (e) {
//     console.log('catch Пример 5')
// }



//Пример 6 
// try catch - работает синхронно

// try {
//     console.log('try Пример 6')
//     setTimeout(() => {
//         let str = 'str'
//         str()
//     }, 1000)

// } catch (e) {
//     console.log('catch Пример 6')
// }

// Пример 7
// setTimeout(() => {
//     try {
//         let str = 'str'
//         str()
//     } catch (e) {
//         console.log('catch Пример 7')

//     }

// }, 1000)

// // Пример 8
// try {
//     adadawda
// } catch (e) {
//     console.log(e);
//     console.log('e.name', e.name);
//     console.log('e.message', e.message);
//     console.log('e.stack', e.stack);
// }

// Пример 9
// try {
//     adadawda
// } catch {
//     console.log('catch Пример 9')

// }

// Пример 10
// try {
//     const json = '{"age": 32}';
//     // const json2 = "{'age': 32}";


//     const parseJson = JSON.parse(json)

//     if (parseJson.name) {
//         // выполни код
//     } else {
//         // дай пользователю понять что, что-то пошло не так
//         throw new Error('Наше собственное сообщение об ошибке. необходимо заполнить поле name')

//     }

//     console.log(parseJson);
// } catch (e) {
//     console.log(e.name);
//     console.log(e.message);
//     console.log('catch Пример 10')

// } finally {
//     console.log('выполнение кода в любом случае');

// }


// Пример 11 

// function foo() {
//     try {
//         if (confirm('Выбросить ошибку?')) {
//             noFoo()
//         } else {
//             console.log('try code');
//             return 'TRY - second'
//         }
//     } catch (e) {
//         console.log(e);

//     } finally {
//         console.log('finaly with return - first');

//     }
// }

// console.log(foo());

// Пример 12 
// function funcWithOutCatch() {


//     try {
//         // some code
//     } finally {
//         throw new Error('TEXT FOR ERROR')
//     }
// }


// window.onerror = function(message, url, line, col, error) {
//     console.log('Ошибочка');
//     console.log('message', message);
//     console.log('url', url);
//     console.log('line', line);
//     console.log('col', col);
//     console.log('error', error);



// }

// funcWithOutCatch()




class CustomEror extends Error {
    constructor(mes) {
        super(mes)
            // this.name = 'CustomEror'
        this.name = this.constructor.name
        this.stack = (new Error()).stack
        this.somethingDo()
    }


    somethingDo() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
    }
}


try {
    throw new CustomEror('Привет как дела? Исправь ошибку')

} catch (e) {
    console.log(e);
    console.log(e.name);
    console.log(e.message);
    console.log(e.stack);


}


console.log('Скрип дошел до конца');