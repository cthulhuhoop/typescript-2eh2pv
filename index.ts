// Import stylesheets
import './style.css';
import Two from 'two.js';
// import {Two} from 'types.js';


// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// Make an instance of two and place it on the page.
var elem = document.getElementById('app');
var params = { width: 285, height: 200 };
var two = new Two(params).appendTo(elem);

// two has convenience methods to create shapes.
var circle = two.makeCircle(72, 100, 50);
var rect = two.makeRectangle(213, 100, 100, 100);
 
// The object returned has many stylable properties:
circle.fill = '#FF8660';
circle.stroke = 'orangered'; // Accepts all valid css color
circle.linewidth = 5;

rect.fill = 'rgb(0, 200, 255)';
rect.opacity = 0.55;
rect.noStroke();

// Don't forget to tell two to render everything
// to the screen
two.update();

setInterval(() => {
  circle.linewidth++;
  //rect.opacity = rect.opacity - 0.05;

  two.update();
  }, 5)

var x : Two.Anchor = new Two.Anchor()
