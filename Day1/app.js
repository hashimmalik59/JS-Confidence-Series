// Day 1

// 1. Selecting elements with(querySelector & getElementById)
// agar humein id ko select karna hoto
let headOne = document.getElementById("heading");
console.log(headOne); // <h1 id="heading">Hello World</h1>

// is se hum element ko .class, #id aur tag name saath select kar sakte hain
let ul = document.querySelector(".parent-list"); // selects with .class
console.log(ul);

let li = document.querySelector("li"); // selecting with tag name
console.log(li);

let lastList = document.querySelector("#third-list");
console.log(lastList);

// Note: agar HTML mein same identity k elements yani same class, id ya same tag name k elements hain to querySelector first wale ko hi select karega like 3 li hain to us ne querySelector mein just first wale ko select kiya hai

// 2. Changing element text & style dynamically
headOne.innerHTML = "Hello DOM"; // changing text dynamically
headOne.style.backgroundColor = "red" // changing bg color dynamically

// 3. Simple button click event (change text on change)
let changeButton = document.querySelector("button");
changeButton.addEventListener("click", () => {
    headOne.innerHTML = "Hello Document Object Model";
});