// Write a function called 'countLetters' that takes a string parameter and returns an object that contains a count of each letter in the string.

function countLetters(str)
{
    let counter = {};
    for(let i of str){
      counter[i]=count(str,i);  
    }
    function count(str,e){
        let c=0;
        for(let i=0; i<str.length; i++){
            if(e==str[i]){
                c+=1;
            }
        }
        return c;
    }
    return counter;
}

console.log(countLetters("Satabdisundar Subijaya Behera"));