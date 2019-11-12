function fill_tab(x) {
  var i = 0;
  var tab = [];

  while (i < x) {
    tab.push(0);
    i++;
  }
  console.log(tab);
}

fill_tab(Math.floor(Math.random() * 20));
