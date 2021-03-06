// 声明一个变量a，同时指定它的类型为number
let a: number;

// a的类型设置为number，在以后的使用过程中a的值只能是数字
a = 10;
a = 33;
// a = "hello"; // 此行代码会报错，因为变量a的类型是number，不能赋值字符串

let b:string;
b = 'hello';
// b = 123;

// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测。
let c = true;  // 赋值的时候已经确定类型（第一次赋值的时候自动赋值类型），那么在后面再赋值的时候就不能赋值其他类型了，会报错
//  c = '123';

// js中的函数是不考虑参数的类型和个数的
// function sum(a,b){
//    return a + b;
// }
// console.log(sum(123,456))  // 579
// console.log(sum(123,'456'))  // '123456'

// 指定参数的类型和返回值得类型
function sum(a:number,b:number):number{
    return a + b;
}
sum(123,456) // 579

