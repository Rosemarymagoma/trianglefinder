
function triangleTracker() {

var lengthA = parseInt(document.getElementById('a').value);
var lengthB = parseInt(document.getElementById('b').value);
var lengthC = parseInt(document.getElementById('c').value);
var outputs = document.getElementById("outputs");
if(lengthA >= (lengthB+lengthC) || lengthB >= (lengthA+lengthC) || lengthC >= (lengthB+lengthA)) {
  alert("Not a triangle");
} else if (lengthA == lengthB && lengthB== lengthC && lengthC == lengthA) {
    alert("Equilateral");
} else if (lengthA == lengthB || lengthB == lengthC || lengthC == lengthA) {
    alert("Isosceles");
} else if (lengthA !== lengthB && lengthB !== lengthC) {
    alert("Scalene");
}

};
