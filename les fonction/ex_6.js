function error(nbr) {
  if (nbr < 0) {
    console.log(
      "<error> veuillez entrer un nombre positif afin de verifier si c'est un nombre premier"
    );
    //return 0;
  }
  //return 0;
}

function basic_check(nbr) {
  if (nbr == 1 || nbr == 2 || nbr == 3) {
    //console.log("premier");
    return 1;
  }
  if (nbr % 2 == 0) {
    //console.log("pas premier");
    return 2;
  }
  //return 0;
}

function ex_6(nbr) {
  var racine = Math.sqrt(nbr);

  //if (error(nbr) == 0) {
  //return 0;
  //}

  if (basic_check(nbr) == 1) {
    return 1;
  }
  if (basic_check(nbr) == 2) {
    return 2;
  }

  if (Number.isInteger(racine)) {
    //console.log("pas premier");
    return 2;
  }
  for (i = 2; i <= Math.sqrt(nbr); i = i + 1) {
    if (nbr % i == 0) {
      //console.log("pas premier");
      return 2;
    } else {
      //console.log("premier");
      return 1;
    }
  }
}

function ex_7(nbr) {
  while (nbr >= 0) {
    nbr = nbr - 1;
    //console.log(nbr);
    if (ex_6(nbr) == 1) {
      console.log(nbr);
    }
  }
}

ex_7(13);
