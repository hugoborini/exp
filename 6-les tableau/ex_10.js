function sort_table(tab) {
  var i = 0;
  while (i < tab.length) {
    if (tab[i] > tab[i + 1]) {
      tab[i + 1] = tab[i];
      i++;
    } else {
      i++;
    }
  }
  console.log(tab);
}
