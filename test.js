//1 first task
var num = 4;
if (num % 2 == 0) {
    console.log("the number is even number");
}
else
    console.log("the number is odd number");
//2 second task
var averagePrice = 20;
var array = [5, 10, 15, 18, 20, 22, 25, 30];
console.log("the higher prices are");
array.forEach(function (element) {
    if (element >= averagePrice) {
        console.log(element);
    }
});
console.log("the lower prices are");
array.forEach(function (element) {
    if (element < averagePrice) {
        console.log(element);
    }
});
//3 third task
var array1 = [
    {
        name: "bassam",
        age: 24,
        isAdmin: true,
    },
    {
        name: "ahmad",
        age: 30,
        isAdmin: false
    },
    {
        name: "mohammad",
        age: 40,
        isAdmin: true
    }
];
var number1 = 0;
array1.forEach(function (element) {
    if (element.age > number1 && element.isAdmin == true) {
        number1 = element.age;
    }
});
array1.forEach(function (element) {
    if (number1 == element.age) {
        console.log(element.name);
    }
});
