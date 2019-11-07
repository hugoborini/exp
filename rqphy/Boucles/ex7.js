var n = 0;
var un1 = 0;
var un2 = 1;
var tmp;

while (n < 20) {
  tmp = un1;
  un1 = un1 + un2;
  un2 = tmp;
  n++;
}
console.log(res);
