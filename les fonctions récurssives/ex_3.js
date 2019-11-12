/*function output(number) {
  var facteur = number;
  while (facteur > 1) {
    facteur--;

    miam();
  }
  console.log(number);
  function miam() {
    number = number * facteur;
    output();
  }
}
output(5) */

// Ca fonctionne mais c'est beaucoup trop barbare dsl
var facteur = 1;
function output(number) {
  if (number > 1) {
    facteur = facteur * number;
    output(number - 1);
  }
  return facteur;
}

console.log(output(4));
