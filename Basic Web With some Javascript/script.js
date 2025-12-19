
// // function addNum(num1 = 5, num2 = 5) {
// //     const result = num2 + num1;
// //     return result;
// // }; // console.log(addNum(5 + 5))
// // function multi(num1,num2){//     const result=num1*num2; //     return result
// // } // console.log(multi(3,4));
// const Person = {
//     firstname: "mido",
//     secondname: "koko",
//     address: {
//         city: "cairo",
//         Street: "12no"
//     },
//     edu: {
//         school: "we",
//         uni: "sut"
//     }
// };
// console.log(`Hi ${Person.firstname} your last name is ${Person.secondname} your city is ${Person.address.city}`);

// const multi = ((num1, num2) => {
//     const result = num1 * num2;
//     return result
// });
// console.log(multi(3, 4));
// const arr=[];
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 10; j++) {
//         // console.log(multi(i, j))
//         arr.push(multi(i, j));
//     }
// }
// console.log(arr); console.log(typeof arr);
// console.log("This is Reversed Array of the preoivoues one: ");
// const arr2 = arr.toReversed(); console.log(arr2)
// console.log(arr2.unshift(10));console.log(arr2);

// const name = "ahmed";
// let age=19;
// const moive = {
//     title: "MAX",
//     year: "2025",
//     rating: {
//         IMDP: 5.5,
//         Fans: 4
//     }
// };

// console.log((JSON.stringify(moive)));
// function sum(n1, n2) {
//     return n1 + n2;
// }
// console.log(sum(1, 2));
// const square = (num) => num ** 2;

// console.log(square(5));
// function createMovie(title, year, rating) {
//     const moive = {
//         titleOfMovie: title,
//         yearOfMovie: year,
//         ratingOfMovie: rating
//     };

//     return moive
// }
// console.log(createMovie("ss", 2025, 5));
// const movies = ["inception", "avatar", "titanic", "shrek", "pulp fiction"];
// const upperCaseMovies = movies.map(moive => moive.toUpperCase())
// console.log(upperCaseMovies);
// const lenmovie = movies.filter(moive => moive.length > 5)
// console.log(lenmovie);
// const movieObjects = [
//     { title: "The Dark Knight", rating: 5 },
//     { title: "Parasite", rating: 4 },
//     { title: "Interstellar", rating: 5 },
//     { title: "Jaws", rating: 3 },
//     { title: "Alien", rating: 4 }
// ];

// const fmovies = movieObjects.find(moive => moive.rating === 5)
// console.log(fmovies);





// const ar1 = [1, 2, 5, 6, 7]
// const ar2 = [4, 3]
// const arst = ["hi", "koko", "mogo"]
// console.log(ar1.concat(ar2));
// console.log(arst.join(" "));

// console.log("============== Array 2 output =========================");

// for (let index = 0; index < ar2.length; index++) {
//     const element = ar2[index];
//     console.log(element);
// }



// console.log("============== Array 1 output =========================");

// ar1.forEach(element => {
//     console.log(element);

// });

// console.log("============== Array str output =========================");


// for (const element of arst) {
//     console.log(element);

// }


// const jstest = document.getElementById("koko")
// console.log(jstest);
// const jstest2 = document.getElementsByClassName("toto")
// console.log(jstest2);

// const allp = document.getElementsByTagName("P")
// console.log(allp);


// const form = document.querySelector("table")

// jstest.innerHTML = "Hello, <asrc='example.com'> EXAMPLE </a> "

// form.style.background = "color: #34d47aff;";


// const obj = document.getElementsByTagName("label")[0]


// const Obj = document.getElementById("tt")
// Obj.addEventListener("click", alert("HeLLO"))





// let person = {

//     name : "Ahmed",

//     major : "Networks and Cybersecurity"

// }

// console.log(person.name);



// person.major="AI";

// console.log(person.major);

// person.age="21";

// console.log(person);

// delete person.age;

// console.log(person);

// console.log(Object.keys(person));

// console.log(Object.values(person));

// let myarr = [{names:"test",major:"electrical"},{names:"test1",major:"power"}];

// myarr.forEach(function(Element1){

//     console.log(Object.values(Element1));

// })



// console.log(Object.entries(person));

// let pearson2= new Object();

// Object.assign(pearson2,person,{age:20});

// console.log(pearson2);

// person.greet=function(){

//     console.log("hello " + this.name);

// }

// person.greet();

// for(let i in person){

//     console.log(i + " " +person[i]);



// }

// function persona(name,major){

//     this.name=name;

//     this.major=major;

// }

// let p1 = new persona("ahmed","data")

// console.log(p1);

// console.log(persona.prototype);

// persona.prototype.greetings= function(){

//     console.log("welcome "+this.name + " whos major is "+ this.major)

// }

// p1.greetings();

// function male(name,major){

//     persona.call(this,name,major);

    



// }

// let male1= new male("mohamed","power");

// console.log(male1);

// male.prototype=Object.create(persona.prototype);





// class pearsonclass{

//     constructor(name,major){

//         this.name=name;

//         this.major=major;

//     }

//     greets(){

//         console.log("hello " + this.name+ " you are in major "+ this.major);

//     }

// }

// class maleclass extends pearsonclass{

//     constructor(name,major){

//         super(name,major);

//     }

//     greets(){

//         console.log("hello male student your name is "+this.name + " and your major is "+ this.major)

//     }    

// }

// let male2 = new maleclass("7mada","art");

// male2.greets();

// let student1= new pearsonclass("shaymaa","cs");

// student1.greets();



// let str = JSON.stringify(student1);

// console.log(str);

// let jsn= JSON.parse(str);

// console.log(jsn);
// -------------------
// Simple interactive behaviors added for coursework
// -------------------

// Change the text of the `#koko` paragraph when the button is clicked
const changeBtn = document.getElementById('changeTextBtn');
if (changeBtn) {
	changeBtn.addEventListener('click', () => {
		const p = document.getElementById('koko');
		if (p) p.textContent = 'JS Text Changed!';
	});
}

// Toggle a dark theme class on the document body
const themeBtn = document.getElementById('toggleTheme');
if (themeBtn) {
	themeBtn.addEventListener('click', () => {
		document.body.classList.toggle('dark-theme');
	});
}

// Simple form validation: require a name before submitting
const form = document.querySelector('form');
if (form) {
	form.addEventListener('submit', (e) => {
		const user = document.getElementById('User');
		if (user && user.value.trim() === '') {
			e.preventDefault();
			alert('Please enter your name before submitting.');
			user.focus();
		}
	});
}