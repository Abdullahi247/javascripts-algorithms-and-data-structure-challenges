function rot13(str) {
var newWord = "";
let excaper = str;
if(str.includes("?")){
   str = str.slice(0 , 9)
}
var alphabeth = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ?';
for(let i = 0; i < str.length; i++){
  var total = alphabeth.search(str[i]);
  total +=13;
  if(alphabeth.indexOf(str[i]) == -1){
    newWord = newWord.concat(str[i])
  }
  else if(total < 26){
  newWord = newWord.concat(alphabeth[total])
  }
  else if(total > 25){
  total = total - 26;
  newWord = newWord.concat(alphabeth[total])
  }
}
if(excaper.includes("?")){
  newWord = newWord.concat("?")
}
return (newWord);

}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?")
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")
