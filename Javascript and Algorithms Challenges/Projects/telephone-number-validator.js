function telephoneCheck(str) {

var space = str.split(" ").join("");

if(space.length == 10){
   return (true)
}

else if(space.match(/\b1/) && space.lastIndexOf("-") ==  9 && space.indexOf("(") == 1 && space.lastIndexOf(")") ==  5){
   return (true)
}
else if(space.lastIndexOf("-") ==  8 && space.indexOf("(") == 0 && space.lastIndexOf(")") ==  4){
   return (true)
}
else if(space.lastIndexOf("-") ==  7 && space.indexOf("-") == 3){
   return (true)
}
else if(space.match(/\b1/) && space.lastIndexOf("-") ==  8 && space.indexOf("-") == 4){
   return (true)
}
else if(space.match(/\b1/) && space.length ==  11){
  return (true)
}
else{
  return (false)
}
  
 // console.log(st);
  //console.log(strt)
  console.log(space)
  //console.log(space.lastIndexOf("-"))
  
}


telephoneCheck("555-555-5555") //should return a boolean.

telephoneCheck("1 555-555-5555") //should return true.

telephoneCheck("1 (555) 555-5555") //should return true.

telephoneCheck("5555555555") //should return true.

telephoneCheck("555-555-5555") //should return true.

telephoneCheck("(555)555-5555") //should return true.

telephoneCheck("1(555)555-5555") //should return true.

telephoneCheck("555-5555") //should return false.

telephoneCheck("5555555") //should return false.

telephoneCheck("1 555)555-5555") //should return false.

telephoneCheck("1 555 555 5555") //should return true.

telephoneCheck("1 456 789 4444") //should return true.

telephoneCheck("123**&!!asdf#") //should return false.

telephoneCheck("55555555") //should return false.

telephoneCheck("(6054756961)") //should return false

telephoneCheck("2 (757) 622-7382") //should return false.

telephoneCheck("0 (757) 622-7382") //should return false.

telephoneCheck("-1 (757) 622-7382") //should return false

telephoneCheck("2 757 622-7382") //should return false.

telephoneCheck("10 (757) 622-7382") //should return false.

telephoneCheck("27576227382") //should return false.

telephoneCheck("(275)76227382") //should return false.

telephoneCheck("2(757)6227382") //should return false.

telephoneCheck("2(757)622-7382") //should return false.

telephoneCheck("555)-555-5555") //should return false.

telephoneCheck("(555-555-5555") //should return false.

telephoneCheck("(555)5(55?)-5555") //should return false.
