function output(number, power) {
  while (power > 1) {
    number = number * number;
    power--;
    miam();
  }
  function miam() {
    output();
  }
  console.log(number);
}
output(2, 3);

// Ca fonctionne mais c'est beaucoup trop barbare dsl
