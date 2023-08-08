// Write a program that takes a string and prints out the number of vowels in the string.

function countVowels(str){
  let counter=0;
    for(s of str){
        if(s==='a' || s==='e' ||s==='i' ||s==='o' ||s==='u'){
            counter++;
        }
    }
    return counter;
}
console.log(countVowels('Hii everyone'));