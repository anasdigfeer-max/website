// ================= CHAPTER 7 =================
const header = document.createElement("header");
header.innerHTML = "<h1>JavaScript Educational Website</h1><p>Name: Anas Abdirizak Mohamed | ID: CS1500926</p>";
document.body.appendChild(header);

const nav = document.createElement("nav");
nav.innerHTML = "<a href='#ch7'>Chapter 7</a> | <a href='#ch8'>Chapter 8</a> | <a href='#ch9'>Chapter 9</a>";
document.body.appendChild(nav);

document.body.appendChild(document.createElement("hr"));

// Chapter 7
const ch7 = document.createElement("section");
ch7.id = "ch7";
ch7.innerHTML = "<h2>Chapter 7: Objects in JavaScript</h2><h3>Example: Single Object</h3><pre id='output7'></pre>";
document.body.appendChild(ch7);

let student = {
  name: "Anas",
  id: "CS1500926",
  faculty: "Computer Science",
  greet() { return "Hello " + this.name; }
};
document.getElementById("output7").innerText = JSON.stringify(student, null, 2) + "\n\n" + student.greet();

document.body.appendChild(document.createElement("hr"));

// ================= CHAPTER 8 =================
const ch8 = document.createElement("section");
ch8.id = "ch8";
ch8.innerHTML = `
  <h2>Chapter 8: DOM Manipulation</h2>
  <p id="content8">Chapter 8 paragraph</p>
  <p class="box8">Box One</p>
  <p class="box8">Box Two</p>
  <p class="box8">Box Three</p>
  <button id="btnId">By ID</button>
  <button id="btnClass">By Class</button>
  <button id="btnTag">By Tag</button>
  <hr>
  <h3>Example 2: Create and Append Elements</h3>
  <div id="appendBox"><p>Existing paragraph</p></div>
  <button id="addElementBtn">Add Paragraph</button>
  <hr>
  <h3>Example 3: Change Styles</h3>
  <p id="stylePara">This paragraph will change style</p>
  <button id="styleBtn">Change Style</button>
`;
document.body.appendChild(ch8);

// Buttons functionality
document.getElementById("btnId").onclick = () => document.getElementById("content8").innerText = "Changed by ID";
document.getElementById("btnClass").onclick = () => {
  document.getElementById("ch8").getElementsByClassName("box8")[0].innerText = "Changed by Class";
};
document.getElementById("btnTag").onclick = () => {
  document.getElementById("ch8").getElementsByTagName("p")[0].innerText = "Changed by Tag";
};
document.getElementById("addElementBtn").onclick = () => {
  const newPara = document.createElement("p");
  newPara.innerText = "New Paragraph Added!";
  document.getElementById("appendBox").appendChild(newPara);
};
document.getElementById("styleBtn").onclick = () => {
  const para = document.getElementById("stylePara");
  para.style.color = "white";
  para.style.backgroundColor = "green";
  para.style.fontWeight = "bold";
  para.style.padding = "5px";
};

document.body.appendChild(document.createElement("hr"));

// ================= CHAPTER 9 =================
const ch9 = document.createElement("section");
ch9.id = "ch9";
ch9.innerHTML = `
  <h2>Chapter 9: JavaScript Events (Separated Examples)</h2>
  <h3>1. Click Event</h3>
  <button id="clickBtn">Click Me</button>
  <p id="clickResult"></p>
  <hr>
  <h3>2. Input Event</h3>
  <input type="text" id="inputEvent" placeholder="Type here">
  <p id="inputResult"></p>
  <hr>
  <h3>3. Mouse Events</h3>
  <div id="mouseBox" tabindex="0" style="width:150px;height:50px;line-height:50px;text-align:center;border:1px solid #333;margin-bottom:10px;">Mouse Box</div>
  <p id="mouseResult"></p>
  <hr>
  <h3>4. Focus & Blur Events</h3>
  <input type="text" id="focusInput" placeholder="Focus here">
  <p id="focusResult"></p>
  <hr>
  <h3>5. Keyboard Events</h3>
  <input type="text" id="keyInput" placeholder="Press keys">
  <p id="keyResult"></p>
  <hr>
  <h3>6. Form Submit Event</h3>
  <form id="myForm">
    <input type="text" id="formName" placeholder="Your name">
    <button type="submit">Submit</button>
  </form>
  <p id="formResult"></p>
`;
document.body.appendChild(ch9);

// Chapter 9 functionality
document.getElementById("clickBtn").onclick = () => document.getElementById("clickResult").innerText = "Button Clicked";
document.getElementById("inputEvent").addEventListener("input", function(){ document.getElementById("inputResult").innerText = "You typed: " + this.value; });

const mouseBox = document.getElementById("mouseBox");
const mouseResult = document.getElementById("mouseResult");
mouseBox.addEventListener("mouseover", () => mouseResult.innerText = "Mouse Over");
mouseBox.addEventListener("mouseout", () => mouseResult.innerText = "Mouse Out");
mouseBox.addEventListener("click", () => mouseResult.innerText = "Mouse Click");

const focusInput = document.getElementById("focusInput");
const focusResult = document.getElementById("focusResult");
focusInput.addEventListener("focus", () => focusResult.innerText = "Input Focused");
focusInput.addEventListener("blur", () => focusResult.innerText = "Input Blurred");

const keyInput = document.getElementById("keyInput");
const keyResult = document.getElementById("keyResult");
keyInput.addEventListener("keydown", (e) => keyResult.innerText = "Key Down: " + e.key);
keyInput.addEventListener("keyup", () => keyResult.innerText = "Key Released");

document.getElementById("myForm").addEventListener("submit", function(e){
  e.preventDefault();
  const formName = document.getElementById("formName").value;
  document.getElementById("formResult").innerText = "Form Submitted: " + formName;
});
