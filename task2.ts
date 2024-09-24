// 1-Sum All Elements in an Array
let arr1:number[]=[1,2,3,4,5,6];
let sum:number=0;
arr1.forEach(element => {
    sum+=element;
});

console.log(sum);



//2-Check if All Elements in Array are Positive

let arr2:number[]=[-1,2,4,5];

arr2.forEach(element => {
    if(element<0)
        console.log("not all number positive");
    
});

//3 Find the Longest Name in an Array

let arr3:string[]=["bassam","f","dd","Bassama"];

let str:string="";
arr3.forEach(element => {

    if(element.length>str.length)
        str=element;
    
});

console.log(str);


//4 Count Occurrences of a Character in a String
let arr4: string = "bassam";
let character: string = 'b'; 
let count: number = 0;

arr4.split('').forEach(element => {
    if (element === character) {
        count++;
    }
});

console.log(count);


//5 Identify Prime Numbers in an Array


let arr5:number[]=[1,2,3,4,5,6,7,8,9];

arr5.forEach(element => {

        arr5 = arr5.filter(element => element % 2 !== 0);

    
});
console.log(arr5);
