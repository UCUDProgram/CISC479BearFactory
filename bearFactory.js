var bear = new Bear();

// Create Bear Body Types
var grizzly = new bearBase("Grizzly", "An angry Grizzly Bear", 15);
var panda = new bearBase("Panda","A cute panda bear", 3);
var yogi = new bearBase("Yogi", "A picnic basket obsesed bear that does no harm",5);
var paddington = new bearBase("Paddington", "An adventurous bear that can cause some trouble", 10);
var tedRux = new bearBase("Ruxton", "A bad bear that will cut you if you challenge him", 20);
// Add All Bear Body's to the Bear Body Array
var bearBodyTypes = [grizzly,panda,yogi,paddington,tedRux];

// Create Bear Outfits
var cheerleader = new outfit("Cheerleader", "You cheer your fellow bears to victory",8);
var doctor = new outfit("Doctor","You save bears from various bearfections",10);
var emt = new outfit("EMT","You rush to save your fellow bears, when trouble occurs",12);
var athlete = new outfit("Athlete", "You show what a bear can do in sports",15);
var mechanic = new outfit("Mechanic", "You show that bears can fix things and fix them well",14);
var lawyer = new outfit("Lawyer", "You show that a bear knows how to make sure the law protects all bears", 20);
var bearOutfit =[cheerleader,doctor,emt,athlete,mechanic,lawyer];

// Create Individual Accessory
var moustache = new accessory("Moustache", "Your moustache makes you look older than what you really are.  ",5);
var topHat = new accessory("Top Hat","This top Hat makes you look richer than your current financial status", 4);
var necklace = new accessory("Necklace", "Wearing this family heirloom makes you remember your gramndmother.  ",7);
var pomPoms = new accessory("Pom Poms","Use Pom-Poms to cheer your fellow bears and excite them.  ", 12);
var briefcase = new accessory("Briefcase", "Show how smart of a bear you are with a briefcase that holds everything you will need.  ",10);
var toolkit = new accessory("Tool Kit", "Fix any and everythin with this toolkit.  ",20);
var cleats = new accessory("Cleats", "Be prepared for action with these special cleats tha will work on any surface.  ", 8);

// Add All Individual Accessories to the Accessory Array
var accessory = [moustache,topHat,necklace,pomPoms,briefcase,toolkit,cleats];

var bearAccInv = [];
var selectedBodyType = null;
var bearCost = 0;
var selectedOutfit = null;
var bearString = "";

// Controller

var updateBearBody = function(){
    var bodType = document.getElementById('bearBodyType').value;
    removeBearBody();
    setBearBody(bodType);
    // setDesc();
    updateBearDesc();
    display_bearCost();
    display_description();
};

var setBearBody = function (newBearBody){
    bearBodyTypes.forEach(function (aBear){
       if (aBear.name == newBearBody){
            bear.bearType = aBear.name;
            addABearCost(aBear.cost);
            
       }});
};

var removeBearBody = function (){
  bearBodyTypes.forEach(function (aBearBody){
      if (aBearBody.name == bear.bearType)
        removeABearCost(aBearBody.cost);
  });  
};

var updateBearNameString = function(bearStr){
  bearString.concat(bearStr);
  console.log(bearString);
};


var updateBearOutfit = function(){
    var outfitType = document.getElementById('bearOutfit').value;
    removeBearOutfit();
    setBearOutfit(outfitType);
    display_bearCost();
    updateBearDesc();
    display_description();
};

var setBearOutfit = function (newBearOutfit){
    bearOutfit.forEach(function (aBearOutfit){
       if (aBearOutfit.name == newBearOutfit){
            bear.bearOutfit = aBearOutfit.name;
            addABearCost(aBearOutfit.cost);
       }});
};

var removeBearOutfit = function (){
  bearOutfit.forEach(function (aBearOutfit){
      if (aBearOutfit.name == bear.bearOutfit)
        removeABearCost(aBearOutfit.cost);
  });  
};

var updateBearAcc = function(){
  bear.bearAccessory = bearAccInv;  
};


var updateBearAccessoryList = function(name, boo){
    // var updateItem = document.getElementById(selectionID);
    // console.log(boo);
    if(boo){
        // Add the item to the Description array
        // update the Total Cost of the bear acc
        itemDetermine(name);
    } else {
        // Check to see if item is in the array
        // if in the array remove
        // Remove the cost of the bear acc
        inItemDesc(name);
    }
    updateBearAcc();
    console.log(bear.bearAccessory);
    updateBearDesc();
    display_description();
    display_bearCost();
};


var itemDetermine = function (aItem){
  accessory.forEach(function (anAcc){
    //   console.log(anAcc);
    //   console.log(aItem);
      if(anAcc.name == aItem){
        //   console.log(anAcc.name);
         bearAccInv.push(anAcc.name);
         addABearCost(anAcc.cost);
        //  console.log(bearAccInv);
      }});  
};

var inItemDesc = function(aItem){
  accessory.forEach(function (acc){
     if(acc.name == aItem){
         descCheck(acc.name,acc.cost);
     } 
  });  
};

var descCheck = function (name,cost){
  var index_of_item = bearAccInv.indexOf(name);
  console.log(index_of_item);
  if(index_of_item > -1){
      bearAccInv.splice(index_of_item, 1);
      removeABearCost(cost);
  }
//   console.log(bearAccInv);
};


var updateBearDesc = function(){
    typeString();
    outfitString();
    
    
    // bearString = setDesc();
    // console.log(bearString);
};

var typeString = function(){
  if(bear.bearName != null)
    bearString.concat(bear.bearType);
};

var outfitString = function(){
  if(bear.bearOutfit != null)
    bearString.concat(bear.bearOutfit);
};

var setDesc = function(){
    if (bear.bearType != null)
        var bearName = "Your bear is " + bear.bearType + ".  ";
    if (bear.bearOutfit != null)
        var bearOut = "Your bear's outfit is " + bear.bearOutfit + ".";
  
  var string = bearName.concat(bearOut);
  bearString = string;
  console.log(string);
  return string;
};


// View
var display_bear_body_types = function(){
    var $select = document.getElementById('bearBodyType');
    $select.innerHTML = '';
    bearBodyTypes.forEach(function (abearbody){
        var $option = document.createElement('option');
        $option.innerHTML = abearbody.name;
        $option.classList.add(abearbody.name);
        $select.appendChild($option);
    });
};

var display_bear_outfit = function(){
    var $select = document.getElementById('bearOutfit');
    $select.innerHTML = '';
    bearOutfit.forEach(function (abearOutfit){
        var $option = document.createElement('option');
        $option.innerHTML = abearOutfit.name;
        $option.classList.add(abearOutfit.name);
        $select.appendChild($option);
    });
};

var display_bear_accessories = function(){
    var $div = document.getElementById('accessory_options');
    $div.innerHTML = '';
    accessory.forEach(function (acc_option){
        var $chkbox = document.createElement('input');
        $chkbox.setAttribute('type','checkbox');
        $chkbox.setAttribute('value','false');
        $chkbox.setAttribute('name', acc_option);
        var $lbl = document.createElement('label');
        $lbl.innerHTML = acc_option.name;
        $chkbox.name = acc_option.name;
        $chkbox.addEventListener('change', function(ev){
            // Create a function that takes in the Item Name and the condition (true/false)
            // Will pass in this.name for name
            // Will pass in this.checked for boolean of checked or not
            var checkCheck = document.getElementById('this.name');
        //   alert(this.name + " is now " + this.checked); 
           updateBearAccessoryList(this.name,this.checked);
        });
        $div.appendChild($chkbox);
        $div.appendChild($lbl);
        
    })
};

var display_description = function(){
    var $p = document.getElementById('bear_desc');
    $p.innerHTML = '';
    var bearDescr = bearString;
    var $txt = document.createElement('p');
    $txt.innerHTML = bearDescr;
    $p.appendChild($txt);
};

var display_bearCost = function(){
    var $p =document.getElementById('cost_dis');
    $p.innerHTML = '';
    var costString = "The cost of the bear is " + bearCost;
    var $txt = document.createElement('p');
    $txt.innerHTML = costString;
    $p.appendChild($txt);
};

// Model
var removeDescription = function(desc){
    var index_of_description = bear.bearAccessory.indexOf(desc);
    if(index_of_description > -1){  
        bear.bearAccessory.splice(index_of_description,1);
    }
};

var addDescription = function(desc){
    bear.bearAccessory.push(desc);
};

// var updateDescription = function(){
// };

var addABearCost = function (updateCost){
        bearCost += updateCost;
};

var removeABearCost = function (removeCost){
    bearCost -= removeCost;
};


var appStart = function(){
  display_bear_body_types();
  display_bear_outfit();
  display_bear_accessories()
  display_bearCost();
  display_description();
  
    document.getElementById('bearBodyType').addEventListener('change', updateBearBody);
    document.getElementById('bearOutfit').addEventListener('change', updateBearOutfit);

};

document.addEventListener("DOMContentLoaded", appStart);