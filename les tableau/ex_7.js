function ex_7(tab) {
  var i = 0;
  var tab_tmp = [];
  while (i < tab.length) {
    if (tab[i] != 0) {
      tab_tmp.push(tab[i]);
    }
    i++;
  }
  return tab_tmp;
}

tab3 = ex_7([1, 0, 3, 0, 9, 8, 0, 4]);
console.log(tab3);
