// Créer une fonction qui répond oui ou non au fait que le paramètre donné soit un chiffre premier ou pas
var temp = 1;
function nbrePremier(n) {
  var i = 2;
  while (i <= n / i) {
    if (n % i == 0 && i != n) {
      console.log("NON");
      temp++;
      break;
    }
    i++;
  }
  if (temp == 1) {
    console.log("OUI");
  }
}
nbrePremier(40);
