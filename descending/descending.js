// descending

x = parseInt(prompt("Enter 1st numer"));
console.log('1st value:',x);
y = parseInt(prompt("Enter 2nd numer"));
console.log('2nd value:',y); 
z = parseInt(prompt("Enter 3rd numer"));
console.log('3rd value:',z);

    if ((x>y)&&(x>z)){ 
        console.log(x); 
         if (y>z){ 
           console.log(y);
           console.log(z); 
       } 
   } 
   else if ((y>z)&&(y>x)){ 
       console.log(y);
        if (z>x){ 
           console.log(z);
           console.log(x);
     } 
   } 
   else if ((z>x)&&(z>y)){ 
       console.log(z);
        if (x>y){ 
           console.log(x);
           console.log(y);
        } 
       }