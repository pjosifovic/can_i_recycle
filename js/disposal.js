'use strict';

var itemArray = [];

var Item = function(name, parent, disposal, cityUrl) {
  this.name = name;
  this.parent = parent;
  this.disposal = disposal;
  this.cityUrl = cityUrl;
};

Item.prototype.render = function() {
  // To come
};

var addItem = function(name, parent, disposal, cityUrl) {
  var newItem = new Item(name, parent, disposal, cityUrl);
  itemArray.push([name,newItem]);
};

addItem('Corrugated Cardboard','Paper','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/Cardboard/CardboardCorrugated/index.htm');

// Array that holds Disposal keys and objects
var disposalArray = [];

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
