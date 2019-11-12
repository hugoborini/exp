function output(number, power) {
  while (power > 1) {
    power = power - 1;
    number = number * number;

    miam();
  }
  function miam() {
    console.log(number);
    output();
  }
}
output(18, 2);

// Ca fonctionne mais c'est beaucoup trop barbare dsl
