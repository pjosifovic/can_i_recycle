// Array that holds Disposal keys and objects
var disposalArray = []

// Constructor for Disposal function
var Disposal = function(heading, symbol, text) {
  this.heading = heading;
  this.symbol = symbol;
  this.text = text;
};

// Prototype to render page
Disposal.prototype.render = function() {
  // To come
};

// Builds new Disposal objects and add them to the array
var addDisposal = function(heading, symbol, text) {
    var newDisposal = new Disposal(heading, symbol, text);
    disposalArray.push([heading,newDisposal]);
};

// Populate Disposal objects
addDisposal('recycle','img/recycle_bin.png','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod');
addDisposal('compost','img/compost_bin.png','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod');
addDisposal('hazard','img/hazard_bin.png','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod');
addDisposal('trash','img/trash_bin.png','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod');
