//object in typescript

// let person:{name:string, age: number, gender:string ,children:{name: string,age:number}}={
// name:"Ali",
// age:35,
// gender:"male",
// children:{
//     name:"Mustafa",
//     age:15
// }};
// console.log(person);

//type alias

// type users={
//     name:string,
//     age: number,
//     gender:string,
//     children:{
//         name: string,
//         age:number
//  }
//  occupation:string
// }
//  let user1:users={
//     name:"Ali",
//     age:35,
//     gender:"male",
//     children:{
//         name:"Mustafa",
//         age:15
//     },
//     occupation:"bussiness man"
// };
//     let user2:users={
//         name:"Zahid",
//         age:35,
//         gender:"male",
//         children:{
//             name:"Mustafa",
//             age:15
//         },
//     occupation:"student"
// };
        
// //type literal

// let trafficlight: "red" | "yellow" | "green";
// trafficlight = "red";
// trafficlight = "yellow";
// trafficlight = "green";

// console.log(trafficlight);



//type union
// let mixedBag : string | number
// mixedBag = "sunscreen";
// mixedBag = 30;
// console.log(mixedBag);


// //type intersection

// type student = {
//     name:string,
//     rollNumber:number,
//     fatherName : string
// };
// type teacher = {
//     name : string,
//     exp : number
// };
// let both : student & teacher = {
//     name:"Zahid",
//     rollNumber:567,
//     exp:10,
//     fatherName: "Akbar"

// };
// console.log(both.exp);
// console.log(both.fatherName);



// Arrays

// //console.log(fruits);
// console.log(fruits.length);

// //push element   (add element in the last)
// fruits.push("Grapes");      
// console.log(fruits);

// //pop element    (delete element from last)
// let popElement = fruits.pop();
// console.log(popElement);
// console.log(fruits)


//shift method        (delete array from start)
// let a =fruits.shift();
// console.log(a)
// console.log(fruits);

//unshift method    (add element to start of array)
// let b = fruits.unshift("pineapple");
// console.log(b)
// console.log(fruits);


//slice method      (it copy slice arrays but does not changes the original array)

// let slice = fruits.slice(1,2);
// console.log(slice);
// console.log(fruits);

//splice method:    (insert and deletes elements and changes the original array)
// fruits.splice(2,3,"kiwi","guava");
// console.log("after splice",fruits);


//tupple array              (it use only fixed values)

// let fruitstuple:[string,string,number,string] = ["apple","Mango",67,"Orange"];
// console.log(fruitstuple);
