var bear = new Bear();

// Create Bear Body Types
var grizzly = new bearBase("Grizzly", "An angry Grizzly Bear", 15);
var panda = new bearBase("Panda","A cute panda bear", 3);
var yogi = new bearBase("Yogi", "A picnic basket obsesed bear that does no harm",5);
var paddington = new bearBase("Paddington", "An adventurous bear that can cause some trouble", 10);
var emBear = new bearBase("Hustler", "A bad bear that will cut you if you challenge him", 20);
// Add All Bear Body's to the Bear Body Array
var bearBodyTypes = [grizzly,panda,yogi,paddington,emBear];

// Create Individual Accessory
var pimpStick = new accessory("Pimp Stick", "Used to keep the other bears in line",5);
var fryingPan = new accessory("Frying Pan","Knocks out anyone without them thinking twice", 4);
var chainNecklace = new accessory("Chain Necklace", "Look like a tough bear with this around your neck",7);
var foamedMouth = new accessory("Foamed Mouth","Look like a rabid-animal that can kill at any time", 12);
var shive = new accessory("Shive", "A shive will back up what you are saying, if people don't believe you",10);
var gun = new accessory("Gun", "A gun will make you look tougher",20);
var goldTeeth = new accessory("Gold Teeth", "Gold teeth will make you look like a tough bear", 8);

// Add All Individual Accessories to the Accessory Array
var Accessory = [pimpStick,fryingPan,chainNecklace,foamedMouth,shive,gun,goldTeeth];

var selectedBodyType = "";
var bearCost = 0;



// Controller

var updateBearBody = function(){
    var bodType = document.getElementById('bearBodyType').value;
    console.log(bearCost);
    console.log(getCurrentBearBodyCost());
    var currBearcost = getCurrentBearBodyCost();
    console.log(currBearcost);
    // removeBearBodyCost();
    // updateBearBodyCost();
    console.log(bearCost);
    setBearBody(bodType);
    console.log(selectedBodyType);
    // console.log(bearCost);
    display_bearCost();
};

var setBearBody = function (newBearBody){
    bearBodyTypes.forEach(function (aBear){
       if (aBear.name == newBearBody){
            selectedBodyType = aBear.name;
            console.log(aBear.cost);
            console.log(bearCost);
            // updateTotalCost(aBear.cost,true);
            console.log(bearCost);
       }
    });
};

// var updateBearBodyCost = function(){
//     updateTotalCost(getCurrentBearBodyCost());
// };

var getCurrentBearBodyCost = function (){
  bearBodyTypes.forEach(function (aBearBody){
      if (aBearBody.name == selectedBodyType)
      return aBearBody.cost;
  });  
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

var display_bear_accessories = function(){
    bear.bearAccessory.forEach(function (acc){
        
    })
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
    var index_of_description = Accessory.indexOf(desc);
    if(index_of_description > -1){  
        Accessory.splice(index_of_description,1);
    }
};

var addDescription = function(desc){
    Accessory.push(desc);
};


// var updateDescription = function(){
    
// };


var updateTotalCost = function (updateCost){
        bearCost += updateCost;
};


var removeBearBodyCost = function (removeCost){
    bearCost -= removeCost;
};

// console.log(bear.bearCost);
// bear.UpdateCost(3);

// console.log(bear.bearCost);



var appStart = function(){
  display_bear_body_types(); 
  display_bearCost();
  
//   console.log(bearBodyTypes);
    
    // console.log(bearCost);
    // var bearTot = 9;
    // console.log(bearTot);
    // console.log(bearCost);
    // updateTotalCost(bearTot);
    // console.log(bearCost);
    // updateTotalCost(-bearTot);
    // console.log(bearCost);
    
    
    document.getElementById('bearBodyType').addEventListener('change', updateBearBody);
};

document.addEventListener("DOMContentLoaded", appStart);