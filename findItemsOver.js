//findItemsOver
module.exports = function findItemsOver(listItem, itemList){
    const list1 = [];
    for (var i in listItem){
      if(listItem[i].qty>itemList) list1.push(listItem[i])
    }
    console.log(list1);
    return list1;
  }