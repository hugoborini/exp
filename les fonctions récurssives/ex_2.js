function output(x, power) {
  while (x > 0) {
    x--;
    console.log("coucou");
    miam();
  }
  function miam() {
    output();
  }
}
output(10, 3);
