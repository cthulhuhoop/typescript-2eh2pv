/// <reference types="two_types.d.ts" />

// Import stylesheets
import "./style.css";
import Two from "two.js";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>Two.js</h1>`;

// Make an instance of two and place it on the page.
var elem = document.getElementById("app");
var params = { width: 360, height: 360 };
var two = new Two(params).appendTo(elem);

// two has convenience methods to create shapes.
var circle = two.makeCircle(122, 50, 50);
var rect = two.makeRectangle(213, 100, 100, 100);
var star = two.makeStar(133, 244, 152, 212, 18);

// The object returned has many stylable properties:
circle.fill = "#FF8660";
circle.stroke = "orangered"; // Accepts all valid css color
circle.linewidth = 5;

rect.fill = "rgb(0, 200, 255)";
rect.opacity = 0.55;
rect.noStroke();

// The object returned has many stylable properties:
star.fill = "#F23e40";
star.stroke = "yellow"; // Accepts all valid css color
star.linewidth = 5;

// Don't forget to tell two to render everything
// to the screen
two.update();

setInterval(() => {
  circle.linewidth++;
  //rect.opacity = rect.opacity - 0.05;

  two.update();
}, 5);
