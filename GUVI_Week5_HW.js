/*o the below programs in anonymous function & IIFE
Print odd numbers in an array
Convert all the strings to title caps in a string array
Sum of all numbers in an array
Return all the prime numbers in an array
Return all the palindromes in an array
Return median of two sorted arrays of same size
Remove duplicates from an array
Rotate an array by k times
https://medium.com/@reach2arunprakash/guvi-zen-class-javascript-warm-up-programming-problems-15973c74b87f
Do the below programs in arrow functions
Print odd numbers in an array
Convert all the strings to title caps in a string array
Sum of all numbers in an array
Return all the prime numbers in an array
Return all the palindromes in an array*/

//Anonymous function
const numberArray = [1, 2, 3, 4, 5, 6 , 7 , 8, 9 , 10];
const odd = function(arr){
       for(let i of arr){
           if(i%2!==0){
               console.log(i);
           }
       }
}

odd(numberArray);
//IIFE
(function(number){
    for(let i of number){
        if(i%2!==0){
            console.log(i);
        }
    }
})(numberArray)


const strArray  = ['gopi', 'java8' , 'javascript'];
//IIFE
(function(strArray){
    for(let i of strArray){
        console.log(i.charAt(0).toUpperCase()+ i.substr(1).toLowerCase());
    }
})(strArray)

const TitleCase = function(strArray){
    for(let i of strArray){
        console.log(i.charAt(0).toUpperCase()+ i.substr(1).toLowerCase());
    }
}
TitleCase(strArray);

//Sum of all Array in the number;
// IIEF
(function(number){
    let sum =0;
    for(let i of number){
       sum = sum + i;
       
    }
    console.log(sum)
})(numberArray)

const sumAllNumber = function(number){
    let sum =0;
    for(let i of number){
       sum = sum + i;
    }
    return sum;
}
console.log(sumAllNumber(numberArray))


// Prime Number 
const primeNum = function(number)
{
    for (let i = 2; i < number; i++){
      
        if (number % i === 0)
            return false;
        return "prime"
        
        
    } 

}
console.log(primeNum(10));

(function(number){
    let count =0;
    for (let i = 0; i < number.length; i++){
        for(let j=2; j<number[i]; j++){
            if (number[i] % j === 0){
                count = count +1; 
            }
        }

        if(count>=1){  count=0; }
        else if (count===0){ console.log(`${number[i]} is a prime Numebr`); }
    } 
    
    
})(numberArray);


//Array should return Palindorme number
const palindromeArray = [123421, 43, 4543454];

(function(number){
   
    for(let i of number){
        let palin = i; 
        let rem = 0; let sum =0;
        while(i>0){
             rem = Math.trunc(i % 10); 
             i = Math.trunc(i/ 10);
             sum  = (sum * 10) + rem;
        }
        if(sum===palin){
             console.log(`${sum} is a palindrome`);
        }
    }
    
    
})(palindromeArray);


//median of two sorted arrays of same size
const arr1 =[1, 2, 3, 5, 6,9];
const arr2=[1, 2, 3, 5, 6,9];
(function(arr1, arr2){
        
    const res = arr1.concat(arr2);
    res.sort(function(a,b){return (a-b)});
    const median = (res.length)/2;
    console.log(res[median] + res[median-1]);
    
})(arr1, arr2);


// REmove Duplicate number from the array 

const ar =[1, 2, 3, 5, 6,9, 9, 10, 11, 23, 23];
(function(arr1){
        
    const du = new Set(arr1);
    console.log(du);
    
})(ar);

//ArrRotation
const rotArr =[1, 2, 3, 5, 6,9, 9, 10, 11, 23, 23];
(function(arr1, num){
   if(arr1.length<num){
       console.log("Arraay size is greater than number");
   } else {
         let i = num;
         const na =[];  let j=0; let k=0;
         for(i; i<arr1.length; i++){
                na[j] = arr1[i];
                j++;
         }
             for(j ; j<arr1.length ;j++){
                na[j]= arr1[k];
                 if(k>=num){
                     break;
                 }
                k++
            
            }
            for(let abi of na){
                console.log(abi);
            }
                
         }
        
})(rotArr, 5);


