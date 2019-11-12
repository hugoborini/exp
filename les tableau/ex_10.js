function compare(x, y) {
  return x - y;
}

function sort_table(tab) {
  tab.sort(compare);
  console.log(tab);
}
