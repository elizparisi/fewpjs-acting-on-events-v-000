// Your code here

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    let rightNumbers = dodger.style.right.replace("px", "");
    let right = parseInt(rightNumbers, 10);
 
    dodger.style.right = `${left + 1}px`;
  }
});