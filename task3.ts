interface Person1 {
    name: string;
    age?: number;
    hobbies: string[]; 
    greet(): void;
  }
  
  const person1: Person1 = {
    name: "John",
    hobbies: ["Reading", "Swimming"],
    greet() {
      console.log("Hello!");
    },
  };



  //1-Task 1: Verify Interface Properties

  interface Person{

name:string;
age:number;

  }
  const person:Person={

    name:"bassam",
    age:25
  }

  if(person.age>18){
    console.log("Adult");
  }
  else
  console.log("Minor");
  

  //2-Task 2: Iterate Through an Array in an Interface

  interface Teacher{
    name:string;
    objects:string[];
  }


  const teacher:Teacher={
    name:"ahmad",
    objects:["math","science"],
  }

  teacher.objects.forEach(element => {
    console.log(element);
  });


  //3-Task 3: Modify Object in an Array of Interfaces

  interface product{
    name:string;
    price:number;
    quantity:number;
  }

  let arr6:product[]=[

    {
        name:"bassam",
        price:25,
        quantity:30
        
    },
    {
        name:"mohammad",
        price:50,
        quantity:40
        
    }
  ];

  arr6.forEach(Element=>{
if(Element.quantity>5)
Element.price+=0.1*Element.price;


  });

  arr6.forEach(Element=>{

console.log(Element.price);
    
    
      });

//4-Task 4 : Validate Optional Function in Interface with Default Behavior

interface obj{
    start?():void
    
}


const device:obj={
start() {
  console.log("callled");  
},
}

if(device.start){
    console.log("called");
}
    else
    console.log("default");



  