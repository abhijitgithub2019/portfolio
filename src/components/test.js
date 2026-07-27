
// let person = {
// firstName: "Ajeet",
// lastName: "kumar",
// address: "Bangalore",
// pinCode: 560034,
// pinCodeLen: 123
// }

// // output= {
// //     first_name: "Ajeet",
// //     last_name: "Kumar",
// //     address: "Bangalore”,
// //pin_code_len : 123
// //   };
// function getSplitWords(p) {
//     let strArr = p.split("");
//     let str ="";
//     for(let i =0; i < strArr.length; i++) {
//         if(strArr[i] === strArr[i].toUpperCase()) {
//             str+='_'+ strArr[i].toLowerCase();
//         } else {
//             str+= strArr[i];
//         }
//     }
//     return str;
// }

// function getCamelCase(person) {
//     let obj ={};
//     for(let p in person ) {
//         let p1 = getSplitWords(p);
//         console.log(p1);
//         obj[p1] = person[p];
//     }
//     return obj;
// }

// console.log(getCamelCase(person));

//let InputArray = [1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]];
//output = [1,2,3,4,5,6,7,8,9]

// const  getflat = (inputArray)=>{
//     let flatArr = [];
//     for(const item of inputArray) {
//         if(Array.isArray(item)) {
//             flatArr = flatArr.concat(getflat(item));
//         } else {
//             flatArr.push(item);
//         }
//     }
//     return flatArr;
// }

// console.log(getflat(InputArray));

//const arr = [1, 2, 3, 4, 5]
//[1,4,9,16,25];


// Array.prototype.myMap = function(cb){
//     let arr = this;
//     let newArr =[];
//     for(let i =0; i < arr.length; i++) {
//         newArr.push(cb(arr[i]))
//     }
//     return newArr;
// }

// let ar1 = arr.myMap((item)=>{
//     return item*item;
// });

// console.log(ar1);

//let input = [1,2,3,4,5,6,7,8], target=2 ;

//output=[1,2,3,4,5,6,8]

// function getEliminatedItem(arr, t) {
//     if(t > arr.length || t < 1) {
//         return arr;
//     }
//     let len = arr.length; // 8-2
//     let d = len-t;
//     let newArr = arr.filter((item, i) => {
//         return i!==d;
//     })
//     return newArr;
// }

// console.log(getEliminatedItem(input, 7));

let arr  =[1,2,2,2,3,4,4,5,6,6,6,6], target = 3;
// arr =[1,3]

function getIndexofOc(ar, t) {
    let start = -1, end = -1;
    for(let i =0; i< ar.length; i++) {
        if(ar[i] === t && start === -1) {
            start = i;
        } else if ((ar[i] !== t || i === arr.length-1)  && end === -1 && start!==-1 ) {
            if(i === arr.length-1) {
                end = i;
            } else {
                end = i-1;
            }
          
        }
    }
    return [start,end];
}

console.log(getIndexofOc(arr, target));