var tab1 = [];
var tab2 = [];
var x = 5;

for (var i = 0; i < x; i++) {
  tab1.push(Math.floor(Math.random() * 100));
  tab2.push(Math.floor(Math.random() * 100));
}

var tab3 = tab1.concat(tab2);

console.log(tab3);
