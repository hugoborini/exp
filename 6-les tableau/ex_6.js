function fill_random_x(x) {
  var i = 0;
  var tab = [];
  while (i < x) {
    tab.push(Math.floor(Math.random() * 1000));
    i++;
  }
  //console.log(tab);
  return tab;
}

var tab2 = fill_random_x(19);
console.log(tab2);
