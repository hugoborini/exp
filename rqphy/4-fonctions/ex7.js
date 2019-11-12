//Créer une fonction qui prend en paramètre un chiffre et qui affiche tout les chiffres premiers inférieur au paramètre
function nbrePremier(n) {
  var i = 2;
  while (i <= n / i) {
    if (n % i == 0 && i != n) {
      return 0;
    }
    i++;
  }
  return 1;
}

function verifnbrePremier(n) {
  while (n > 1) {
    if (nbrePremier(n) == 1) {
      console.log(n);
      n--;
    } else n--;
  }
}

verifnbrePremier(20);
