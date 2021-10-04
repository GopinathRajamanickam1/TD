const c = 5
let k = 1;
let line="1";
for(let i =0; i<c; i ++){
  if(i===0){
  console.log(line); }
  if(i>0){
       k = k+2;
    // console.log(line.repeat(k));
     for(let j=0 ; j<k; j++){
       console.log(line + '\xa0')
     }
  }
}

