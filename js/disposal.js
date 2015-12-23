'use strict';

// setting category to Paper for now, but we'll need a way to pass category fom recycle_this.html
var category = 'Paper';

// grab main div
var mainEl = document.getElementById('mainSection');

// item array
var itemArray = [];

// item constructor
var Item = function(name, parent, disposal, cityUrl) {
  this.name = name;
  this.parent = parent;
  this.disposal = disposal;
  this.cityUrl = cityUrl;
};

// item loader
var addItem = function(name, parent, disposal, cityUrl) {
  var newItem = new Item(name, parent, disposal, cityUrl);
  itemArray.push([name,newItem]);
};

// item data
addItem('Corrugated Cardboard','Paper','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/Cardboard/CardboardCorrugated/index.htm');
addItem('Pizza Boxes','Paper','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/ContainersBoxesCartons/PizzaBoxes/index.htm');
addItem('Stoves','Appliances and Household Items','resuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/Appliances/Stoves/index.htm');

// render items
var renderItems = function() {
  // make page heading
  var headingEl = document.createElement('h1');
  headingEl.appendChild(document.createTextNode(category));
  mainEl.appendChild(headingEl);
  // make unordered list
  var ulEl = document.createElement('ul');
  ulEl.addEventListener('click', renderDisposal);
  mainEl.appendChild(ulEl);
  // make list items
  for (var i = 0; i < itemArray.length; i += 1) {
    if (itemArray[i][1].parent === category) {
      var liEl = document.createElement('li');
      liEl.appendChild(document.createTextNode(itemArray[i][0]));
      ulEl.appendChild(liEl);
    };
  };
};

renderItems();

// disposal array
var disposalArray = [];

// disposal constructor
var Disposal = function(heading, symbol, text) {
  this.heading = heading;
  this.symbol = symbol;
  this.text = text;
};

// render disposables
function renderDisposal(item) {
  console.log('you clicked', item.target.innerHTML);
}

// disposable loader
var addDisposal = function(heading, symbol, text) {
    var newDisposal = new Disposal(heading, symbol, text);
    disposalArray.push([heading,newDisposal]);
};

// disposable data
addDisposal('recycle','img/recycle_bin.png','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod');
addDisposal('compost','img/compost_bin.png','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod');
addDisposal('hazard','img/hazard_bin.png','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod');
addDisposal('trash','img/trash_bin.png','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod');

// var renderDisposal = function() {
//   // console.log("in render disposal function");
//   while (mainEl.firstChild){
//       mainEl.removeChild(mainEl.firstChild);};
//   var headingEl = document.createElement('h1');
//   headingEl.appendChild(document.createTextNode(category));
//   mainEl.appendChild(headingEl);
//   // if class of the LI, recycleEl.class="recycle"
//   // while removeChild
//   // create <img src="img/recycle_bin">
// };
//
// var recycleEl = document.getElementsByClassName('recycle');
// var compostEl = document.getElementsByClassName('compost');
//
// function callingRecycle() {
//     // console.log('in the recycle event function');
//     for(var i = 0; i < recycleEl.length; i++) {
//         recycleEl[i].addEventListener('click', function() {
//           // console.log('in the recycle event listener');
//           renderDisposal();
//           // SOME FUNCTION!
//         });
//     };
// }
// callingRecycle();
//
// function callingCompost() {
//   // console.log('in the compost event function');
//   for(var i = 0; i < compostEl.length; i++) {
//     compostEl[i].addEventListener('click', function() {
//       // console.log('in the compost event listener');
//       renderDisposal();
//       // SOME FUNCTION!
//     });
//   };
// }
// callingCompost();
