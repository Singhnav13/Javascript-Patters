/*

*
**
***
****
*****
****
***
**
*

*/

let star = "";
let n = 5;


for (i=1; i<=n; i++) {
  for (j=1; j<=i; j++) {
    star += "*";
  }
  star += "\n";
}

for (i=1; i<=n-1; i++) {
  for (j=4; j>=i; j--) {
    star += "*";
  }
  star += "\n";
}

console.log(star);