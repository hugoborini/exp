// Créer une fonction qui répond oui ou non au fait que le paramètre donné soit un chiffre premier ou pas
function multi(p) {
  var i = 0;
  if (p > 0) {
    while (i <= 9) {
      i++;
      console.log(p, "x", i, "=", p * i);
    }
  } else console.log("error");
}
multi(-2);
