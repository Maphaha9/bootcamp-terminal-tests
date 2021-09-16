//countAllFromTown
module.exports = function countAllFromTown(town){
    let counter = 0;
    const arry = town.split(',');
    for (var i = 0; i<arry.length; i++){
      const location = arry[i];
      if(location.startsWith('CL')){
        counter++;
      }else if(location.startsWith('CF')){
        counter++;
      }
    }
    return counter;
  }