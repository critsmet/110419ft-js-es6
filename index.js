//DESTRUCTURING

//WITH ... ARRAYS
let teacherArray = ["Chris", "Jenn", "Cernan"]

// let chris = teacherArray[0]
// let jenn = teacherArray[1]
// let cernan = teacherArray[2]

let [teacher1, teacher2, teacher3] = teacherArray

//WITH ... OBJECTS

let studentObj = {studentName: "Chris", grade: 12, canGraduate: true}

let {studentName, grade, canGraduate} = studentObj

function studentHTML([student1, student2, student3]){
  document.body.innerHTML += `
    <div>
      <p>Student 1: ${student1}</p>
      <p>Student 2: ${student2}</p>
      <p>Student 3: ${student3}</p>
    </div>
  `
}

let name = "Chris"
let password = "test"

let configObj = {
  method: "POST",
  headers: '',
  body: JSON.stringify({
    name,
    password
  })
}

//SPREAD OPERATOR
//MOVING FORWARD, ALL CHANGES TO ARRAYS AND OBJECTS SHOULD YIELD COPIES

let state = {
  loggedInUser: null,
  toys: [],
}

state = {...state, loggedInUser: "Chris"}

//console.log(state)

state = {...state, toys: ["Woody", "Buzz"]}

//console.log(state);

//ARROW FUNCTIONS

//Always inherently anonymous

const add2 = num => num + 2

// function add2(num) {
//   return num + 2
// }
//
// () => {}

const resToJson = (res) => res.json()

//fetch("")
  // .then(function(res){
  //   retun res.json()
  // })
  //.then(resToJson)

  //There are times where you MUST use an arrow function, and times where you MUST use a regular

  //THEY ARE NOT ALWAYS INTERCHANGEABLE

//CLASS SYNTAX

class Pet{
  constructor(name, age){
    this.name = name
    this.age = age
  }

  sayName(){
    console.log("Hi, my name is " + this.name)
  }

  // set owner(owner){
  //   this.owner = owner
  // }
  //
  // get owner(){
  //   return this.owner
  // }

}

class Dog extends Pet{
  constructor(name, age, breed, favToy){
    super(name, age)
    this.breed = breed
    this.favToy = favToy
  }

  havePuppy(name){
    let puppy = new Dog(name, 0, this.breed, null)
    puppy.whoIsMom = () => {
      console.log("My mom is " + this.name)
    }
    return puppy
  }

}


let student1 = {
  name: "Chris",
  grade: 12
}

let student2 = {
  name: "Lucy",
  grade: 11
}

function sayName(){
  console.log(this.name)
}

let chrisSayName = sayn







//
