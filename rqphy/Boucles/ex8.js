//Bonus - Ecrire un programme détectant les nombres de Armstrong compris entre 0 et 999.
for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    for (var k = 0; k < 10; k++) {
      var nb1 = i * 100 + j * 10 + k;
      var nb2 = i * i * i + j * j * j + k * k * k;
      if (nb1 === nb2) {
        console.log(nb1);
      }
    }
  }
}
