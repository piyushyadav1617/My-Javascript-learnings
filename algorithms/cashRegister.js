//First Method
function checkCashRegister(price, cash, cid) {
  const currencyValues = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  let totalCid = 0;
  for (let i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  }
  totalCid = totalCid.toFixed(2);

  let changeDue = cash - price;
  let change = [];

  if (changeDue > totalCid) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (changeDue.toFixed(2) === totalCid) {
    return { status: "CLOSED", change: cid };
  } else {
    for (let i = cid.length - 1; i >= 0; i--) {
      const currencyName = cid[i][0];
      const currencyTotal = cid[i][1];
      const currencyValue = currencyValues[currencyName];
      let currencyAmount = (currencyTotal / currencyValue).toFixed(2);
      let currencyToReturn = 0;

      while (changeDue >= currencyValue && currencyAmount > 0) {
        changeDue -= currencyValue;
        changeDue = changeDue.toFixed(2);
        currencyAmount--;
        currencyToReturn++;
      }

      if (currencyToReturn > 0) {
        change.push([currencyName, currencyToReturn * currencyValue]);
      }
    }

    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  }

  return { status: "OPEN", change };
}

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
//________________________________________________________________________________________________
//Another method
function checkCashRegister(price, cash, cid) {
const currencyValues = {
   "ONE HUNDRED": 100*100,
   "TWENTY": 20*100,
   "TEN": 10*100,
   "FIVE": 5*100,
   "ONE": 1*100,
   "QUARTER": 0.25*100,
   "DIME": 0.1*100,
   "NICKEL": 0.05*100,
   "PENNY": 0.01*100,
    
  };

  let change = cash*100-price*100;
  let totalCid =0;
  for(let elem of cid){
      totalCid+=elem[1]*100;}
  
  if(totalCid<change){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else if(totalCid==change){
    return {status: "CLOSED", change: cid}
  } else {
    let total =[];
    for(let elem of cid){ elem[1]=elem[1]*100}//just multiply all the nums by 100
       cid = cid.reverse();
      // console.log(cid)
      for(let elem of cid){
        let money =[elem[0],0]
        // console.log(money)
        while(change >= currencyValues[elem[0]] && elem[1]>0){
          change-= currencyValues[elem[0]];
          elem[1]-= currencyValues[elem[0]];
          money[1]+=currencyValues[elem[0]]/100;
        }
         if(money[1]>0){
             total.push(money)
         }
      }
      if(change>0) {return {status: "INSUFFICIENT_FUNDS", change: []};}
//       console.log({status: "OPEN", change: total})
      return {status: "OPEN", change: total};
  }
  
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
