//1 - Créer une fonction qui prend en paramètre un chiffre X et qui affiche X fois ‘coucou’ via une fonction récursive
function coucou(n) {
  if (n > 0) {
    console.log("coucou");
    coucou(n - 1);
  }
}
coucou(3);
