function tab_max(tab) {
  var temp = 0;
  for (var i = 0; i < tab.length; i++) {
    if (temp < tab[i]) {
      temp = tab[i];
    }
  }
  return temp;
}

var max = tab_max([1, 2, 4, 5, 6, 7, 8]);
console.log(max);
