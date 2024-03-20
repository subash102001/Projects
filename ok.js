// let username ="java";
// let letter = username.charAt(0).toUpperCase();
// console.log(letter);


// -- if and else

// let age = 21;
// if (age>=18) {
//     console.log("Ok you are major!");
// }else{
//     console.log("oops! you are minor!");
// }


// -- else if

// let age = 12;
// if (age>=18) {
//     console.log("you are an adult!");
// }else if(age<=0){
//     console.log("you are not born dude");
// }else if(age>=65){
//     console.log("you are senior");
// }else{
//     console.log("you are a child dude")
// }


// -- online

// let online = true;
// if (online) {
//     console.log("you are online");
// } else {
//     console.log("you are offline");
// }

// --checkbox


// document.getElementById("myButton").onclick = function () {
//     if(document.getElementById ("myCheckBox").checked) {
//         console.log("you are Subscribed");
//     }else {
//         console.log("you are not subscribed");
//     }
    
// }

// document.getElementById("myButton").onclick = function() {
//     const myCheckBox = document.getElementById("myCheckBox");
//     const visaBtn = document.getElementById("visaBtn");
//     const mastercardBtn = document.getElementById("mastercardBtn");
//     const rupay = document.getElementById("rupayBtn");
// }
// if(myCheckBox.checked){
//     console.log("you are subscribed");
// }else{
//     console.log("you are not subscribed");
// }
// if(visaBtn.checked){
//     console.log("you are paying with visa");
// }else if(mastercardBtn.checked){
//     console.log ("you are paying with mastercard");
// }else if(rupayBtn.checked){
//     console.log("you are paying with rupay");
// }else{
//     console.log("you must select a payment type!");
// }

// --- switches in js

// let grade = "D";
// switch (grade) {
//     case "A":
//         console.log("you did great");
//         break;
//     case "B":
//         console.log("you did okeish");
//         break;
//     case "C":
//         console.log("you did moderate");
//         break;
//     case "D":
//         console.log("you did average");
//         break;
//     default:
//         console.log("please enter valid grade bro");            
// }



// let grade = -15;
// switch (true) {
//     case grade>=90:
//         console.log("good");
//         break;
//     case grade>=80:
//         console.log("okee");
//         break;
//     case grade>=70:
//         console.log("average");
//         break;    
//     default :
//     console.log("enter grade");  
// }


// let temp = 15;
// if (!(temp>0)) {
//     console.log("its cold outsid");
// } else {
//     console.log("its warm inside");
// }



// let i =1; //initilization
// while (i<=50) {
//     console.log(i);
//     i= i+1;
// }



// let i=10;

// while(i>0)
// {
//     console.log(i);
//     i--;
// }





// for (let i=1 ; i<=1;i++) {
//     console.log(i);
//     document.write(i,"<br>");
// }
// for (let i=1 ; i<=1;i++) {
//     console.log(i);
//     document.write(i,"<br>");
// }
// for (let i=1 ; i<=1;i++) {
//     console.log(i);
//     document.write(i,"<br>");
// }
// for (let i=1 ; i<=1;i++) {
//     console.log(i);
//     document.write(i,"<br>");
// }
// for (let i =222222 ; i<=222222;i++) {
//     console.log(i);
//     document.write(i,"<br>");
// }


// // Task 2
// for (let i=1 ; i<=1;i++) {
//     console.log(i);
//     document.write(i,"<br>");
// }
// for (let i=2 ; i<=2;i++) {
//     console.log(i);
//     document.write(i,"<br>");
// }
// for (let i=1 ; i<=1;i++) {
//     console.log(i);
//     document.write(i,"<br>");
// }for (let i=2 ; i<=2;i++) {
//     console.log(i);
//     document.write(i,"<br>");
// }for (let i=1 ; i<=1;i++) {
//     console.log(i);
//     document.write(i,"<br>");
// }for (let i=2 ; i<=2;i++) {
//     console.log(i);
//     document.write(i,"<br>");
// }for (let i=1 ; i<=1;i++) {
//     console.log(i);
//     document.write(i,"<br>");
// }for (let i=2 ; i<=2;i++) {
//     console.log(i);
//     document.write(i,"<br>");
// }for (let i=1 ; i<=1;i++) {
//     console.log(i);
//     document.write(i,"<br>");
// }for (let i=2 ; i<=2;i++) {
//     console.log(i);
//     document.write(i,"<br>");
// }
// //Task 3
// for (let i=1 ; i<=1;i++) {
//     console.log(i);
//     document.write(i,"<br>");
// }for (let i=1 ; i<=1;i++) {
//     console.log(i);
//     document.write(i,"<br>");
// }for (let i=1 ; i<=1;i++) {
//     console.log(i);
//     document.write(i,"<br>");
// }for (let i=1 ; i<=1;i++) {
//     console.log(i);
//     document.write(i,"<br>");
// }for (let i=1 ; i<=1;i++) {
//     console.log(i);
//     document.write(i,"<br>");
// }for (let i=1 ; i<=1;i++) {
//     console.log(i);
//     document.write(i,"<br>");
// }for (let i=1 ; i<=1;i++) {
//     console.log(i);
//     document.write(i,"<br>");
// }for (let i=1 ; i<=1;i++) {
//     console.log(i);
//     document.write(i,"<br>");
// }for (let i=1 ; i<=1;i++) {
//     console.log(i);
//     document.write(i,"<br>");
// }for (let i=1 ; i<=1;i++) {
//     console.log(i);
//     document.write(i,"<br>");
// }

// let total = sum(2,3);
// displayConsole(total);
// displayDOM(total);
// function sum(x,y){
//     let result = x+y;
//     return result;
// }
// function displayConsole(output) {
//     console.log(output);
// }
// function displayDOM(output) {
//     document.getElementById("mylabel").innerHTML=output;
// }    

// sum (2,3,displayConsole);
// function sum(x,y,callBack) {
//     let result= x+y;
//     callBack(result);

// }
// function displayConsole(output) {
//     console.log(output);
// }
// function displayDOM(output) {
//     document.getElementById("mylabel").innerHTML=output;
// }  


// let students=["aswath","yamuna","deena"];
// students.forEach(capitalize);
// function capitalize(element,index,array){
//     array[index]=element[0].toUppercase()+element.Substring(1);
// }
// function print(element){
//     console.log(element);
// }
// let students=["aswath","yamuna","deena"];
// students.forEach(capitalize);
// students.forEach(print);



// let numbers=[1,2,3,4,5];
// let Squares=numbers.map(Square);
// Squares.forEach(print);
// function Square(element) {
//     return Math.pow(element,2);
// }
// function print(element){
//     console.log(element)
// }

// let numbers=[1,2,3,4,5];
// let cubes=numbers.map(cube);
// cubes.forEach(print);
// function cube(element) {
//     return Math.pow(element,3);
// }
// function print(element){
//     console.log(element);
// }

// greeting();
// function greeting() {
//     console.log("Hello students");
// }


// let count = 0;
// document.getElementById("increaseBtn").onclick=function(){
    
// }
// const percent =(x,y)=> x|y *100;
// console.log('${percent(90,100)}%');

// let count=0;
// const store =newMap([["book",50],["pen",25],["marker",15]["pencil",10]]);

// let shoppingCart=0;
// shoppingCart +=store.get("pen");
// console.log(shoppingCart);
// store.forEach((value,key)=>console.log('${key}${value}'))

// let number = 6;

// userName();

// function userName()
// {

//     displayUsername();
//     displayUserInbox();



//     function displayUsername()
//     {
//         console.log("Hello");
//     }

//     function displayUserInbox()
//     {
//         console.log(`Number = ${number}`);
//     }
// }

// const car = (
//     {
//     model:"Nexon",
//     color: "red",
//     price:200,}

//1.2.24
// class Animals {
//     alive = true;
//     eat(){
//         console.log(`This ${this.name}is eating`);
//     }
//     sleep(){
//         console.log(`This ${this.name}is sleeping`);
//     }

// }
// class Rabbit {
    
//     name = 'rabbit'
    
//     run(){
//         console.log(`This ${this.name}is running`);
//     }

// }

// class fish {
    
//     name = 'fish'
    
//     swim(){
//         console.log(`This ${this.name}is swimming`);
//     }
//     eat(){
//         console.log(`This ${this.name}is eating`);
//     }
//     sleep(){
//         console.log(`This ${this.name}is sleeping`);
//     }

// }

// const rabbit = new Rabbit();
// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.run();
// rabbit.sleep();


// const fish = new fish();
// console.log(fish.alive);
// fish.eat();
// fish.swim();
// fish.sleep();

// const parrot = new parrot();
// console.log(parrot.alive);
// parrot.eat();
// parrot.fly();
// parrot.sleep();

