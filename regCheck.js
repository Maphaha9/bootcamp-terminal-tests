//regCheck
module.exports = function regCheck(reg,regLocation){
    var regNo = reg.endsWith(regLocation);
    return regNo;
  }