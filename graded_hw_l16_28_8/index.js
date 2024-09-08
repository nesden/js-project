//using console.log(" "); to space out the answers throughout this task 

//ex1
console.log("ex1");
for (let i = 12; i <= 24; i++) {
    console.log(i);
}
console.log("");
console.log("ex2");
//ex2
for (let i = 7; i <= 31; i += 2) {
    console.log(i);
}
console.log("");
console.log("ex3");
//ex3
for (let i = 10; i >= -20; i -= 2) {
    console.log(i);
}
console.log("");
console.log("ex4");
//ex4
for (let i = 1; i <= 45; i++) {
    let str = ""
    if (i % 3 == 0) {
        str += "Fizz"
    }
    if (i % 5 == 0) {
        str += "Buzz"
    }
    if (str != "") {
        console.log(`${i} is ${str}`);
    }

}
console.log("");
console.log("ex5");
//ex5
let numArr = [1, 13, 22, 123, 49, 34, 5, 24, 57, 45];
function sum(numberArr) {
    let sum = 0;
    for (let i = 0; i < numberArr.length; i++) {
        if (typeof (numberArr[i]) != "number") {
            return console.log("error. not all the items in the array are numbers");

        }
        sum += numberArr[i]
    }
    console.log(sum);
    return sum
}
sum(numArr)
console.log("");
console.log("ex6");
//ex6

let student1 = {
    id: 231314421,
    firstName: "shimi",
    lastName: "eliel",
    age: 16,
    country: "israel",
    city: "tzur yigal"
}
let student2 = {
    id: 12345678,
    firstName: "benny",
    lastName: "minga",
    age: 14,
    country: "mexico",
    city: "mexico city"
}
let student3 = {
    id: 87654311,
    firstName: "moga",
    lastName: "toda",
    age: 12,
    country: "japan",
    city: "tokyu"
}
stuArr = [student1, student2, student3]

function change(studentArr, toChange) {
    studentArr.forEach(function (element) {
        delete (element[toChange])
    })

}
function printStudents(studentArr) {
    studentArr.forEach(function (element) {
        for (let key in element) {
            console.log(`${key} : ${element[key]}`);
        }
        console.log(" ");//making the output easier to read

    })
}
printStudents(stuArr);
change(stuArr, "age");
printStudents(stuArr);
console.log("");
console.log("ex7");
//ex7

const ourPets = [
    {
        animalType: "cat",
        names: [
            "Meowzer",
            "Fluffy",
            "Kit-Cat"
        ]
    },
    {
        animalType: "dog",
        names: [
            "Spot",
            "Bowser",
            "Frankie"
        ]
    }
];

function printAnimalTypeOfCat(objArr) {
    // console.log("animal type: cat");
    // i mean, you probably didnt mean that but it works
    console.log("animal type: " + objArr[0].animalType);

}
printAnimalTypeOfCat(ourPets);
function printAnimalNamesOfDog(objArr) {
    //console.log(objArr[1].names);
    //didnt know if you wanted it to come out like that or just the names so im d\making another option

    ourPets.forEach(function (element) {
        if (element.animalType == "dog") {
            //checking where the animal type will be dog. since we might get a diffrent array for this function
            for (let i = 0; i < element.names.length; i++) {
                console.log("dog's name: " + element.names[i]);
                // away of just getting the names without all the bs around the names
            }
        }
    })
}
printAnimalNamesOfDog(ourPets);
console.log("");
console.log("ex8");
//ex8

const student = {
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

function printStudent8(student) {
    for (let k = 0; k < student.hobbies.length; k++) {
        if (typeof (student.hobbies[k]) != "string") {
            return console.log("error in the hobbies");

        }
    }
    for (let key in student) {
        console.log(`${key} : ${student[key]}`);

    }
}
printStudent8(student)
console.log("");
//2
const addHobby8 = (student, hobby) => {
    student.hobbies.push(hobby);
}
addHobby8(student, "checkers")
console.log("");
//3
printStudent8(student)
console.log("");

//4
const removeHobby8 = (student, hobby) => {
    for (let i = 0; i < student.hobbies.length; i++) {
        if (student.hobbies[i] == hobby) {
            delete student.hobbies[i];
            //since it creats an empty spot in the array. we need to move everything forward once making the empty spoit at the end and then get rid of it with pop()
            for (let k = i; k < student.hobbies.length; k++) {
                student.hobbies[k] = student.hobbies[k + 1]
            }
            student.hobbies.pop();
        }

    }
}
removeHobby8(student, "checkers");
printStudent8(student);
console.log("");
student.family_name = "bingo";
printStudent8(student);
console.log("");
console.log("ex9");
//ex9

var arr9 = [
    [1, 2],
    [3, 4],
    [5, 6]];
const printArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
}
printArray(arr9) //1 2 3 4 5 6
console.log("");
console.log("ex10");
//ex10
let arr10 = [[0, 1, 1], [0, 1, 0], [1, 0, 0]];

const zeroCount = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == 0) {
                count++
            }
        }

    }
    return count
}

console.log(zeroCount(arr10)) // should print → 5
console.log("");
console.log("ex11");
//ex11

let arr11 = [4, 2, 34, 4, 1, 12, 1, 4];

const findDup = (arr) => {
    let flag = [];
    let ans = [];//an array of the answer
    let tempShift = 0;

    flag = arr.filter(function (element) {
        return element
    })
    //flag is a copy if the original array so we can work on it without changing the original array

    for (let i = 0; i < arr.length; i++) {
        tempShift = flag.shift()
        if (flag.includes(tempShift) && !ans.includes(tempShift)) {
            ans.push(tempShift)
        }
    }
    return ans
}
console.log(findDup(arr11)); //[4, 1]
console.log("");
console.log("ex12");
//ex12
let arr12 = [43, "what", 9, true, "cannot", false, "be", 3, true];
function flipArr(arr) {

    let newArr = arr.filter(function (element) {
        return element
    })
    //will flip the order withought changing the original array since it askss for a new array
    for (let i = 0; i < arr.length; i++) {
        newArr.push(newArr.shift())
    }
    return newArr
}
console.log(flipArr(arr12));


//ex13

console.log("");
console.log("ex13");
let arr_1 = [4, 6, 7];
let arr_2 = [8, 1, 9]
function sumArrs(arr1, arr2) {
    let ansArr = []
    for (let i = 0; i < arr1.length; i++) {
        ansArr.push(arr1[i] + arr2[i])

    }
    return ansArr;
}
console.log(sumArrs(arr_1, arr_2));

//ex14

console.log(" ");
console.log("ex14");
let str3 = "racecar";
let str4 = "Java";
function isPalindrom(str) {
    //first to check if we gotten strings
    if (typeof (str) != "string") {
        return console.log("error. the recieved param isnt a string");
    }
    let flag = true;
    for (let i = 0; i < str.length && flag; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            flag = false;
        }

    }
    console.log(`${str} is palindrom?  + ${flag}`);
}
isPalindrom(str3)
isPalindrom(str4)
console.log("");
console.log("ex15");
//ex15
let counter15 = 1;
while (counter15 < 100) {
    console.log(counter15); //wasnt asked for but so we can follow. it feels empty without it
    counter15 *= 2;
}
console.log("");
console.log("ex16");
//ex16
let counter16 = 900000;
while (counter16 > 50) {
    console.log(counter16); //wasnt asked for but so we can follow. it feels empty without it
    counter16 /= 2
}
console.log("");
console.log("ex17");
//ex17
let names17 = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let copiedNames17 = [];
let index17 = 0;
while (index17 < names17.length) {
    copiedNames17.push(names17[index17]);
    index17++;
}
console.log(copiedNames17); // => ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor']

console.log(" ");
console.log("ex18");
//ex18
let names18 = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let copiedNames18 = [];
let index18 = 0;
while (index18 < names18.length && names18[index18] != 'Pete') {
    copiedNames18.push(names18[index18]);
    index18++;
}
console.log(copiedNames18);

console.log(" ");
console.log("ex19");
//ex19
let array19a = [true, false, false, true, true, false];
let array19b= [true, false, true, false, true, true];
function checkBools(arr) {
    let i = 0;
    while (i < arr.length && arr[i] != arr[i + 1]) {
        i++;
    }
    if (i == arr.length) {
        console.log(-1);

    }
    else {
        console.log(i + 1);

    }
}
checkBools(array19a);
checkBools(array19b);