//transportFee
module.exports = function transportFee(fee){
    if(fee == 'morning'){
      return 'R20';
    }else if(fee == 'afternoon'){
      return 'R10';
    }else if(fee == 'nightshift'){
      return 'free' || 'for night shift return free';
    }
  }