function palindrome(str) {
  var string = str.toLowerCase();
  var args = [...string]
  
var fil = args.filter(function (us){
  return us.match(/[A-Za-z0-9]/)
});
var filled = [...fil]
var fill = fil.reverse();
var  filleds = filled.join("");
 var   fills = fill.join("");
    if(filleds == fills){
      return (true)
    }
    else{
      return (false)
    }
     
}



palindrome("ay");
palindrome("eye");
palindrome("_eye");
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("five|_/|four");
