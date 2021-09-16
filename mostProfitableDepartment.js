//mostProfitableDepartment
module.exports = function mostProfitableDepartment(salesData1){
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
  
  module.exports = function mostProfitableDay(salesData2){
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