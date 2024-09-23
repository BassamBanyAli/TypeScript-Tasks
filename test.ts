
//1 first task

  let num:number =4;
  if(num%2==0){
    console.log("the number is even number");
  }
    else
    console.log("the number is odd number");

    //2 second task

    let averagePrice:number=20;
    let array:number[]=[5,10,15,18,20,22,25,30];
    console.log("the higher prices are");
    array.forEach(element => {
        
        if(element>=averagePrice){
            console.log(element);
        }
    });
        console.log("the lower prices are");
    array.forEach(element => {
        if(element<averagePrice){
            console.log(element);
        }
    });

    //3 third task

    let array1:{name:string;age:number;isAdmin:boolean;}[]=[
        {
            name:"bassam",
            age:24,
            isAdmin:true,

        },
        {
            name:"ahmad",
            age:30,
            isAdmin:false
        },
        {
            name:"mohammad",
            age:40,
            isAdmin:true
        }
    ];
    let number1:number=0;
    array1.forEach(element => {
        if(element.age>number1&&element.isAdmin==true){
            number1=element.age;
        }
    });
    array1.forEach(element => {
        if(number1==element.age){
            console.log(element.name);
        }
    });




    
    
  
  