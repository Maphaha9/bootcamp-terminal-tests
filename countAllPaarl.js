//countAllPaarl
module.exports = function countAllPaarl(paarl){
    let counter = 0;
    const fromPaarl = paarl.split(',');
    for ( var i = 0; i < fromPaarl.length; i++){
      let regPaarl = fromPaarl[i];
      if(regPaarl.includes('CJ')){
        counter++;
      }
    }
    console.log(counter);
    return counter;
  }