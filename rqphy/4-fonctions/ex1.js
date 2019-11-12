// Créer une fonction qui répond oui ou non au fait que le paramètre donné soit un chiffre premier ou pass
function multi(p) {
  var i = 0;
  while (i <= 9) {
    i++;
    console.log(p, "x", i, "=", p * i);
  }
  return p;
}
multi(9);
