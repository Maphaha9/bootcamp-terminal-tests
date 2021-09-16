//findItemsOver20
module.exports = function findItemsOver20 (listItem){
    const list = [];
    for (var i = 0; i < listItem.length; i++){
      if(listItem[i].qty>20) list.push(listItem[i])
    }
    console.log(list);
    return list;
  }