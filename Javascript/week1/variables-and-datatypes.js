// 📦 What Are Data Types?
// In JavaScript, every value has a type.
// These types define what kind of data is being stored — a number, text, boolean, object, etc.
// There are two categories:
// Primitive types – stored directly.
// Reference types – stored as memory references.

// 🔹 Primitive Data Types
// . String → Text
// "hello" , 'Sheryians'
// . Number → Any numeric value
// 3 , -99 , 3.14
// . Boolean → True or false
// true , false
// . Undefined → Variable declared but not assigned
// let x; → x is undefined
// . Null → Intentional empty value
// let x = null;
// . Symbol → Unique identifier (rarely used)
// . BigInt → Very large integers
// 123456789012345678901234567890n


// 🔹 Reference Data Types
// Object → { name: "Harsh", age: 26 }
// 28/06/2025, 15:10 Complete JS Course Syllabus

// 6/36

// Array → [10, 20, 30]
// Function → function greet() {}
// These are not copied directly, but by reference.


let a = 12;
let b = a;

a = a+2;


// type coercion (== vs ===)
// truthy and falsy values
// 0, false , "" , null , undefined , NaN , document.all

// type coercion =>

    let score = 100;

   let grade = score >= 90 ? " A" : score >= 80 ? "B" : score>= 70 ? "C" : "Fail";
   console.log(grade)

   let points = 90;


   let status = points >= 100 ? "Gold" : points >= 80 ? "Silver" : "Bronze";
   console.log(status)