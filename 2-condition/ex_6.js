var anne = 2001;

if ((anne % 4 == 0 && anne % 100 != 0) || anne % 400) {
  console.log("bisextile");
} else {
  console.log("non-bisextile");
}
