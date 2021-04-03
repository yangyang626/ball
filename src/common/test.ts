// let arr = [3,4,5,6,7,8,9];
// const result : [number, number][] = []
// arr.forEach((item, index) => {
//     if (index < arr.length - 1) {
//         result.push([item, arr[index + 1]])
//     }
// })
// console.log(result);

class Test {
    text: string = 'text';
}

let inst = new Test();
console.log(inst instanceof Test);

let obj = {};
let arr : any = [];
console.log(typeof obj, typeof arr);
console.log(obj instanceof Object, arr instanceof Array);
