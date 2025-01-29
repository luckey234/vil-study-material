//    {}//Array to Object
var techBrands = [
    "FaceBook",
    "Apple",
    "Amazon",
    "NetFlix",
    "Google",
]
var object = { ...techBrands }
// console.log(object)
//.........................................
//fill array with
//data
var newArray =
    new Array(6).fill("hii")
// console.log(newArray)
//.......................................
//remove duplicates
//    {} //from array
var duplicate = [
    "FaceBook",
    "Apple",
    "Amazon",
    "NetFlix",
    "NetFlix",
    "Google",
    "Google"
]
var newArray =
    Array.from(new Set(duplicate));
//    {} //   console.log('duplicate||=>',newArray)
//mereg Array
var array1 = [
    "FaceBook",
    "Apple",
    "Amazon",
    "NetFlix",
    "NetFlix",
    "Google",
    "Google"
]
var array2 = [
    "MicroSoft",
    "Adobe",
    "Slack",
    "DropBox",
]
var mergeArray = [
    ...array1,
    ...array2
]
console.log('mergeArray' + mergeArray)

//    {}// ..............
let string = "Hello World"
const check_last_word = string.endsWith("Hello")
const check_starts_word = string.startsWith("Hello")
console.log(check_last_word)
console.log(check_starts_word)
let repeat_text = string.repeat(3)
console.log(repeat_text)
//    {} // ..remove.
let person = {
    name: 'john',
    age: 30,
    isMarried: false,
    hobbies: ['sports', 'cooking']
}
// remove hobbiies key
delete person.hobbies
console.log(person)

//spread_operator.........................................
const arr1 = [1, 2, 3, 4, 5, 6]
const arr2 = [...arr1, 6, 7, 8, 9, 10]
console.log(arr2)
let Animal = {
    name: 'Tommy',
    age: 4
}
const updateAnimal = {
    ...person,
    color: 'red'
}
console.log(updateAnimal)
const arrfordup = [1, 2, 3, 4, 1, 1, 2, 4, 4, 2, 2, 2, 4, 5,]
const uniqueArr = [...new Set(arrfordup)]
console.log(uniqueArr)
//check if key exist in object
const personn = {
    name: 'john',
    age: 30,
    city: 'new york',
    country: 'USA'
}=
age_prop_exists ='age' in personn
console.log(age_prop_exists)
//spread_operator.........................................
// weired things in javascript wrong answer
let equality=Math.max()< Math.min() 
let equality1=[]===[]  
let equality2=0.2+0.1==0.3
let equality3=false + false + false || true + false + false
let equality4='11'+1 || '11'-1
console.log(equality)  