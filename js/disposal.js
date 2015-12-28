'use strict';

// global variables
var userCategory = window.location.hash.slice(1);
var userItem = '';
var mainEl = document.getElementById('mainInner');

// array for category keys and headings
var categoryKeys = [
  ['paper', 'Paper'],
  ['metal', 'Metal'],
  ['household_items', 'Household Items & Appliances'],
  ['construction', 'Construction'],
  ['electronics', 'Electronics'],
  ['fabrics', 'Fabrics'],
  ['food', 'Food'],
  ['food_packaing', 'Food Packaging'],
  ['glass_ceramics', 'Glass & Ceramics'],
  ['hazardous_items', 'Hazardous Items'],
  ['platic', 'Plastic'],
  ['vehicle', 'Vehicle'],
  ['wood', 'Wood'],
  ['yard_waste', 'Yard Waste'],
];

// populate category heading
var categoryHeading = '';
for (var i = 0; i < categoryKeys.length; i += 1) {
  if (userCategory === categoryKeys[i][0]) {
    categoryHeading = categoryKeys[i][1];
  };
};

// item array
var itemArray = [];

// item constructor
var Item = function(name, parentKey, disposal, cityUrl) {
  this.name = name;
  this.parentKey = parentKey;
  this.disposal = disposal;
  this.cityUrl = cityUrl;
};

// item loader
var addItem = function(name, parentKey, disposal, cityUrl) {
  var newItem = new Item(name, parentKey, disposal, cityUrl);
  itemArray.push([name,newItem]);
};

// item data
addItem('Air Conditioners and Heat Pumps','household_items','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/Appliances/AirConditionersHeatPumps/index.htm');
addItem('Other Large Appliances','household_items','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/Appliances/OtherLargeAppliances/index.htm');
addItem('Refrigerators and Freezers','household_items','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/Appliances/RefrigeratorsFreezers/index.htm');
addItem('Small Household Appliances','household_items','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/Appliances/SmallHouseholdAppliances/index.htm');
addItem('Stoves','household_items','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/Appliances/Stoves/index.htm');
addItem('Washers and Dryers','household_items','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/Appliances/WashersDryers/index.htm');
addItem('Water Heaters','household_items','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/Appliances/WaterHeaters/index.htm');
addItem('Ashes -- Fireplace and Briquettes','household_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/Ashes/index.htm');
addItem('Bed Frames','household_items','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/BedFrames/index.htm');
addItem('Bicycles and Bike Parts','household_items','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/BicyclesBikeParts/index.htm');
addItem('Candles','household_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/Candles/index.htm');
addItem('Carpet and Padding','household_items','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/CarpetPadding/index.htm');
addItem('Child Car Seats','household_items','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/ChildCarSeats/index.htm');
addItem('Clothes and Shoes','household_items','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/ClothesShoes/index.htm');
addItem('Dryer Sheets','household_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/DryerSheets/index.htm');
addItem('Flushable Wipes','household_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/FlushableWipes/index.htm');
addItem('Garden Hoses','household_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/GardenHoses/index.htm');
addItem('Household Furniture','household_items','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/HouseholdFurniture/index.htm');
addItem('Lawn Mowers and Power Equipment','household_items','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/LawnMowersPowerEquipment/index.htm');
addItem('Holiday Lights','household_items','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/LightsChristmas/index.htm');
addItem('Fluorescent Light Bulbs','household_items','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/FluorescentLightBulbs/index.htm');
addItem('Incandescent Light Bulbs','household_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/LightbulbsFluorescent/index.htm');
addItem('LED Light Bulbs','household_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/LightbulbsLED/index.htm');
addItem('Halogen and Xenon Light Bulbs','household_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/LightbulbsHalogenXenon/index.htm');
addItem('Mattresses and Futons','household_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/MatressesFutons/index.htm');
addItem('Microwaves','household_items','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/Microwaves/index.htm');
addItem('Office Furniture and Equipment','household_items','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/OfficeFurnitureEquipment/index.htm');
addItem('Paint -- Latex','household_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/Paint--Latex/index.htm');
addItem('Paint -- Oil-Based','household_items','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/Paint--Oil-Based/index.htm');
addItem('Pet Food','household_items','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/PetFood/index.htm');
addItem('Pet Waste and Litter','household_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/PetWasteLitter/index.htm');
addItem('Plastic Clothes Hangers','household_items','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/PlasticClothesHangers/index.htm');
addItem('Plastic Outdoor Furniture','household_items','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/PlasticOutdoorFurniture/index.htm');
addItem('Printer Cartridges and Toner','household_items','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/PrinterCartridgesToner/index.htm');
addItem('Reusable Shopping Bags','household_items','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/ReusableShoppingBags/index.htm');
addItem('Porcelain Toilets and Tubs','household_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/PorcelainItems/index.htm');
addItem('Metal Sink and Tub Fixtures','household_items','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/SinkTubsFixtures--Metal/index.htm');
addItem('Smoke Detectors','household_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/SmokeDetectors/index.htm');
addItem('Telephones -- landline','household_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/TelephonesLandline/index.htm');
addItem('Toys and Sporting Goods','household_items','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/ToysSportingGoods/index.htm');
addItem('Window Blinds','household_items','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/WindowBlinds/index.htm');
addItem('Acoustic Ceiling Tile','construction','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/AcousticCeilingTile/index.htm');
addItem('Asbestos','construction','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/Asbestos/index.htm');

// render items
var renderItems = function() {
  // make page heading
  var headingEl = document.createElement('h1');
  headingEl.appendChild(document.createTextNode(categoryHeading));
  mainEl.appendChild(headingEl);
  // make unordered list
  var ulEl = document.createElement('ul');
  ulEl.addEventListener('click', renderDisposal);
  mainEl.appendChild(ulEl);
  // make list items
  for (var i = 0; i < itemArray.length; i += 1) {
    if (itemArray[i][1].parentKey === userCategory) {
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

// disposal loader
var addDisposal = function(heading, symbol, text) {
  var newDisposal = new Disposal(heading, symbol, text);
  disposalArray.push([heading,newDisposal]);
};

// disposal data
addDisposal('recycle','img/recycle_bin.png','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod');
addDisposal('compost','img/compost_bin.png','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod');
addDisposal('hazard','img/hazard_bin.png','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod');
addDisposal('trash','img/trash_bin.png','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod');
addDisposal('reuse','img/reuse.png','Lorem lalalalallalalalalal');
addDisposal('complicated','','It\'s complicated');

// render disposal
function renderDisposal(item) {
  var disposalType = '';
  var itemUrl = '';
  // figure out disposal type and url for item
  for (var i = 0; i < itemArray.length; i += 1) {
    if (itemArray[i][0] === item.target.innerHTML) {
        disposalType = itemArray[i][1].disposal;
        itemUrl = itemArray[i][1].cityUrl;
    };
  };
  console.log(disposalType);
  console.log(itemUrl);

  // render to page
  for (var i = 0; i <disposalArray.length; i += 1) {
    if (disposalType === disposalArray[i][0]) {
      console.log(disposalType);
      mainEl.innerHTML = '';
      var headingEl = document.createElement('h2');
      var imgEl = document.createElement('img');
      var pEl = document.createElement('p');
      headingEl.appendChild(document.createTextNode(disposalArray[i][1].heading));

      if (disposalType === 'complicated') {
        // generate link
      } else {
        imgEl.src = disposalArray[i][1].symbol;
        pEl.appendChild(document.createTextNode(disposalArray[i][1].text));
        pEl.setAttribute("class", "disposalText");
      }

      mainEl.appendChild(headingEl);
      mainEl.appendChild(imgEl);
      mainEl.appendChild(pEl);
    };
  };
}
