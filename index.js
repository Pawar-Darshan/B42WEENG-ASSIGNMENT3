function myFunction(text) {
  var h = document.createElement("H1");
  var t = document.createTextNode(text);
  h.appendChild(t);
  document.body.appendChild(h);
}

myFunction("You will find assignment in console.");

//For the given JSON iterate over all for loops (for, for in, for of, forEach):
//Answer:
const obj = [
  {
    name: "Ashwini",
    age: "24",
    city: "Pune",
  },
  {
    name: "Vidyesh",
    age: "23",
    city: "Nashik",
  },
  {
    name: "Chinmay",
    age: "25",
    city: "Bengaluru",
  },
  {
    name: "Darshan",
    age: "24",
    city: "Mumbai",
  },
];

//JSON iteration with the help of normal for loop:
console.log("Normal for loop");
for (let i = 0; i < obj.length; i++) {
  console.log(`
    Name : ${obj[i].name},
    Age : ${obj[i].age},
    City : ${obj[i].city}
    `);
}
console.log("*************************");
//Output:
/**
Name : Ashwini,
Age : 24,
City : Pune
Name : Vidyesh,
Age : 23,
City : Nashik
Name : Chinmay,
Age : 25,
City : Bengaluru
Name : Darshan,
Age : 24,
City : Mumbai
 */

//JSON iteration with the help of for in loop:
console.log("For in loop");
for (element in obj) {
  console.log(`
  Name : ${obj[element].name}
  Age : ${obj[element].age}
  City : ${obj[element].city}`);
}
console.log("*************************");
//Output:
/**
Name : Ashwini,
Age : 24,
City : Pune
Name : Vidyesh,
Age : 23,
City : Nashik
Name : Chinmay,
Age : 25,
City : Bengaluru
Name : Darshan,
Age : 24,
City : Mumbai
 */

//JSON iteration with the help of for of loop:
console.log("For of loop");
for (let item of obj) {
  console.log(`
  Name : ${item.name}
  Age : ${item.age}
  City : ${item.city}
  `);
}

console.log("*************************");
//Output:
/**
Name : Ashwini,
Age : 24,
City : Pune
Name : Vidyesh,
Age : 23,
City : Nashik
Name : Chinmay,
Age : 25,
City : Bengaluru
Name : Darshan,
Age : 24,
City : Mumbai
 */

//JSON iteration with the help of forEach loop:
console.log("forEach loop");

let output = obj.forEach((x) =>
  console.log(`
Name : ${x.name}
Age : ${x.age}
City : ${x.city}
`)
);
console.log("*************************");

//Output:
/**
Name : Ashwini,
Age : 24,
City : Pune
Name : Vidyesh,
Age : 23,
City : Nashik
Name : Chinmay,
Age : 25,
City : Bengaluru
Name : Darshan,
Age : 24,
City : Mumbai
 */

//Question 2: Create your own resume in JSON format:
//Answer:
const resume = [
  {
    personalDetails: {
      Name: "Darshan Dinesh Pawar",
      DOB: 24,
      Email: "officialdarshan@gmail.com",
      "Mobile Number": 8208295189,
    },
  },
  {
    educationalDetails: {
      Graduation: "Kalinga University",
      graduationPercentage: 67,
      graduationIn: "B Tech in Computer Science",
    },
  },
  {
    Hobbies: [
      "Reading Books",
      "Writing",
      "Taking with new people",
      "Watching Movies",
    ],
  },
  {
    Address: {
      Lane: "Burud Lane",
      "House No": "2752",
      "House Name": "Mauli Niwas",
      City: "Nashik",
      "Pin Code": 422001,
    },
  },
  { Courses: ["Full Stack Development Course", "AutoCAD", "Unigrafics"] },
];

for (let i = 0; i < resume.length; i++) {
  console.log(resume[i]);
}
