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
addItem('Acoustic Ceiling Tile','construction','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/AcousticCeilingTile/index.htm');
addItem('Asbestos','construction','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/Asbestos/index.htm');
addItem('Asphalt Roofing','construction','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/AsphaltRoofing/index.htm');
addItem('Brick','construction','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/SoilRockBrickConcrete/Brick/index.htm');
addItem('Broken Glass','construction','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/GlassBroken/index.htm');
addItem('Carpet and Padding','construction','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/CarpetPadding/index.htm');
addItem('Clean Wood Waste','construction','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/WoodWastes/WoodWasteClean/index.htm');
addItem('Concrete and Asphalt','construction','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/SoilRockBrickConcrete/ConcreteAsphalt/index.htm');
addItem('Dirt and Soil','construction','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/SoilRockBrickConcrete/DirtSoil/index.htm');
addItem('Dirt and Soil - Contaminated','construction','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/SoilRockBrickConcrete/ContaminatedSoil/index.htm');
addItem('Drywall','construction','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/Drywall/index.htm');
addItem('Ducts','construction','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/Ducts/index.htm');
addItem('Fiberglass','construction','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/Fiberglass/index.htm');
addItem('Furnaces','construction','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/Furnaces/index.htm');
addItem('Gutters','construction','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/Gutters/index.htm');
addItem('Lumber and Boards','construction','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/WoodWastes/LumberBoards/index.htm');
addItem('Metal Sink and Tub Fixtures','construction','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/SinkTubsFixtures--Metal/index.htm');
addItem('Mixed C and D','construction','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/MixedCD/index.htm');
addItem('Paint -- Latex','construction','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/Paint--Latex/index.htm');
addItem('Paint -- Oil-Based','construction','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/Paint--Oil-Based/index.htm');
addItem('Painted or Treated Wood Waste','construction','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/WoodWastes/WoodWastePaintedTreated/index.htm');
addItem('Pallets','construction','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/WoodWastes/Pallets/index.htm');
addItem('Plant and Tree Salvage','construction','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/PlantTreeSalvage/index.htm');
addItem('Porcelain Toilets and Tubs','construction','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/PorcelainItems/index.htm');
addItem('Rock and Gravel','construction','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/SoilRockBrickConcrete/RockGravel/index.htm');
addItem('Salvaged Materials','construction','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/SalvagedMaterials/index.htm');
addItem('Trees and Brush','construction','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/WoodWastes/TreesBrush/index.htm');
addItem('Windows','construction','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/Windows/index.htm');
addItem('Wood Composite Paneling','construction','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/ConstructionDemolition/WoodWastes/PanelingCompositeWoods/index.htm');
addItem('Alkaline Batteries','electronics','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Electronics/Batteries/HouseholdAlkalineBatteries/index.htm');
addItem('Camera and Watch Batteries','electronics','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Electronics/Batteries/CameraWatchBatteries/index.htm');
addItem('CDs, DVDs and Floppies','electronics','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Electronics/CDsDVDsFloppies/index.htm');
addItem('Cell Phone Batteries','electronics','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Electronics/Batteries/CellPhoneBatteries/index.htm');
addItem('Cell Phones','electronics','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Electronics/CellPhones/index.htm');
addItem('Clock Radios','electronics','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Electronics/ClockRadios/index.htm');
addItem('Computer Batteries','electronics','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Electronics/Batteries/ComputerBatteries/index.htm');
addItem('Computer Monitors','electronics','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Electronics/ComputerMonitors/index.htm');
addItem('Computers and Laptops','electronics','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Electronics/ComputersLaptops/index.htm');
addItem('Copiers and Fax Machines','electronics','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Electronics/CopiersFaxMachines/index.htm');
addItem('E-readers','electronics','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Electronics/eReaders/index.htm');
addItem('E-waste','electronics','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Electronics/E-waste/index.htm');
addItem('Hearing Aid Batteries','electronics','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Electronics/Batteries/HearingAidBatteries/index.htm');
addItem('Lithium Batteries','electronics','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Electronics/Batteries/Lithium/index.htm');
addItem('Other Electronic Devices','electronics','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Electronics/OtherElectronicDevices/index.htm');
addItem('Printer Cartridges and Toner','electronics','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Electronics/PrinterCartridgesToner/index.htm');
addItem('Printers and Peripherals','electronics','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Electronics/PrintersPeripherals/index.htm');
addItem('Rechargeable Appliances','electronics','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Electronics/Batteries/RechargeableAppliances/index.htm');
addItem('Rechargeable Batteries','electronics','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Electronics/Batteries/RechargeableBatteries/index.htm');
addItem('Stereo and Audio Equipment','electronics','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Electronics/StereoAudioEquipment/index.htm');
addItem('Telephones -- landline','electronics','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Electronics/TelephonesLandline/index.htm');
addItem('Televisions','electronics','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Electronics/Televisions/index.htm');
addItem('VCRs','electronics','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Electronics/VCRs/index.htm');
addItem('Vehicle Lead-Acid Batteries','electronics','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Electronics/Batteries/VehicleLead-AcidBatteries/index.htm');
addItem('Bedding and Linens','fabric','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Fabric/Bedding/index.htm');
addItem('Carpet and Padding','fabric','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Fabric/CarpetPadding/index.htm');
addItem('Clothes and Shoes','fabric','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Fabric/Clothes/index.htm');
addItem('Dryer Sheets','fabric','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Fabric/DryerSheets/index.htm');
addItem('Fabric and Textiles','fabric','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Fabric/FabricTextiles/index.htm');
addItem('Reusable Shopping Bags','fabric','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Fabric/ReusableShoppingBags/index.htm');
addItem('Edible Food to Donate','food','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Food/EdibleFoodtoDonate/index.htm');
addItem('Food Scraps -- All','food','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Food/FoodScraps--All/index.htm');
addItem('Food Scraps -- Home Composting','food','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Food/FoodScraps--HomeComposting/index.htm');
addItem('Oils and Grease','food','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Food/FatsOilsGrease/index.htm');
addItem('Pet Food','food','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Food/PetFood/index.htm');
addItem('Vitamins','food','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Food/Vitamins/index.htm');
addItem('Aerosol Cans','food_packaging','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/MetalCansMetalLids/AerosolCans/index.htm');
addItem('Aluminum Foil and Trays','food_packaging','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/AluminumFoilTrays/index.htm');
addItem('Aseptic Tetra Pak','food_packaging','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/BoxesCartonsLiners/AsepticTetraPak/index.htm');
addItem('Berry Trays','food_packaging','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/PlasticStyrofoamContainers/BerryTrays/index.htm');
addItem('Beverage Cans','food_packaging','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/MetalCansMetalLids/BeverageCans/index.htm');
addItem('Bottle Caps and Jar Lids','food_packaging','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/BottlesJugs/BottleCapsJarLids/index.htm');
addItem('Bread Bags','food_packaging','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/BagsPouches/BreadBags/index.htm');
addItem('Butter Boxes','food_packaging','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/BoxesCartonsLiners/ButterBoxes/index.htm');
addItem('Butter Wrappers','food_packaging','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/ButterWrappers/index.htm');
addItem('Cardboard Boxes','food_packaging','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/PaperCardboard/CardboardBoxes/index.htm');
addItem('Cereal and Cracker Boxes','food_packaging','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/BoxesCartonsLiners/CerealCrackerBoxes/index.htm');
addItem('Chip Bags','food_packaging','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/BagsPouches/ChipBags/index.htm');
addItem('Clam Shell Containers','food_packaging','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/PlasticStyrofoamContainers/ClamShellContainers/index.htm');
addItem('Coffee and Soft Drink Lids','food_packaging','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/PlasticStyrofoamContainers/Lids-DeliCoffeeSoftdrink/index.htm');
addItem('Coffee Cups','food_packaging','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/HotCoffeeCups/index.htm');
addItem('Coffee Filters','food_packaging','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/CoffeeFilters/index.htm');
addItem('Compostable Bags','food_packaging','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/BagsPouches/CompostableBags/index.htm');
addItem('Compostable Food Service Items','food_packaging','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/CompostableEatingWare/index.htm');
addItem('Corks','food_packaging','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/Corks/index.htm');
addItem('Egg Cartons','food_packaging','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/EggCartons/index.htm');
addItem('Foam Egg Cartons','food_packaging','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/PlasticStyrofoamContainers/EggCartons/index.htm');
addItem('Food Box Liners','food_packaging','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/BagsPouches/FoodBoxLiners/index.htm');
addItem('Frozen Food Boxes','food_packaging','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/BoxesCartonsLiners/FrozenFoodBoxes/index.htm');
addItem('Glass Bottles and Jars','food_packaging','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/GlassBottlesJars/index.htm');
addItem('Grocery Bags','food_packaging','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/BagsPouches/GroceryBags/index.htm');
addItem('Ice Cream Cartons','food_packaging','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/BoxesCartonsLiners/IceCreamCartons/index.htm');
addItem('Juice Box','food_packaging','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/BoxesCartonsLiners/JuiceBox/index.htm');
addItem('Juice Pouches','food_packaging','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/BagsPouches/JuicePouches/index.htm');
addItem('Lids - Can','food_packaging','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/Lids/CanLids/index.htm');
addItem('Lids - Plastic','food_packaging','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/Lids/Lids-Plastic/index.htm');
addItem('Margarine and Yogurt Tubs','food_packaging','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/PlasticStyrofoamContainers/TubsMargerineYogurt/index.htm');
addItem('Meat and Food Trays','food_packaging','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/PlasticStyrofoamContainers/MeatFishTrays/index.htm');
addItem('Microwave Popcorn Bags','food_packaging','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/BagsPouches/Microwavepopcornbags/index.htm');
addItem('Milk and Juice Cartons','food_packaging','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/BoxesCartonsLiners/MilkJuiceCartons/index.htm');
addItem('Nut, Potato Chip and Coffee Canisters','food_packaging','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/BoxesCartonsLiners/Nutcoffeecanisters/index.htm');
addItem('Paper Berry Baskets','food_packaging','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/BoxesCartonsLiners/PaperBerryBaskets/index.htm');
addItem('Paper Egg Cartons','food_packaging','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/PaperCardboard/PaperEggCartons/index.htm');
addItem('Paper Plates and Cups','food_packaging','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/PaperCardboard/PaperCupsCoffeeeCups/index.htm');
addItem('Pet Food Bags','food_packaging','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/BagsPouches/PetFoodBags/index.htm');
addItem('Pizza Boxes','food_packaging','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/BoxesCartonsLiners/PizzaBoxes/index.htm');
addItem('Plastic - No Recycle Symbol','food_packaging','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/BagsPouches/PlasticNoRecycleSymbol/index.htm');
addItem('Plastic Cups and Utensils','food_packaging','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/PlasticStyrofoamContainers/PlasticCupsUtensils/index.htm');
addItem('Plastic Milk or Juice Jug','food_packaging','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/BottlesJugs/PlasticMilkJuiceJug/index.htm');
addItem('Plastic Peanut Butter Jars','food_packaging','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/PlasticStyrofoamContainers/PlasticJars/index.htm');
addItem('Plastic Water and Soda Bottles','food_packaging','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/BottlesJugs/PlasticBottlesWaterSoda/index.htm');
addItem('Produce and Bulk Food Bags','food_packaging','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/BagsPouches/ProduceBulkFoodBags/index.htm');
addItem('Soiled or Greasy Cardboard','food_packaging','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/PaperCardboard/CardboardSoiledorGreasy/index.htm');
addItem('Soup Box','food_packaging','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/BoxesCartonsLiners/SoupBox/index.htm');
addItem('Steel and Tin Cans and Lids','food_packaging','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/MetalCansMetalLids/SteelTinCansLids/index.htm');
addItem('Take-Out Containers','food_packaging','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/BoxesCartonsLiners/Take-OutContainers/index.htm');
addItem('Tupperware','food_packaging','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/PlasticStyrofoamContainers/Tupperware/index.htm');
addItem('Waxed Cardboard','food_packaging','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/PaperCardboard/CardboardWaxed/index.htm');
addItem('Waxed Paper','food_packaging','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/PaperCardboard/WaxedPaper/index.htm');
addItem('Ziploc Bags','food_packaging','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/FoodPackaging/BagsPouches/ZiplocBags/index.htm');
addItem('Auto Glass','glass_ceramics','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/GlassCeramics/CarGlass/index.htm');
addItem('Broken Glass','glass_ceramics','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/GlassCeramics/GlassBroken/index.htm');
addItem('Ceramic Mugs, Plates and Bowls','glass_ceramics','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/GlassCeramics/MugsPlatesBowls/index.htm');
addItem('Drinking Glasses','glass_ceramics','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/GlassCeramics/DrinkingGlasses/index.htm');
addItem('Eyeglasses','glass_ceramics','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/GlassCeramics/EyeGlasses/index.htm');
addItem('Fluorescent Light Bulbs','glass_ceramics','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/GlassCeramics/FluorescentLights/index.htm');
addItem('Glass and Ceramic Household Items','glass_ceramics','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/GlassCeramics/GlassCeramicHouseholdItems/index.htm');
addItem('Glass Bottles and Jars','glass_ceramics','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/GlassCeramics/GlassBottlesJars/index.htm');
addItem('Halogen and Xenon Light Bulbs','glass_ceramics','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/GlassCeramics/LightbulbsHalogenXenon/index.htm');
addItem('Incandescent Light Bulbs','glass_ceramics','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/GlassCeramics/IncandescentLightBulbs/index.htm');
addItem('LED Light Bulbs','glass_ceramics','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/GlassCeramics/LightbulbsLED/index.htm');
addItem('Mercury Thermometers','glass_ceramics','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/GlassCeramics/MercuryThermometers/index.htm');
addItem('Mirrors','glass_ceramics','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/GlassCeramics/Mirrors/index.htm');
addItem('Window and Picture Glass','glass_ceramics','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/GlassCeramics/WindowPictureGlass/index.htm');
addItem('Aerosol Cans','hazardous_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/CompressedGasContainers/AerosolCans/index.htm');
addItem('Ammunition, Guns and Fireworks','hazardous_items','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/AmmunitionGunsFireworks/index.htm');
addItem('Anti-Freeze','hazardous_items','caution','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/LiquidsHouseholdSupplies/Anti-Freeze/index.htm');
addItem('Asbestos','hazardous_items','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/Asbestos/index.htm');
addItem('Bleach','hazardous_items','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/LiquidsHouseholdSupplies/Bleach/index.htm');
addItem('Brake and Transmission Fluid','hazardous_items','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/LiquidsHouseholdSupplies/BrakeTransmissionFluid/index.htm');
addItem('Cleaning Supplies','hazardous_items','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/LiquidsHouseholdSupplies/CleaningSupplies/index.htm');
addItem('Contaminated Soil','hazardous_items','hazmat','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/ContaminatedSoil/index.htm');
addItem('Cooking Oil','hazardous_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/LiquidsHouseholdSupplies/CookingOil/index.htm');
addItem('Fiberglass','hazardous_items','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/Fiberglass/index.htm');
addItem('Fire Extinguishers','hazardous_items','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/CompressedGasContainers/FireExtinguishers/index.htm');
addItem('Fluorescent Light Bulbs','hazardous_items','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/FluorescentLights/index.htm');
addItem('Gasoline','hazardous_items','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/LiquidsHouseholdSupplies/Gasoline/index.htm');
addItem('Glues and Adhesives','hazardous_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/LiquidsHouseholdSupplies/GluesAdhesives/index.htm');
addItem('Helium Tanks','hazardous_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/CompressedGasContainers/HeliumTanks/index.htm');
addItem('Hobby Chemicals','hazardous_items','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/LiquidsHouseholdSupplies/HobbyChemicals/index.htm');
addItem('Medicine','hazardous_items','hazmat','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/Medicine/index.htm');
addItem('Mercury Thermometers and Items','hazardous_items','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/MercuryThermometersItems/index.htm');
addItem('Motor Oil','hazardous_items','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/LiquidsHouseholdSupplies/MotorOil/index.htm');
addItem('Motor Oil Containers','hazardous_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/MotorOilContainers/index.htm');
addItem('Needles and Syringes','hazardous_items','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/NeedlesSyringes/index.htm');
addItem('Oil Filters','hazardous_items','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/OilFilters/index.htm');
addItem('Oil Tanks','hazardous_items','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/OilTanks/index.htm');
addItem('Oxygen and Acetylene Tanks','hazardous_items','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/CompressedGasContainers/OxygenAcetyleneTanks/index.htm');
addItem('Paint -- Latex','hazardous_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/LiquidsHouseholdSupplies/Paint--Latex/index.htm');
addItem('Pesticides','hazardous_items','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/Pesticides/index.htm');
addItem('Pool and Spa Chemicals','hazardous_items','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/LiquidsHouseholdSupplies/PoolSpaChemicals/index.htm');
addItem('Printer Cartridges and Toner','hazardous_items','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/PrinterCartridgesToner/index.htm');
addItem('Propane Tanks','hazardous_items','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/CompressedGasContainers/PropaneTanks/index.htm');
addItem('Small Gas Canisters','hazardous_items','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/CompressedGasContainers/GasCanistersSmall/index.htm');
addItem('Smoke Detectors','hazardous_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/SmokeDetectors/index.htm');
addItem('Solvents','hazardous_items','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/HazardousItems/LiquidsHouseholdSupplies/Solvents/index.htm');
addItem('Air Conditioners and Heat Pumps','household_items','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/Appliances/AirConditionersHeatPumps/index.htm');
addItem('Ashes -- Fireplace and Briquettes','household_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/Ashes/index.htm');
addItem('Bed Frames','household_items','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/BedFrames/index.htm');
addItem('Bicycles and Bike Parts','household_items','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/BicyclesBikeParts/index.htm');
addItem('Candles','household_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/Candles/index.htm');
addItem('Carpet and Padding','household_items','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/CarpetPadding/index.htm');
addItem('Child Car Seats','household_items','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/ChildCarSeats/index.htm');
addItem('Clothes and Shoes','household_items','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/ClothesShoes/index.htm');
addItem('Dryer Sheets','household_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/DryerSheets/index.htm');
addItem('Fluorescent Light Bulbs','household_items','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/FluorescentLightBulbs/index.htm');
addItem('Flushable Wipes','household_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/FlushableWipes/index.htm');
addItem('Garden Hoses','household_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/GardenHoses/index.htm');
addItem('Halogen and Xenon Light Bulbs','household_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/LightbulbsHalogenXenon/index.htm');
addItem('Holiday Lights','household_items','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/LightsChristmas/index.htm');
addItem('Household Furniture','household_items','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/HouseholdFurniture/index.htm');
addItem('Incandescent Light Bulbs','household_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/LightbulbsFluorescent/index.htm');
addItem('Lawn Mowers and Power Equipment','household_items','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/LawnMowersPowerEquipment/index.htm');
addItem('LED Light Bulbs','household_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/LightbulbsLED/index.htm');
addItem('Mattresses and Futons','household_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/MatressesFutons/index.htm');
addItem('Metal Sink and Tub Fixtures','household_items','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/SinkTubsFixtures--Metal/index.htm');
addItem('Microwaves','household_items','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/Microwaves/index.htm');
addItem('Office Furniture and Equipment','household_items','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/OfficeFurnitureEquipment/index.htm');
addItem('Other Large Appliances','household_items','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/Appliances/OtherLargeAppliances/index.htm');
addItem('Paint -- Oil-Based','household_items','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/Paint--Oil-Based/index.htm');
addItem('Pet Food','household_items','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/PetFood/index.htm');
addItem('Pet Waste and Litter','household_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/PetWasteLitter/index.htm');
addItem('Plastic Clothes Hangers','household_items','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/PlasticClothesHangers/index.htm');
addItem('Plastic Outdoor Furniture','household_items','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/PlasticOutdoorFurniture/index.htm');
addItem('Porcelain Toilets and Tubs','household_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/PorcelainItems/index.htm');
addItem('Printer Cartridges and Toner','household_items','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/PrinterCartridgesToner/index.htm');
addItem('Refrigerators and Freezers','household_items','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/Appliances/RefrigeratorsFreezers/index.htm');
addItem('Reusable Shopping Bags','household_items','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/ReusableShoppingBags/index.htm');
addItem('Small Household Appliances','household_items','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/Appliances/SmallHouseholdAppliances/index.htm');
addItem('Smoke Detectors','household_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/SmokeDetectors/index.htm');
addItem('Stoves','household_items','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/Appliances/Stoves/index.htm');
addItem('Telephones -- landline','household_items','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/TelephonesLandline/index.htm');
addItem('Toys and Sporting Goods','household_items','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/ToysSportingGoods/index.htm');
addItem('Washers and Dryers','household_items','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/Appliances/WashersDryers/index.htm');
addItem('Water Heaters','household_items','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/Appliances/WaterHeaters/index.htm');
addItem('Window Blinds','household_items','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/WindowBlinds/index.htm');
addItem('Aerosol Cans','metals','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/Cans/AerosolCans/index.htm');
addItem('Aluminum','metals','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/MetalsbyType/Aluminum/index.htm');
addItem('Aluminum Foil','metals','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/FromtheKitchen/AluminumFoil/index.htm');
addItem('Barrels and Drums','metals','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/BarrelsDrums/index.htm');
addItem('Beverage Cans','metals','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/Cans/BeverageCans/index.htm');
addItem('Bicycles and Bike Parts','metals','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/BicyclesBikeParts/index.htm');
addItem('Can Lids','metals','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/Cans/CanLids/index.htm');
addItem('Cast Iron','metals','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/MetalsbyType/CastIron/index.htm');
addItem('CO2 Chargers','metals','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/CompressedGasContainers/CO2Chargers/index.htm');
addItem('Copper, Bronze and Brass','metals','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/MetalsbyType/CopperBronzeBrass/index.htm');
addItem('Fire Extinguishers','metals','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/CompressedGasContainers/FireExtinguishers/index.htm');
addItem('Foil Pie Pans','metals','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/FromtheKitchen/FoilPiePans/index.htm');
addItem('Gold, Silver, etc.','metals','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/MetalsbyType/GoldSilverEtc/index.htm');
addItem('Hand Tools','metals','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/HandTools/index.htm');
addItem('Helium Tanks','metals','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/CompressedGasContainers/HeliumTanks/index.htm');
addItem('Iron and Steel','metals','recyce','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/MetalsbyType/IronSteel/index.htm');
addItem('Jar Lids','metals','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/FromtheKitchen/JarLids/index.htm');
addItem('Jewelry and Coins','metals','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/JewelryCoins/index.htm');
addItem('Keys','metals','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/SmallMetalItems/Keys/index.htm');
addItem('Lawn Mowers and Power Equipment','metals','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/LawnMowersPowerEquipment/index.htm');
addItem('Lead','metals','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/MetalsbyType/Lead/index.htm');
addItem('License Plates','metals','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/LicensePlates/index.htm');
addItem('Microwaves','metals','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/FromtheKitchen/Microwaves/index.htm');
addItem('Oxygen and Acetylene Tanks','metals','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/CompressedGasContainers/OxygenAcetyleneTanks/index.htm');
addItem('Paint Cans','metals','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/Cans/PaintCans/index.htm');
addItem('Pots and Pans','metals','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/FromtheKitchen/PotsPans/index.htm');
addItem('Propane Tanks','metals','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/CompressedGasContainers/PropaneTanks/index.htm');
addItem('Scrap Metal','metals','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/MetalsbyType/ScrapMetal/index.htm');
addItem('Screws, Nails, Nuts and Bolts','metals','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/SmallMetalItems/ScrewsNailsNutsBolts/index.htm');
addItem('Silverware','metals','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/FromtheKitchen/Silverware/index.htm');
addItem('Small Appliances','metals','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/FromtheKitchen/SmallAppliances/index.htm');
addItem('Small Gas Canisters','metals','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/CompressedGasContainers/GasCanistersSmall/index.htm');
addItem('Stainless Steel','metals','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/MetalsbyType/StainlessSteel/index.htm');
addItem('Steel and Tin Cans','metals','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/Cans/SteelTinCans/index.htm');
addItem('Window Blinds','metals','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/WindowBlinds/index.htm');
addItem('Wine Bottle Foil','metals','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/FromtheKitchen/WineBottleFoil/index.htm');
addItem('Wire and Cable','metals','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/WireCable/index.htm');
addItem('Wire Clothes Hangers','metals','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/MetalandMetalItems/WireClothesHangers/index.htm');
addItem('Bubble Pack Envelopes','paper','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/PaperPrintedReading/EnvelopesBubblepack/index.htm');
addItem('Butter Boxes','paper','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/ContainersBoxesCartons/ButterBoxes/index.htm');
addItem('Cardboard Boxes','paper','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/Cardboard/CardboardBoxes/index.htm');
addItem('Cereal and Cracker Boxes','paper','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/ContainersBoxesCartons/CerealCrackerBoxes/index.htm');
addItem('Coffee Cups','paper','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/ContainersBoxesCartons/PaperCupsCoffeeCups/index.htm');
addItem('Corrugated Cardboard','paper','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/Cardboard/CardboardCorrugated/index.htm');
addItem('Envelopes','paper','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/PaperPrintedReading/EnvelopeswithWindows/index.htm');
addItem('Facial Tissue','paper','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/Misc.Paper/FacialTissue/index.htm');
addItem('Flushable Wipes','paper','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/Misc.Paper/FlushableWipes/index.htm');
addItem('Foamcore','paper','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/Cardboard/Foamcore/index.htm');
addItem('Food Box Liners','paper','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/ContainersBoxesCartons/FoodBoxLiners/index.htm');
addItem('Food-soiled Paper','paper','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/Food-soiledpaper/index.htm');
addItem('Gift Wrap','paper','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/Misc.Paper/GiftWrap/index.htm');
addItem('Greeting Cards','paper','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/PaperPrintedReading/GreetingCards/index.htm');
addItem('Hardback Books','paper','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/PaperPrintedReading/BooksHardback/index.htm');
addItem('Ice Cream Cartons','paper','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/ContainersBoxesCartons/IceCreamCartons/index.htm');
addItem('Junk Mail','paper','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/PaperPrintedReading/JunkMail/index.htm');
addItem('Laundry Detergent Boxes','paper','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/ContainersBoxesCartons/LaundryDetergentBoxes/index.htm');
addItem('Magazines','paper','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/PaperPrintedReading/Magazines/index.htm');
addItem('Milk and Juice Cartons','paper','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/ContainersBoxesCartons/MilkJuiceCartons/index.htm');
addItem('Napkins','paper','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/Misc.Paper/Napkins/index.htm');
addItem('Newspapers','paper','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/PaperPrintedReading/Newspapers/index.htm');
addItem('Notebooks - Spiral Bound','paper','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/Misc.Paper/Notebooks-SpiralBound/index.htm');
addItem('Office Paper','paper','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/PaperPrintedReading/OfficePaper/index.htm');
addItem('Paper Bags','paper','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/Misc.Paper/PaperBags/index.htm');
addItem('Paper Berry Baskets','paper','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/ContainersBoxesCartons/PaperBerryBaskets/index.htm');
addItem('Paper Egg Cartons','paper','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/ContainersBoxesCartons/PaperEggCartons/index.htm');
addItem('Paper Plates and Cups','paper','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/Misc.Paper/PaperPlatesCups/index.htm');
addItem('Paper Punch Holes','paper','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/Misc.Paper/PaperPunchHoles/index.htm');
addItem('Paper Towel Rolls','paper','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/Misc.Paper/PaperTowelRolls/index.htm');
addItem('Paper Towels','paper','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/Misc.Paper/PaperTowels/index.htm');
addItem('Paperback Books','paper','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/PaperPrintedReading/BooksPaperback/index.htm');
addItem('Pet Food Bags','paper','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/Misc.Paper/PetFoodBags/index.htm');
addItem('Phone Books','paper','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/PaperPrintedReading/PhoneBooks/index.htm');
addItem('Photographs','paper','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/PaperPrintedReading/Photographs/index.htm');
addItem('Pizza Boxes','paper','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/ContainersBoxesCartons/PizzaBoxes/index.htm');
addItem('Receipts','paper','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/PaperPrintedReading/Receipts/index.htm');
addItem('Shredded Paper -- Confetti','paper','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/Misc.Paper/ShreddedPaper--Confetti/index.htm');
addItem('Shredded Paper -- Cross-Cut','paper','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/Misc.Paper/ShreddedPaper--Cross-Cut/index.htm');
addItem('Shredded Paper -- Long','paper','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/Misc.Paper/ShreddedPaper--Long/index.htm');
addItem('Soiled or Greasy Cardboard','paper','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/Cardboard/CardboardSoiledorGreasy/index.htm');
addItem('Tissue Boxes','paper','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/ContainersBoxesCartons/TissueBoxes/index.htm');
addItem('Tyvek Envelopes','paper','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/PaperPrintedReading/EnvelopesTyvek/index.htm');
addItem('Waxed Cardboard','paper','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/Cardboard/CardboardWaxed/index.htm');
addItem('Waxed Paper','paper','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/Misc.Paper/WaxedPaper/index.htm');
addItem('6-pack Plastic Rings','plastic','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/FoodBeverageContainers/6-packPlasticRings/index.htm');
addItem('Aspirin Containers','plastic','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Non-FoodContainers/AspirinContainers/index.htm');
addItem('Berry Trays','plastic','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/FoodBeverageContainers/BerryTrays/index.htm');
addItem('Biodegradable Foam Peanuts','plastic','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/MailPackaging/BiodegradableFoamPeanuts/index.htm');
addItem('Blister Packages','plastic','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/FoodBeverageContainers/BlisterPackages/index.htm');
addItem('Bottle Caps','plastic','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Non-FoodContainers/BottleCaps/index.htm');
addItem('Bread Bags','plastic','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Bags/BreadBags/index.htm');
addItem('Bubble Pack Envelopes','plastic','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/MailPackaging/EnvelopesBubblepack/index.htm');
addItem('Bubble Wrap','plastic','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Misc.Plastic/BubbleWrap/index.htm');
addItem('Buckets','plastic','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Non-FoodContainers/Buckets/index.htm');
addItem('CD and DVD Cases','plastic','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Misc.Plastic/CDCases/index.htm');
addItem('CDs, DVDs and Floppies','plastic','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Misc.Plastic/CDsDVDsFloppies/index.htm');
addItem('Chip Bags','plastic','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Bags/ChipBags/index.htm');
addItem('Clam Shell Containers','plastic','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/FoodBeverageContainers/ClamShellContainers/index.htm');
addItem('Clothes Hangers','plastic','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Misc.Plastic/ClothesHangers/index.htm');
addItem('Corks','plastic','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Misc.Plastic/Corks/index.htm');
addItem('Cups and Utensils','plastic','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Styrofoam/CupsUtensils/index.htm');
addItem('Disposable Diapers','plastic','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Misc.Plastic/DisposableDiapers/index.htm');
addItem('Dry Cleaner Bags','plastic','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Bags/DryCleanerBags/index.htm');
addItem('Eyeglass Frames','plastic','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Misc.Plastic/EyeglassFrames/index.htm');
addItem('Foam Blocks and Packing Sheets','plastic','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/MailPackaging/FoamBlocksPackingSheets/index.htm');
addItem('Foam Egg Cartons','plastic','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Styrofoam/FoamEggCartons/index.htm');
addItem('Foam Packing Sheets','plastic','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Styrofoam/FoamPackingSheets/index.htm');
addItem('Food Box Liners','plastic','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Bags/FoodBoxLiners/index.htm');
addItem('Grocery and Shopping Bags','plastic','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Bags/GroceryBags/index.htm');
addItem('Laundry Detergent Jugs','plastic','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Non-FoodContainers/LaundryDetergentJugs/index.htm');
addItem('Lids - Plastic','plastic','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/FoodBeverageContainers/Lids-DeliCoffeeSoftdrink/index.htm');
addItem('Margarine and Yogurt Tubs','plastic','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/FoodBeverageContainers/TubsMargarineYogurt/index.htm');
addItem('Meat and Food Trays','plastic','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/FoodBeverageContainers/MeatFishTrays/index.htm');
addItem('Newspaper Bags','plastic','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Bags/NewspaperBags/index.htm');
addItem('Packing Peanuts','plastic','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/MailPackaging/PackingPeanuts/index.htm');
addItem('Pesticide Containers','plastic','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Non-FoodContainers/PesticideContainers/index.htm');
addItem('Plant Pots','plastic','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Misc.Plastic/PlantPots/index.htm');
addItem('Plastic - No Recycle Symbol','plastic','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Misc.Plastic/PlasticNoRecycleSymbol/index.htm');
addItem('Plastic Bottles','plastic','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Non-FoodContainers/PlasticBottles/index.htm');
addItem('Plastic Cups and Utensils','plastic','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/FoodBeverageContainers/PlasticCupsUtensils/index.htm');
addItem('Plastic Jugs','plastic','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Non-FoodContainers/PlasticJugs/index.htm');
addItem('Plastic Milk and Juice Jug','plastic','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/FoodBeverageContainers/PlasticMilkJuiceJug/index.htm');
addItem('Plastic Outdoor Furniture','plastic','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Misc.Plastic/PlasticOutdoorFurniture/index.htm');
addItem('Plastic Peanut Butter Jars','plastic','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/FoodBeverageContainers/PlasticJarsPeanutButter/index.htm');
addItem('Plastic Tubs','plastic','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Non-FoodContainers/PlasticTubs/index.htm');
addItem('Plastic Water and Soda Bottles','plastic','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/FoodBeverageContainers/PlasticBottlesWaterSoda/index.htm');
addItem('Prescription Drug Containers','plastic','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Non-FoodContainers/PrescriptionDrugContainers/index.htm');
addItem('Printer Cartridges','plastic','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Misc.Plastic/PrinterCartridges/index.htm');
addItem('Produce Bags','plastic','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Bags/ProduceBags/index.htm');
addItem('Recycle Numbers 1-7','plastic','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/WithRecycleNumbers/index.htm');
addItem('Reusable Shopping Bags','plastic','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Bags/ReusableShoppingBags/index.htm');
addItem('Shampoo Bottles','plastic','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Non-FoodContainers/ShampooCreamBottles/index.htm');
addItem('Shrink Wrap','plastic','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Misc.Plastic/ShrinkWrap/index.htm');
addItem('Styrofoam TM Blocks','plastic','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Styrofoam/StyrofoamTMBlocks/index.htm');
addItem('Take-Out Containers','plastic','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Styrofoam/Take-OutContainers/index.htm');
addItem('Tarps','plastic','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Misc.Plastic/Tarps/index.htm');
addItem('Toys and Sporting Goods','plastic','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Misc.Plastic/ToysSportingGoods/index.htm');
addItem('Tupperware','plastic','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/FoodBeverageContainers/Tupperware/index.htm');
addItem('Tyvek Envelopes','plastic','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/MailPackaging/EnvelopesTyvek/index.htm');
addItem('Vitamin Bottles','plastic','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Non-FoodContainers/VitaminBottles/index.htm');
addItem('Ziploc Bags','plastic','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Plastic/Bags/ZiplockBags/index.htm');
addItem('Anti-Freeze','vehicle','caution','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/VehiclesVehicle-related/Anti-Freeze/index.htm');
addItem('Auto Parts','vehicle','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/VehiclesVehicle-related/AutoParts/index.htm');
addItem('Bicycles and Bike Parts','vehicle','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/VehiclesVehicle-related/BicyclesBikeParts/index.htm');
addItem('Brake and Transmission Fluid','vehicle','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/VehiclesVehicle-related/BrakeTransmissionFluid/index.htm');
addItem('Child Car Seats','vehicle','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/VehiclesVehicle-related/ChildCarSeats/index.htm');
addItem('Engines, Motors and Car Parts','vehicle','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/VehiclesVehicle-related/EnginesMotorsandCarParts/index.htm');
addItem('Flares','vehicle','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/VehiclesVehicle-related/Flares/index.htm');
addItem('Gas Cans','vehicle','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/VehiclesVehicle-related/GasCans/index.htm');
addItem('Gasoline','vehicle','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/VehiclesVehicle-related/Gasoline/index.htm');
addItem('Lawn Mowers and Power Equipment','vehicle','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/VehiclesVehicle-related/LawnMowersPowerEquipment/index.htm');
addItem('License Plates','vehicle','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/VehiclesVehicle-related/licenseplates/index.htm');
addItem('Motor Oil','vehicle','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/VehiclesVehicle-related/MotorOil/index.htm');
addItem('Motor Oil Containers','vehicle','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/VehiclesVehicle-related/MotorOilContainers/index.htm');
addItem('Motor Oil Filters','vehicle','complicated','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/VehiclesVehicle-related/MotorOilFilters/index.htm');
addItem('Other Vehicle Fluids','vehicle','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/VehiclesVehicle-related/OtherVehicleFluids/index.htm');
addItem('Tires','vehicle','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/VehiclesVehicle-related/Tires/index.htm');
addItem('Vehicle Batteries','vehicle','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/VehiclesVehicle-related/VehicleBatteries/index.htm');
addItem('Vehicles','vehicle','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/VehiclesVehicle-related/Vehicles/index.htm');
addItem('Ashes -- Fireplace and Briquettes','wood','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Wood/Ashes/index.htm');
addItem('Christmas Trees','wood','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Wood/ChristmasTrees/index.htm');
addItem('Clean Wood Waste','wood','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Wood/WoodWasteClean/index.htm');
addItem('Corks','wood','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Wood/Corks/index.htm');
addItem('Painted or Treated Wood','wood','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Wood/PaintedTreatedWood/index.htm');
addItem('Pallets','wood','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Wood/Pallets/index.htm');
addItem('Reusable Lumber','wood','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Wood/ReusableLumber/index.htm');
addItem('Wood Scraps, Shavings, and Sawdust','wood','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Wood/WoodScrapsShavings/index.htm');
addItem('Christmas Trees','yard_waste','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/YardWaste/ChristmasTrees/index.htm');
addItem('Dirt and Soil','yard_waste','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/YardWaste/CleanSoil/index.htm');
addItem('Dirt and Soil - Contaminated','yard_waste','hazard','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/YardWaste/ContaminatedSoil/index.htm');
addItem('Grass Clippings and Sod','yard_waste','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/YardWaste/GrassClipingsSod/index.htm');
addItem('House Plants','yard_waste','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/YardWaste/HousePlants/index.htm');
addItem('Leaves and Non-Woody Yardwaste','yard_waste','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/YardWaste/LeavesNon-WoodyYardwaste/index.htm');
addItem('Pet Waste and Litter','yard_waste','trash','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/YardWaste/PetWasteLitter/index.htm');
addItem('Plant Pots','yard_waste','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/YardWaste/PlantPots/index.htm');
addItem('Plants and Tree Salvage','yard_waste','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/YardWaste/PlantsTreeSalvage/index.htm');
addItem('Rocks and Gravel','yard_waste','reuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/YardWaste/RocksGravel/index.htm');
addItem('Trees and Brush','yard_waste','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/YardWaste/TreesBrush/index.htm');
addItem('Wood Scraps and Shavings','yard_waste','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/YardWaste/WoodScrapsShavings/index.htm');

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
