/*    
    
    *
   **
  ***       
 ****
*****  

*/

let star = "";

function pattern(n) {

for (let i=1; i<=n; i++) {
  for (let j=1; j<=n-i; j++) {
     star += " ";
  }
  for(let k=1; k<=i; k++) {
    star += "*";
  }
  star += "\n";
}
return star;
}

console.log(pattern(5));



