const chalk = require('chalk');
const prompt = require('prompt-sync')();

//require functions to be tested
const greet = require('./greet');
const isFromBellville = require('./isFromBellive');
const regCheck = require('./regCheck');
const countRegNumber = require('./countRegNumber');
const isWeekday = require('./isWeekday');
const yearsAgo = require('./yearsAgo');
const countAllPaarl = require('./countAllPaarl');
const countAllFromTown = require('./countAllFromTown');
const transportFee = require('./transportFee');
const totalPhoneBill = require('./totalPhoneBill');
const fromWhere = require('./fromWhere');
const findItemsOver20 = require('./findItemsOver20');
const findItemsOver = require('./findItemsOver');
const mostProfitableDepartment = require('./mostProfitableDepartment');



//list of functions to be tested
//greet
function greet(name){
    if(!name){
        return 'name';
    }
        return "Hello, " + name;
}

//isFromBellville
function isFromBellville(location){
    return location.startsWith('CY');
}

//regCheck
function regCheck(reg,regLocation){
    var regNo = reg.endsWith(regLocation);
    return regNo;
  }
  
//countRegNumber
function countRegNumber(carNo){
    return carNo.split(',').length;
  }

//isWeekday
function isWeekday(day){
    return day == "Monday" ||  day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday";
}

//yearsAgo
function yearsAgo(theYear){
    //const year = new Date().getFullYear()-theYear;
    return new Date().getFullYear()-theYear;
  }

//countAllPaarl
function countAllPaarl(paarl){
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

//countAllFromTown
function countAllFromTown(town){
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

//transportFee
function transportFee(fee){
    if(fee == 'morning'){
      return 'R20';
    }else if(fee == 'afternoon'){
      return 'R10';
    }else if(fee == 'nightshift'){
      return 'free' || 'for night shift return free';
    }
  }

//totalPhoneBill
function totalPhoneBill(item){
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

//fromWhere
function fromWhere(carRegNumber){
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

//findItemsOver20
function findItemsOver20 (listItem){
    const list = [];
    for (var i = 0; i < listItem.length; i++){
      if(listItem[i].qty>20) list.push(listItem[i])
    }
    console.log(list);
    return list;
  }

//findItemsOver
  function findItemsOver(listItem, itemList){
    const list1 = [];
    for (var i in listItem){
      if(listItem[i].qty>itemList) list1.push(listItem[i])
    }
    console.log(list1);
    return list1;
  }

//mostProfitableDepartment
function mostProfitableDepartment(salesData1){
    const departmentList = {};
    for (var i = 0; i < salesData1.length; i++){
      const product = salesData1[i];
      departmentList[product.department] = 0;
    }
    
    for (var i = 0; i < salesData1.length; i++){
      const product = salesData1[i];
      var departments = departmentList[product.department];
      departments += product.sales;
      departmentList[product.department] = departments;
    }
    
    var currentSales = 0;
    var currentDepartment = ' ';
    for (const departmentSales in departmentList){
      const currentDepartmentSales = departmentList[departmentSales];
      if(currentDepartmentSales > currentSales){
        currentSales = currentDepartmentSales;
        currentDepartment = departmentSales;
      }
    }
    return currentDepartment;
  }
  
  function mostProfitableDay(salesData2){
    const profits = {};
    for (var i = 0; i < salesData2.length; i++){
      const product1 = salesData2[i];
      profits[product1.day] = 0;
    }
    
    for (var i = 0; i < salesData2.length; i++){
      const product1 = salesData2[i];
      var currentDay = profits[product1.day];
      currentDay += product1.sales;
      profits[product1.day] = currentDay;
    }
    
    var currentSales = 0;
    var currentDay = " ";
    for (const daySales in profits){
      const currentDaySales = profits[daySales];
      if (currentDaySales > currentSales){
        currentSales = currentDaySales;
        currentDay = daySales;
      }
    }
    return currentDay;
  }