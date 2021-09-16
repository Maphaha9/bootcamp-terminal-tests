//totalPhoneBill
module.exports = function totalPhoneBill(item){
    const str = item.split(',');
    let bill = 0;
    for (var i = 0; i < str.length; i++){
      var items = str[i].trim();
      if(items == "call"){
        bill += 2.75;
      }else if(items == "sms"){
        bill += 0.65;
      }
    }
    return 'R' + bill.toFixed(2);
  }
