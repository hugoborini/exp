function table_5(nbr) {
  var i = 0;
  var n = 0;

  if (nbr < 0) {
    console.log("error");
    return 0;
  }

  while (i < 10) {
    n = nbr * (i + 1);
    i = i + 1;
    console.log(n);
  }
  return nbr;
}

table_5(-3);