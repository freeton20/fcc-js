function checkCashRegister(price, cash, cid) {
    let m = {
        "ONE HUNDRED":100,
        "TWENTY": 20,
        "TEN": 10,
        "FIVE": 5,
        "ONE": 1,
        "QUARTER": 0.25,
        "DIME": 0.1,
        "NICKEL": 0.05,
        "PENNY": 0.01
    };
    let c ={
        "ONE HUNDRED": cid[8][1],
        "TWENTY": cid[7][1],
        "TEN": cid[6][1],
        "FIVE": cid[5][1],
        "ONE": cid[4][1],
        "QUARTER": cid[3][1],
        "DIME": cid[2][1],
        "NICKEL": cid[1][1],
        "PENNY": cid[0][1]
    }
    let changeValue = cash - price;

    let changeNominal = [];

    function counter(nominal){
        if(changeValue === 0){
            return 0;
        }
        let need = Math.floor(changeValue/m[nominal]);
        if(need === 0){
            return;
        }
        let have = c[nominal]/m[nominal];
        if(have > need){
            changeValue -=need*m[nominal];
            changeValue = Math.round(changeValue*100)/100;
            changeNominal.push([nominal,need*m[nominal]]);
            return need;
        }else{
            changeValue -=have*m[nominal];
            changeValue = Math.round(changeValue*100)/100;
            changeNominal.push([nominal,have*m[nominal]]);
            return have;
        }
    }
   for(let n in m){
       counter(n);
   }
    if(changeValue === 0){
        let amountInWallet = cid.reduce(function(sum,el){
            return Math.round((sum + el[1])*100)/100;
        },0);
        if(amountInWallet === (cash-price)){
            return {status: "CLOSED", change: cid}
        }
        return {status: "OPEN", change: changeNominal}
    }else{
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);