// Créer une fonction retournant un tableau de dix cases chacune contenant un tableau de 10 cases remplit par la valeur de l’indice du premier tableau plus celui du deuxième
function pushInside(n) {
  let containerArray = [];
  let insideArray = [];
  let tempArray = [];
  for (let index = 0; index < n; index++) {
    insideArray.push(index);
  }
  for (let i = 0; i < n; i++) {
    tempArray = Array.from(insideArray, x => x + i);
    containerArray.push(tempArray);
  }
  console.log(containerArray);
}
pushInside(10);
