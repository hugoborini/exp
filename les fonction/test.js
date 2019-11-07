function renvoi(nbr) {
  if (nbr < 18) {
    //console.log("tes pas majeur");
    return 1;
  }
  if (nbr >= 18) {
    //console.log("tes majeur");
    return 2;
  }
}

function main(tdd) {
  if (renvoi(tdd) == 2) {
    console.log("tupeux boir");
  }
  if (renvoi(tdd) == 1) {
    console.log("bois pas");
  }
}

main(12);
