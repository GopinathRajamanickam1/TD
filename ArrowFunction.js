/*Do the below programs in arrow functions
Print odd numbers in an array
Convert all the strings to title caps in a string array
Sum of all numbers in an array
Return all the prime numbers in an array
Return all the palindromes in an array*/

//Print ODd Numbers in an array 
const numberArray = [1, 2, 3, 4, 5, 6 , 7 , 8, 9 , 10];
const odd = (arr)=>{
    for(let i of arr){
        if(i%2!==0){
            console.log(i);
        }
    }
}
odd(numberArray);

//Title Caps Logic using arrow function
const strArray  = ['gopi', 'java8' , 'javascript'];
const TitleCase = (strArray)=>{
    for(let i of strArray){
        console.log(i.charAt(0).toUpperCase()+ i.substr(1).toLowerCase());
    }
}
TitleCase(strArray);

//Sum of all numbers in array 
let sum = 0;
//const res = numberArray.map(e=> {sum = sum +e; return sum; })
const res  = (numberArray)=> { 
     for(let i of numberArray)
    {
         sum = sum +i;
    }
    return sum;
}
console.log(res(numberArray));


//Prime Number
const prime = (number)=>{
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
    
    
}
prime(numberArray);

myobject = {1:"one","11":1, "name":"arun"};
console.log(myobject['name']);