//fromWhere
module.exports = function fromWhere(carRegNumber){
    if(carRegNumber == 'CY'){
      return 'Bellville';
    }else if(carRegNumber == 'CJ'){
      return 'Paarl';
    }else if(carRegNumber == 'CA'){
      return 'Cape Town';
    }else if(carRegNumber == 'CC'){
      return 'Some other place!';
    }
  }