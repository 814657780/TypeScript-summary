"use strict";
// function fn(a:any):any{
//     return a;
// }
/**
 * 在定义函数或是类时，如果遇到类型不明确就可以使用泛型
 *
 *
 * */
// T类型就是传入的变量a的类型，传入什么类型，返回什么类型
function fn(a) {
    return a;
}
//  可以直接调用具有泛型的函数
fn(10); // 不指定泛型，TS可以自动对类型进行推断，不过有时候会推断不出来，所以会有下面这种方式
fn('hello'); // 指定泛型
// 可以指定多个泛型
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(123, 'hello');
// 也可以这样写
fn2(123, 'hello');
function fn3(a) {
    return a.length;
}
fn3('123');
