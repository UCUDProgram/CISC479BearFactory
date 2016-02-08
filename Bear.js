function Bear(bType, bOutfit, baccessory, bCost ){
    this.bearType = bType;
    this.bearOutfit = bOutfit;
    this.bearAccessory = baccessory;
    this.bearCost = bCost;
};

function Bear(){
  this.bearType = null;
  this.bearOutfit = null;
  this.bearAccessory = [];
  this.bearCost = 0;
};

 

Bear.prototype.updateAccessory = function(acc){
  this.bearAccessory.push(acc);  
};

Bear.prototype.bearContainer = function(){
  var bearString = "";
  bearString.concat(this.bearType);
  this.bearAccessory.forEach(function (anAcc){
      bearString.concat(anAcc.description);
  })
  return bearString;
};