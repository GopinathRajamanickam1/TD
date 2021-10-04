var arr = [3, 'a' ,'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; 
let count =0;
const ans   = function(arr, value){
 
      for(let i in arr){
          if(arr[i]===value){
              count = count +1;
             
                      }
      }
      console.log(count);
}

ans(arr, 3);

let j =(a)=>a;
console.log(j("Gopi"))


var m  = [33, 34];
console.log(...m);
console.log(m[0]);