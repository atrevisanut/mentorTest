//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {

  reverseIt: function(string){
    return string.split('').reverse().join('')
  },

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: function(array){
  array.sort();
  for( var i = 1; i <= array.length; i ++){
    if(array[i]===array[i-1]){
      array.splice(i, 1);
      i--;
    }
  }
  return array;
},

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates
 //
  titleIt:function(str){
   var splitString = str.split(" ");
   for(var i=0; i<splitString.length; i++){
     var answer = splitString[i];
     var capLetter = answer.charAt(0).toUpperCase();
     answer = answer.slice(1,answer.length).toLowerCase();
     splitString[i] = capLetter.concat(answer);
   }
   str=splitString.join(' ');
   return str;
 },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter: function(string){
    var splitStr = string.split('');
    var vowels = 0;
    for(var i = 0; i<=splitStr.length; i++){
      if(splitStr[i] === 'a' ||splitStr[i] === 'e'||splitStr[i] === 'i'||splitStr[i] === 'o'||splitStr[i] === 'u'){
        vowels+=1;
      }
    }
    return vowels;
  },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime: function(n){
    var m=Math.sqrt(n);
     if(n < 2){
       return false;
     }
    for (var i=2; i<=m; i++){
      if (n%i === 0) return false;
    }
    return true;
 },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: "1020",

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: 'Hello World',
  log2: undefined
}
