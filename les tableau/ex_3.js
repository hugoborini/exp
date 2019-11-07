function fill_random(nbr) {
  var i = 0;
  var tab = [];
  while (i < nbr) {
    tab.push(Math.floor(Math.random() * 1000));
    i++;
  }
  console.log(tab);
}

fill_random(19);
