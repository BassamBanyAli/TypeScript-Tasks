var person1 = {
    name: "John",
    hobbies: ["Reading", "Swimming"],
    greet: function () {
        console.log("Hello!");
    },
};
var person = {
    name: "bassam",
    age: 25
};
if (person.age > 18) {
    console.log("Adult");
}
else
    console.log("Minor");
var teacher = {
    name: "ahmad",
    objects: ["math", "science"],
};
teacher.objects.forEach(function (element) {
    console.log(element);
});
var arr6 = [
    {
        name: "bassam",
        price: 25,
        quantity: 30
    },
    {
        name: "mohammad",
        price: 50,
        quantity: 40
    }
];
arr6.forEach(function (Element) {
    if (Element.quantity > 5)
        Element.price += 0.1 * Element.price;
});
arr6.forEach(function (Element) {
    console.log(Element.price);
});
var device = {
    start: function () {
        console.log("callled");
    },
};
if (device.start) {
    console.log("called");
}
else
    console.log("default");
