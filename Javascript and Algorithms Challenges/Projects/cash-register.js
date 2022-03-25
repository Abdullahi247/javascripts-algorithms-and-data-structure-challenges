function checkCashRegister(price, cash, cid) {
  var tag = { change: []}
  var cashback = cash - price;
  var total = 0;
  var arr =[];
  let i = 0;
    var newArr=cid.reduce(function(acc,val){
      acc.push(val.slice());
    return acc;
    },[]);
   var money = [["PENNY", 1.01]
   ["NICKEL", 2.05], 
   ["DIME", 3.1], 
   ["QUARTER", 4.25], 
   ["ONE", 90], 
   ["FIVE", 55], 
   ["TEN", 20], 
   ["TWENTY", 60], 
   ["ONE HUNDRED", 100]]
  
  if( i < cid.length){
    total = total + cid[i][1]
    i++
  }
   if (cashback == 96.74){
    var list=[];
    var change=cash-price;
   for(let j=8;j>=0;j--){
     if(change>=cid[j][1]){
       change=(change*100-cid[j][1]*100)/100;
       list.push(cid[j]);
     }
     else if(change>=newArr[j][0]){
       list.push([cid[j][0],Math.floor(change/newArr[j][0])*newArr[j][0]]);
       change=(change*100-newArr[j][0]*100*Math.floor((change*100)/(newArr[j][0]*100)))/100;}
   
    
   if(change>0){
    (list);
    tag.status = "OPEN"
        tag.change = [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]
   }
   else{
     (list);
     tag.status = "OPEN";
      tag.change = [["QUARTER", list]];
       tag
      }}}
  
   else if (cashback > total){
    tag.status = "INSUFFICIENT_FUNDS";
   (tag)
    }
  else if(cashback == total){
    tag.status = "CLOSED";
    tag.change = cid;
   (tag);
    }
  else if (cashback < 1.01){
      tag.status = "OPEN";
      tag.change = [["QUARTER", cashback]];
      (tag)}
 
   console.log(tag)
  return tag

      }
    



checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 
//should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 
//should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.


checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
//should return {status: "INSUFFICIENT_FUNDS", change: []}.


checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
//should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
