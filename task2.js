// 1-Sum All Elements in an Array
var arr1 = [1, 2, 3, 4, 5, 6];
var sum = 0;
arr1.forEach(function (element) {
    sum += element;
});
console.log(sum);
//2-Check if All Elements in Array are Positive
var arr2 = [-1, 2, 4, 5];
arr2.forEach(function (element) {
    if (element < 0)
        console.log("not all number positive");
});
//3 Find the Longest Name in an Array
var arr3 = ["bassam", "f", "dd", "Bassama"];
var str = "";
arr3.forEach(function (element) {
    if (element.length > str.length)
        str = element;
});
console.log(str);
//4 Count Occurrences of a Character in a String
var arr4 = "bassam";
var character = 'b';
var count = 0;
arr4.split('').forEach(function (element) {
    if (element === character) {
        count++;
    }
});
console.log(count);
//5 Identify Prime Numbers in an Array
var arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr5.forEach(function (element) {
    arr5 = arr5.filter(function (element) { return element % 2 !== 0; });
});
console.log(arr5);
