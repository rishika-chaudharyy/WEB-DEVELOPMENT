let heading = document.getElementById("heading");
console.dir(heading);

let elems = document.getElementsByClassName("myclass");
console.dir(elems);

let para = document.getElementsByTagName("p");
console.dir(para);

let firstelem = document.querySelector("p");
console.dir(firstelem);

let allelem = document.querySelectorAll(".myclass");
console.dir(allelem);

console.log(firstelem.tagName);

console.log(document.body.firstChild);

let res = document.querySelectorAll("#mydiv").children;
console.log(res);

let text = document.querySelector("h2");
console.dir(text);
text.innerText = text.innerText + " From Apna College Students";

let divs = document.querySelectorAll(".box");
console.dir(divs);
divs[0].innerText = "new value";

let ptag = document.querySelector(".myclassp");
console.dir(ptag);

console.log(ptag.tagName);
ptag.innerHTML = "<b>hello<b>";
ptag.innerText = "abcs";
ptag.textContent;
