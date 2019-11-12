function fill_random_moy(nbr) {
  var i = 0;
  var tab = [];
  var somme = 0;
  while (i < nbr) {
    tab.push(Math.floor(Math.random() * 1000));
    somme = somme + tab[i];
    i++;
  }
  //console.log(tab);
  somme = somme / nbr;
  //console.log(somme);
  return somme;
}
