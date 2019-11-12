function array_x_y(t1, t2) {
  tab_x = [];
  tab_y = [];
  for (var j = 0; j < t2; j++) {
    tab_y.push(Math.floor(Math.random() * 1000));
  }
  for (var i = 0; i < t1; i++) {
    tab_x.push(tab_y);
  }
  console.log(tab_x);
  return tab_x;
}

array_x_y(10, 10);
