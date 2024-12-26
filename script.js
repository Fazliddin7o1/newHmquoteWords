//object in javascript





var quotes = [
  "Success is not in what you have, but who you are.",
  "The best way to predict the future is to create it.",
  "Do not watch the clock. Do what it does. Keep going.",
  "Dream big and dare to fail.",
  "Act as if what you do makes a difference. It does."
];
var  generateBtn = document.getElementById('generate-btn');
var quoteDisplay = document.getElementById('quote-display');

generateBtn.addEventListener('click', () => {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomIndex];
});


















// var player1 = {
//   level: "noob",
//   streght: 2,
//   gun: true,
//   weapons: ["AK-47, M4A1"],
//   throwGranade: function(){
//     alert('Fire in the hole!')
//   },
// };


// function counterPlayer(level, streght, gun, weapons) {
//   this.level = level;
//   this.streght = streght;
//   this.gun = gun;
//   this.weapons = weapons;
//   this.greet = function () {
//     return "Fire in the hole!";
//   };
// }

// var player2 = new counterPlayer("expert", 9,true, ["AK-47"]);

// console.log("player2:" , player2);












































// Consturctor function
// var bellBoy1 = {
//   name: "Adam",
//   age: 24,
//   hasWorkPermit: true,
//   greet: function () {
//     return "Good morning, sir!";
//   },
// };

// create constructor function
// function BellBoy(name, age, hasWorkPermit, greet) {
//   this.name = name;
//   this.age = age;
//   this.hasWorkPermit = hasWorkPermit;
//   this.greet = function () {
//     return "Good morning, sir!";
//   };
// }

// initialization object
// var bellBoy2 = new BellBoy("Tim", 26, true, greet);

// console.log("bellboy2", bellBoy2);

// var myAudio = new Audio("sounds/crash.mp3");






























// var car = {
//   brand:"Chevrolet",
//   name: "Malibu 2 xl",
//   horsePower: 236,
//   iselectric: false,
//   drive: function (){
//     console.log("make driving noise...");

//   },

// };

//dot notation
// console.log("brand: ", car.brand);


//bracket notation

// console.log("name: ", car["drive"]);



// var myPortfolio = {
//   name: "fazliddin",
//   surname: "sobithojayev",
//   nickname: "fDev",
//   age:15,
//   information:"middle coder in frontent",
//   phoneNumber: "+998936470744",
//   drive: function () {
//     console.log("make driving noise..."),

//   },
  
// };


// console.log("My short Portfolio" , myPortfolio);


// console.log("")
































//calculator function



// HIGHER ORDER FUNCTIONS:
// 1: Take other function as input
// 2: Return function as output

// calculator function
// function add(a, b) {
//     return a + b;
//   }
  
//   function multiply(a, b) {
//     return a * b;
//   }

//   function foizBolish(a,b){
//     return a % b;

//   }


//   function bolish(a,b){
//     return a / b;

//   }


  
//   // HOF (Higher Order Fuction)
//   function calculator(a, b, operator) {
//     return operator(a, b);
//   }
  


//   var result = calculator(4, 10, multiply);
//   var result1 = calculator(4, 10, foizBolish);
//   var result2 = calculator(4, 10, bolish);
//   console.log("result: ", result," " ,result1," " ,result2);
  


// Switch statements in javascript

// var buttons = document.querySelectorAll(".drum");

// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function () {
//     var buttonHTML = this.innerHTML;
//     switch (buttonHTML) {
//       case "w":
//         var crashSound = new Audio("sounds/crash.mp3");
//         crashSound.play();

//         break;

//       case "a":
//         var kickBassSound = new Audio("sounds/kick-bass.mp3");
//         kickBassSound.play();

//         break;

//       default:
//         console.log("error!");
//     }
//   });
// }

// document.addEventListener("keydown", handleKeydown);

// function handleKeydown(event) {
//   console.log("event", event.key);
// }


























//new lesson 5


//new lesson5HmWork











// function betterThanAverage(classPoints, yourPoints) {
//   var total = 0;
//   for (var i = 0; i < classPoints.length; i++) {
//       total += classPoints[i];
//   }
//   var average = total / classPoints.length;
//   return yourPoints > average;
// }













































//homework 33


// function generateFibonacci(n) {
//   var fibonacci = [0, 1];
//   for (var i = 2; i < n; i++) {
//       fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
//   }
//   return fibonacci.slice(0, n);
// }

// var result = generateFibonacci(4);
// console.log( result);


















//homework 22


// function sumArray(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//       sum += arr[i];
//   }
//   return sum;
// }

// var numbers1 = [1, 5.2, 4, 0, -1];
// console.log( sumArray(numbers1)); 

// var numbers2 = [];
// console.log( sumArray(numbers2));

// var numbers3 = [-2.398];
// console.log( sumArray(numbers3)); 












//homework 11


// function findLargestNumber(arr) {
//   var largest = arr[0];
//   for (var i = 1; i < arr.length; i++) {
//       if (arr[i] > largest) {
//           largest = arr[i];
//       }
//   }
//   return largest;
// }

// var numbers = [3, 7, 2, 9, 4];
// var largestNumber = findLargestNumber(numbers);
// console.log("Eng katta raqam:", largestNumber);








// var myH = document.querySelectorAll(".a1");




// console.log(myH);






















//JavaNewLesson3




// var cocaCola = 99;



// function cocaColaa (){
// var i = 0;

//   while (i<cocaCola){
//     console.log(cocaCola + "bottles of coca cola");
//     console.log(cocaCola + "bottles of coca cola on the wall,");
//     console.log(cocaCola + "bottles of coca cola ");

//   }
//   if(i===0){
//     console.log("No more bottles of coca cola");
//   }
//   cocaCola--;
// }



// cocaColaa(cocaCola);











// 
















//newLesson2  homework 2



// var myArray = ["Azizbek","Fazliddin","Adam","Muhammadyusuf","Asadbek","Anvarjon"];


// function whoPaysForLunch(){
//   var tasodifiyArray = myArray[Math.floor(Math.random() * myArray.length)];
//   console.log(tasodifiyArray + " pays a todays launch");
 
// }


// whoPaysForLunch();

























//lesson2 Homework1


// var yearsday = 2400;




// function yearKabisa(){

//   if(yearsday % 4 === 0){
//     console.log(yearsday + "-yil " + "Kabisa yili! ");
//   }
//   else if(yearsday % 100 === 0){
//     consle.log(yearsday + "-yil " + "Kabisa yili emas!");
//   }

//   else if(yearsday % 400 === 0){
//     console.log(yearsday + "-yil " + "Kabisa yili! ");
//   }

//   else{
//     console.log(yearsday + "-yil " + "Kabisa yili emas!")
//   }




  


// }



// yearKabisa();


































//newlesson2


// var array = []
// var count = 1;

// function fizzBuzz(){
   
   
   
//   if(count % 3 ===0 && count % 5 === 0){
//       array.push("fizzBuzz");
//     }


//   else if(count % 3 === 0){
//     array.push("fizz");
//   }
//   else if(count % 5 === 0){
//     array.push("Buzz");
//   }

//   else{
//     array.push(count);
//   }


// count++;
// console.log(array);
// }




// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();

























//newhomework BMI

























// function tasodifiySon(x) {
//     var tasodifiy = Math.random()
//     let son = Math.floor(Math.random() * x) + 1;
//     return son;
// }


// console.log(tasodifiySon(x));





// function calculate(milk){
//     return milk;

// }



// function getMilk2(money, calculate){
//     var numberOfBottles = Math.floor(money / calculate);
//     alert("buy " + numberOfBottles + " bottles of milk");
//     return money % milk;

// }



// var change = getMilk2(150, 15);

























//homework2

// function main() {
//     var pul = prompt("Qancha pulingiz bor? (so'mda kiriting):");
//     var nonNarxi = 3000;
    
//     if (pul >= nonNarxi) {
//         var nonSoni = pul / nonNarxi; 
//         nonSoni = Math.floor(nonSoni); 
//         var qoldiqPul = pul % nonNarxi;
        
//         alert("Siz " + nonSoni + " dona non olishingiz mumkin.");
//         alert("Qoldiq pulingiz: " + qoldiqPul + " so'm.");
//     } else {
//         alert("Pul yetarli emas.");               
//     }
// }

// main();















































//homework



// function lifeInweeks() {
//     var userAge = Number(prompt("Enter your age:"));
//     var maxAge = 90;

//     if (userAge < maxAge) {
//         var remainingYears = maxAge - userAge;
//         var remainingDays = remainingYears * 365;
//         var remainingWeeks = remainingYears * 52;
//         var remainingMonths = remainingYears * 12;

//         alert(
//             "You have approximately:\n" +
//             remainingDays + " days,\n" +
//             remainingWeeks + " weeks, and\n" +
//             remainingMonths + " months left to live."
//         );
//     } else {
//         alert("Invalid age entered. Please try again.");
//     }
// }

// lifeInweeks();






























// function buyBread(x){
//     alert("go outside");
//     alert("go left");
//     alert("go right");
//     alert("enter the first shop");
//     if(x=0){
//         alert("buy a loaf of bread");
        
       
        
        
        
//         if(x=1){
//             alert("buy l loaf of bread");
            
//             }
        
//         if(x=5){
//             alert("buy 5 loaves of bread");
            
//             }
//         }
//     alert("come back");
// }






    
// buyBread(0);
   































//challenge3
// var x = 3;
// var y = x++;
// y += 1;


// console.log('y: ' , y);
// console.log('x: ' , x);



























//challenge2
// var y = 6;
// var x = 7;
// y+=z;
// console.log(y);
// buni bir biriga qo'shadi



































// var x = 5;
// x++;
// bu 5 ga 1 ni qo'shib ketadi
























//challenge1


// var dogAge = prompt('enter your dog Age')
// var humanAge = (dogAge - 2) * 4 + 21;

// alert('your dog year is:' + humanAge);










// var a = 2 + 4;
// var b = 4 - 3;

//Modulo
//qoldiqni topish

// var e = 10 % 3;
// var cost = 3 + (5*2);



