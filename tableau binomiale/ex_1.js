function array_2d(x) {
  var tab_2d = [];
  var tab2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (var i = 0; i < x; i++) {
    tab_2d.push(tab2);
  }
  console.log(tab_2d);

  return tab_2d;
}

array_2d(10);
