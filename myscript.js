// let toDay = [
//     "Sunday",
//     "Monday" ,
//     "Tuesday" ,
//     "Wednesday" ,
//     "Thursday" , 
//     "Friday",
//     "Saturday"
// ];
//  let toDate = new Date().getDay();
//  console.log( toDay[toDate]);
// console.table(toDay);

// function myFunction1(){
//     document.body.style = 'background:green';
//     myFunction2()
// }

// function myFunction2(){
//     let txt = document.getElementById('txt');
//     txt.textContent = 'Hello'
// }

// setTimeout(myFunction1 , 2000)

//arrow function

// let btn = document.getElementById('btn');

// let myFunction = ()=>{
//     document.body.style = 'background: red'
// }
// btn.onclick = myFunction;
// window.onload = myFunction
// btn.onclick = ()=>{
//     document.body.style = 'background: red'
// }

// function with parameters

// function testFunction(a,b){

//     console.log(a + b);
// }
// testFunction(200,100)
// testFunction(500,100)



// let myArry = [22,15,200,10,2,77,1,89];

// document.body.innerHTML = myArry.sort((x,y)=>{

//     return x - y
// })

// let fruits = ['apple','orange','mango','banana']

// fruits.forEach(myFunction)

// function myFunction(a,b){
//     document.body.innerHTML += b + ':' + a + ' <br> '
// }
           
// let loader = document.getElementById('preloader')
// function myFunction(){
//     loader.style ='display:none';
// }

// window.onload = myFunction;
// setInterval(myFunction,5000)

// JavaScript Operators

//Common Operators (Arithmetic Operators)
/*
+               add
-               subtracte
/               divide
*               multiplication
%               Modulus

*/

// let x = 5 , y = 14;

// console.log(y % x);

//Assignment Operators
/*
=           Assign
+=          Add and Assign
-=          subtract and assign
*=          multiply and assign
/=          divide and assign
%=          divide and assign modulus
*/

// let x = 10;
// console.log(x);
// let x = 20;
// x += 30;
// console.log(x);
// let x = 50;
// x -= 30;
// console.log(x);
// let x = 5;
// x *= 25;
// console.log(x);
// let x = 50;
// x /= 10;
// console.log(x);
// let x = 100;
// x %= 15;
// console.log(x);

//incrementing operators
/*
++          adding +1
--          subtract -1
*/

// Comparison operators
/*
<           small than
>           greater than
==          Equal value
===         Equal value and type
!=          not Equal value
!==         not Equal value or type
*/

// let x = 5;
// let y = '5';

// console.log(x !== y);

//logical operators
/*
&&          and
||          OR
*/

// Javascript Condition
// condition statment are used to decide the flow of execut the code on different condition , if the condition is true : an action will be runing if it is false another action will run

//if() condition
// if(condition){ block of code }


// let btn     = document.getElementById('btn');
// let myInput =  document.getElementById('inp')
// function myFunction(){
// let myInput =  document.getElementById('inp').value;
// console.log(myInput);

// }

// function myFunction(){

//    if(Number(myInput.value) === 15){
//     console.log('ok. you are accepted');
//    }
    
//     }
    
// btn.onclick = myFunction

// if(condition){block of code if true}else{ another block of code if it false}

// let btn     = document.getElementById('btn')
// let myInput =  document.getElementById('inp')
// function myFunction(e){
//     e.preventDefault();

//    if(Number(myInput.value) > 15){
//     console.log('ok. you are accepted');
//    }else{
//     console.log('Sorry. you are Not accepted');
//    }
    
//     }

//     btn.onclick = myFunction


// let myInput = document.getElementById('psw');
// let icon    = document.getElementById('icon');

// function show(){

//     if(myInput.type == 'password'){
//         myInput.type = 'text';
//         icon.style = 'color:red'
//         icon.className = 'fa-solid fa-eye-slash';
//     }else{
//         myInput.type = 'password';
//         icon.style = 'color:black'
//         icon.className = 'fa-solid fa-eye';
//     }
// }

// icon.onclick = show ;

//if(condition 1){block of code} else if(condition 2){block of code} else if(condition 3 ...)... else{}
// let toDay = new Date().getDay();
// if(toDay == 0){ 
//     console.log('To Day Is Sunday');
// }else if(toDay == 1){
//     console.log('To Day is Monday');
// }else if(toDay == 2){
//     console.log('To Day is Tuseday');
// }else if(toDay == 3){
//     console.log('To Day is Wednesday');
// }else if(toDay == 4){
//     console.log('To Day is Thursday');
// }else if(toDay == 5){
//     console.log('To Day is Friday');
// }else{
//     console.log('To Day is Saturday');
// }

// let myNav = document.getElementById('mynav');

// function changeNav(){
    // console.log(window.scrollY);

//     if(window.scrollY > 0 && window.scrollY < 500){
//         myNav.style = 'background:red';
//     }else if(window.scrollY > 500 && window.scrollY < 2500){
//         myNav.style = 'background:green';
//     }else if(window.scrollY > 2500 && window.scrollY < 3500){
//         myNav.style = 'background:blue';
//     }else if(window.scrollY > 3500 && window.scrollY < 4500){
//         myNav.style = 'background:orange';
//     }else{
//         myNav.style = 'background:black';
//     }
// }

// window.onscroll = changeNav

//switch

// let toDay = new Date().getDay();
// let toDate = new Date().toLocaleDateString();
// switch(toDay){ 
//     case 0 : console.log('To Day Is Sunday' + ' ' +  toDate ) ;
//     break;
//     case 1 : console.log('To Day is Monday' + ' ' +  toDate ) ;
//     break;
//     case 2 : console.log('To Day is Tuseday' + ' ' +  toDate ) ;
//     break;
//     case 3 : console.log('To Day is Wednesday' + ' ' + toDate ) ;
//     break;
//     case 4 : console.log('To Day is Thursday' + ' ' + toDate ) ;
//     break;
//     case 5 : console.log('To Day is Friday' + ' ' + toDate ) ;
//     break;
//     default: console.log('To Day is Saturday' + ' ' +  toDate ) ;
//     break;
// }




// Temolate Literals 

// let myBody = document.body;
// let myArray = ['red','green','blue','black','white'];

// myBody.style = ` background: ${myArray[0]} ; color : ${myArray[4]}` ;
// '' ""   `` 