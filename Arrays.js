let fruits = ['Apple',{name:'john'},true,function(){alert("hello")}];
console.log((fruits[1].name));

//pop: Extracts the Last Element of the Array and returns it

let names = ["Rohith","Sushanth","Prem","Chandana"];

console.log(names.pop());
console.log(names);
names.push('chota Packet');//push : Appends the element to the end of the array
console.log(names);
names.shift();//shit: Extracts the first element of the array and returns it
console.log(names);

names.push('omkar','chary');
names.unshift('Rohith','shivank');
console.log(names);


//Arrays
//finding the maximum value

// function MaximumValue(arr){
//     if(arr === 0) return null;

//     let max = arr[0];

//     for(let i=0 ; i < arr.length;i++){
//         if(arr[i]>max){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// const scores = [10,2,54,65,13,24,92];
// console.log(MaximumValue(scores));

//finding the least value 

// function MinimumValue(arr){
//     if(arr === 0) return null;

//     let min = arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<min){
//             min = arr[i];
//         }
//     }
//     return min;
// }

// const scores = [10,2,54,65,13,24,92];
// console.log(MinimumValue(scores));

//DUPLICATE ARRAy

// function DuplicateArray(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]===arr[j]){
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// const scores = [10,1,2,4,2,4,2,55,];
// console.log(DuplicateArray(scores));

// const age = [1,2,3,4,5,6,7];
// console.log(DuplicateArray(age));


// Three distinct maximum numbers in array

// var Distinctarray = function(nums){
//     let firstMax = null;
//     let secondMax = null;
//     let thirdMax = null;

//     for(let i=0;i<nums.length;i++){
//         let current = nums[i];

//         if(current === firstMax || current === secondMax || current === thirdMax){
//             continue;
//         };
//         if(firstMax === null || current > firstMax){
//             thirdMax = secondMax;
//             secondMax = firstMax;
//             firstMax = current;
//         }
//         else if(secondMax === null || current > secondMax){
//             thirdMax = secondMax;
//             secondMax = current;
//         }
//         else if(thirdMax === null || current > thirdMax){
//             thirdMax = current;
//         }
//     }
//     return thirdMax !== null ? thirdMax : firstMax;

// }
// const scores = [1,2,3,4];
// console.log(Distinctarray(scores));

//TWO POINTER CODE

function compressor(arr){
    let write = 0;
    for(read = 0;read<arr.length;read++){
        if(arr[read]==="ERROR"){
           [arr[write],arr[read]]=[arr[read],arr[write]];
           write ++;
        }
    }
    return arr;
}
const data = ["ERROR","DATA","DATA","ERROR","ERROR","ERROR","DATA"];
console.log(compressor(data));