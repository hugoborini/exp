//Créer une fonction prenant en paramètres deux chiffres T1 et T2 et retournant un tableau de taille T1 contenant dans chaque case un tableau de taille T2 remplit de chiffres aléatoires
function tablebi(a, b) {
  let arraya = [];
  let arrayb = [];
  for (let i = 0; i < a; i++) {
    for (let index = 0; index < b; index++) {
      arrayb.push(Math.round(Math.random() * 10));
    }
    arraya.push(arrayb);
    arrayb = [];
  }
  console.log(arraya);
}

tablebi(3, 4);
