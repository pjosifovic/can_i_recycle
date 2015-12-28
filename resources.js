// Done: got this zipValidation working. After changing format.
// To Do: May need to add further validation for Seattle zip codes only. And throw errors/msg when zip codes with no shops are entered.
// function zipValidation(ziptake) {
//     var isValid = /^[0-9]{5}(?:-[0-9]{4})?$/.test(ziptake);
//     if (isValid)
//         alert('Valid Zip Code');
//     else {
//         alert('Invalid Zip Code, please use numeric characters only!');
//     }
// }





//testing:

var allZips = ['98101', '98102', '98103'];

// grab main div
var mainEl = document.getElementById('revealZip');

// item array
var allShops = [];

// item constructor
var Shop = function(name, address, url, info, zipCode) { //loader function
  this.name = name;
  this.address = address;
  this.url = url;
  this.info = info;
  this.zipCode = zipCode;
};

// item loader
var addShop = function(name, address, url, info, zipCode) {
  var newShop = new Shop(name, address, url, info, zipCode);
  allShops.push([name,newShop]);
};

//5th Avenue Boutique add: 1118 5th Ave url: https://www.ywcaworks.org/boutique, // info: 'Shop the YWCA's resale boutique in downtown Seattle for low prices on high-quality women's fashion.' zipCode 98101


// item data
addShop('Alexandras','412 Olive Way','http://www.alexandrasonline.com','Consignment boutique with racks of designer clothing & accessories for bargain hunters.', '98101');

addShop('2nd Hand Gala', '1501 Pike Pl', 'https://www.facebook.com/2ndHandGALA/', 'Used, Vintage & Consignment in Seattle', '98101');

addShop('5th Avenue Boutique', '1118 5th Ave', 'https://www.ywcaworks.org/boutique', 'YWCA\'s resale boutique in downtown Seattle for low prices on high-quality women\'s fashion.', '98101');


addShop('Lion Heart Book Store', 'Pike Place Market', 'https://www.facebook.com/pages/Lion-Heart-Book-Store/111488748887345', 'Used book store', '98101');

//Trish this is where you shall pass newest data
// shops from 98102 (only 2 shops)
addShop('Goodwill Capitol Hill', '115 Belmont Ave E, Seattle, WA', 'http://seattlegoodwill.org/shop/locations/capitol-hill', 'Long-standing nonprofit chain with a range of pre-owned clothing, furniture, housewares & more.', '98102');

addShop('Crossroads Trading Co.', '325 Broadway E, Seattle, WA 98102', 'http://crossroadstrading.com/', 'Consignment store with new & used clothing, shoes & accessories, including brand-name items.', '98102');

// shops from 98103 (6 shops)
addShop('Assistance League of Seattle', '1415 N 45th St, Seattle, WA 98103', 'http://www.seattle.assistanceleague.org/dcontact.cfm', 'thrift store selling donated apparel, home goods, furniture & books to benefit local charities', '98103');
addShop('Lucky Dog Clothing', '8201 Greenwood Ave N, Seattle, WA 98103', 'http://www.luckydog.clothing/','Premium Men\'s Thrift Shop Providing the world\'s most enjoyable and satisfying thrifting experience is our vision. Our mission is to continuously innovate, grow and streamline operations, while maintaining a commitment to excellent customer service, product, and company culture.', '98103');
addShop('Kids on 45th', '1720 N 45th St, Seattle, WA 98103', '(206) 633-5437', 'Consignment shop offering new & used clothing, toys, books & gear for kids (from newborn to age 10)', '98103');
addShop('Labels', '7220 Greenwood Ave N, Seattle, WA', 'http://www.labelsseattle.com/', 'Longtime consignment store specializing in women\'s & children\'s clothing, plus shoes & accessories.', '98103');
addShop('Beats and Bohos', '7200 Greenwood Ave N, Seattle, WA 98103','https://www.facebook.com/Beats-and-Bohos-243992609033008/','Eclectic & colorful outfit for records, plus vintage clothing, accessories, furniture & housewares.', '98103');
addShop('Atlas Clothing Co', '3509 Fremont Ave N Suite 200, Seattle, WA 98103', '(206) 323-0960', 'Roomy shop with a hip vibe offering vintage clothing, shoes & accessories for men & women.', '98103');

// Shops in 98104, (1 shop)
addShop('Trinity Thrift Shop','615 8th Ave, Seattle, WA 98104', 'http://www.trinityseattle.org/thrift-shop.aspx', 'Donations of clothing, household, personal and kitchen items are the usual donations. We cannot accept furniture and electronic items because the shop does not have space for them.', '98104');

//Shops in 98105 (5 shops)
addShop('Goodwill On The Ave','4552 University Way NE, Seattle, WA 98105','http://www.seattlegoodwill.org/', 'Long-standing nonprofit chain with a range of pre-owned clothing, furniture, housewares & more', '98105');
addShop('Buffalo Exchange', '4530 University Way NE, Seattle, WA 98105', 'http://www.buffaloexchange.com/', 'Hip chain that buys, sells, trades trendy vintage & used clothing & accessories for men & women.', '98105' );
addShop('Red Light Vintage & Costume', '4560 University Way NE, Seattle, WA 98105','http://www.redlightvintage.com/', 'This funky boutique stocks a broad array of vintage, new & rock \'n\' roll wear & costumes.', '98105');
addShop('Crossroads Trading Co.','4300 University Way NE, Seattle, WA 98105','http://crossroadstrading.com/', 'Consignment store with new & used clothing, shoes & accessories, including brand-name items', '98105');
addShop('Valley of Roses', '4748 University Way NE, Seattle, WA 98105', '(206) 522-6887', 'Thrift store with variety of clothing choice and accessories', '98105');

// shops in 98106 (2 shops)
//name, address, url, info, zipCode
addShop('COMMUNITY THRIFT STORE INC', '9828 15th Ave SW, Seattle, WA 98106','http://communitythriftstores.com/', 'For the Earth we divert reusable items from our overwhelmed landfills by recycling them to be reused by people who need them or feel that recycling is a great way to improve the health of our Earth.', '98106');
addShop('The Salvation Army Seattle White Center Corps & Community Center','9050 16th Ave SW, Seattle, WA 98106', 'http://www.salvationarmynw.org/', 'This is a large store with a variety of items and really nice furniture.', '98106');

//Shops in 98107 (5 shops)
addShop('R-Shoppe Thrift Store','5435 Ballard Ave NW, Seattle, WA 98107','http://www.yelp.com/biz/restyle-for-ryther-thrift-shop-seattle', 'Thrift shop associated with Ryther: ryther.org', '98107');
addShop('Goodwill Ballard', '6400 8th Ave NW, Seattle, WA 98107', 'http://www.seattlegoodwill.org/shop/locations/ballard', 'All reusable clothing and household items.**This site accepts e-waste.** All electronics including televisions and computer monitors measuring 19 INCHES OR LESS, desktop computers and laptops.', '98107');
addShop('Buffalo Exchange', '2232 NW Market St, Seattle, WA 98107', 'http://www.buffaloexchange.com/', 'Hip chain that buys, sells, trades trendy vintage & used clothing & accessories for men & women.', '98107');
addShop('Ballard Reuse', '1440 NW 52nd St, Seattle, WA 98107', 'http://ballardreuse.com/', 'Unadorned building supply store featuring a range of reclaimed, used & donated materials.', '98107');
addShop('Ballard Consignment Store', '5459 Leary Ave NW, Seattle, WA 98107','http://www.ballardconsignment.com/', 'Two-floor warehouse offering used furniture, art, lighting, housewares & clothing.', '98107');

//shops in 98109 (5 shops)
addShop('Goodwill South Lake Union', '411 Westlake Ave N, Seattle, WA 98109','http://seattlegoodwill.org/shop/locations/south-lake-union', 'Long-standing nonprofit chain with a range of pre-owned clothing, furniture, housewares & more.', '98109');
addShop('Modele\'s Home Furnishings', '964 Denny Way, Seattle, WA 98109','http://www.modelesfurniture.com/', 'Furniture consignment showroom featuring high-end modern & contemporary pieces, plus accessories.', '98109');
addShop('Reclaim Decor', '55 University St, Seattle, WA 98101', 'http://reclaimdecor.com/', 'Stylish consignment shop for brand-name used home furnishings, plus new artisan-made pieces.', '98109');
addShop('Salvation Army-Nw Division', '111 Queen Anne Ave N # 300, Seattle, WA 98109', 'http://www.salvationarmyusa.org/', 'Long-standing nonprofit chain with a range of pre-owned clothing, furniture, housewares & more.', '98109');
addShop('Forerunner Computer Recycling Seattle',
'1200 Westlake Ave N #1006, Seattle, WA 98109','http://www.forerunnerrecycling.com/seattle.html','Recyling Center', '98109');

//Shops in 98112 (1 Shop)
addShop('Take 2 New and Recycled Apparel', '430 15th Ave E, Seattle, WA 98112', 'http://take2seattle.com/', 'Since 1984, this stylish shop has featured new & consignment women\'s clothing & accessories', '98109');

//Shops in 98116 (6 shops)
addShop('Stop \'N Shop Thrift Store', '4504 California Ave SW, Seattle, WA 98116', 'http://stop-n-shopthrift.org/', 'Downsizing? Remember to donate reusable items ie kitchenware, tools, knickknacks, jewelry, linens, furniture, home decorations, clothing & accessories to the Senior Centers Stop‘n Shop.', '98116');
addShop('American Cancer Society','4535 California Ave SW, Seattle, WA 98116', 'http://www.cancer.org/','Your tax-deductible donation funds lifesaving research, treatment and care — and would mean so much to someone fighting cancer. Please donate today.', '98116');
addShop('Many Moons Trading Co', '4461 California Ave SW, Seattle, WA 98116', 'http://www.manymoonstradingco.com/', 'Small boutique carrying secondhand clothing for men, women & kids, plus handcrafted necklaces.', '98116');
addShop('Cherry Consignment', '4142 California Ave SW, Seattle, WA 98116','http://cherryconsign.com/', 'Consignment Shop This shop stocks previously worn clothing for men & women in a wide range of styles & sizes.', '98116');
addShop('Again & a Gain', '4832 California Ave SW, Seattle, WA 98116','http://www.kidfriendlyfootwear.com/home.php', 'Resource for new & consignment maternity, baby & kids\' clothes plus gear, outerwear & strollers.', '98116');
addShop('Suite Arrangements', '4722 Fauntleroy Way SW, Seattle, WA 98116', 'http://suitearrangements.com/', 'Consignment shop for gently used furniture, home goods & clothing, offering pick-up & delivery.','98116');

//shops in 98117
addShop('Value Village Thrift Store','8532 15th Ave NW, Seattle, WA','http://stores.valuevillage.com/wa/seattle/thrift-stores-seattle-wa-1023.html', 'Value Village, a Savers brand, is a for-profit, global thrift retailer offering great quality, gently used clothing, accessories and household goods. Our business model of purchasing, reselling and recycling gives communities a smart way to shop and keeps more than 650 million pounds of used goods from landfills each year', '98117');

//98118
addShop('Cheap Chickadee Thrift Store', '4645 S Holly St, Seattle, WA 98118', 'http://www.sessc.org/ThriftStore.aspx', 'Southeast Seattle Senior Center , fondly known as SESSC,  located in the Rainier Valley, has been a neighborhood activity center that addresses the social, educational, and health needs of aging adults and the community at large.','98118');
addShop('Suite Arrangements', '4722 Fauntleroy Way SW, Seattle, WA 98116', 'http://suitearrangements.com/', 'Consignment shop for gently used furniture, home goods & clothing, offering pick-up & delivery.', '98116');


//98119
addShop('Consign Design', '1630 15th Ave W #1, Seattle, WA 98119','http://www.consigndesign.us/', 'Consignment shop offering a variety of pre-owned contemporary & traditional furniture & home decor.', '98119');

//98121
addShop('Sell Your Sole Consignment Boutique', '2121 First Avenue, Suite 101, Seattle, WA 98121', 'http://www.sellyoursoleconsignment.com/','Upscale consignment store carrying gently-used, designer women\'s clothing in loft-like digs', '98121');
addShop('DEMI-LUNE', '2514 4th Ave, Seattle, WA 98121', 'http://www.lademi-lune.com/', 'Retailer offering a curated showcase of both new & consignment home furnishings, decor & accents.', '98121');

//98122
addShop('Le Frock Vintage', '613 E Pike St, Seattle, WA 98122',
'http://www.lefrockonline.com/', 'Consignment shop carrying vintage & modern brand-name garments & accessories for men & women', '98122');
addShop('Out of the Closet Thrift Store', '1016 E Pike St, Seattle, WA 98122', 'http://outofthecloset.org/locations/', 'Thrift store selling clothing, books & housewares; profits go to the AIDS Healthcare Foundation.', '98122');
addShop('Lifelong Thrift Store', '312 Broadway E, Seattle, WA 98122','http://www.llaa.org/lifelongthrift', 'Lifelong Thrift is a great place to browse high-quality apparel, shoes, and household items. Sales from donated items fund our work delivering food, housing, and health services to people living with chronic illnesses, including HIV/AIDS.', '98122');
addShop('Driftwood Consignment','1135 34th Ave, Seattle, WA 98122','http://driftwoodboutique.com/', 'Consignment boutique with a high-fashion feel, selling secondhand women\'s clothing & accessories', '98122');
addShop('Fury Extraordinary Women\'s Consignment', '2810 E Madison St, Seattle, WA 98112', 'http://www.furyconsignment.com/',
'Women\'s boutique with a variety of gently used clothes, jewelry & accessories from designer labels.', '98122');

//98125
addShop('Value Village Thrift Store', '12548 Lake City Way NE, Seattle, WA 98125', 'http://stores.valuevillage.com/wa/seattle/thrift-stores-seattle-wa-1004.html', 'Value Village, a Savers brand, is a for-profit, global thrift retailer offering great quality, gently used clothing, accessories and household goods. Our business model of purchasing, reselling and recycling gives communities a smart way to shop and keeps more than 650 million pounds of used goods from landfills each year', '98125');

//98126 nothing!

//98133
addShop('St Vincent de Paul Aurora Thrift Store', '13555 Aurora Ave N, Seattle, WA 98133', 'http://svdpseattle.org/', 'St. Vincent de Paul, a 501(c)(3)non-profit, has been serving needy neighbors in Seattle and King County for 95 years. We have always invested as much as we can into programs to help people.', '98133');
addShop('Seattle Children\'s Bargain Boutique','15835 Westminster Way N, Shoreline, WA 98133', 'http://www.seattlechildrens.org/ways-to-help/shopping/locations/', 'Come be pleasantly surprised. We have jewelry, clothing, furniture, collectibles, coins, linens, shoes and more. We are not your typical thrift store but, rather, we are your bargain boutique. Come see for yourself!', '98133');
addShop('Deseret Industries', '17935 Aurora Ave N, Shoreline, WA 98133','https://deseretindustries.org/?lang=eng','Thrift store chain for used clothing & home goods, plus new items such as bedding & furniture.', '98133');
addShop('Thrift Stores','15835 Westminster Way N, Shoreline, WA 98133','(206) 448-1507','Local thrift shop with variety of new and gently used items.', '98133');
addShop('Salvation Army Family Thrift Store', '15403 Westminster Way N, Shoreline, WA 98133', 'https://www.facebook.com/ShorelineThrift','Long-standing nonprofit chain with a range of pre-owned clothing, furniture, housewares & more.', '98133');
addShop('Armadillo Consignment', '12421 Greenwood Ave N, Seattle, WA 98133', 'http://armadilloconsignment.com/','Consignment shop offering an assortment of vintage & contemporary furniture, apparel & housewares.', '98133');

//98134
addShop('Salvation Army Thrift Store', '1010 4th Ave S, Seattle, WA 98134', 'http://www.salvationarmy.org/', 'Long-standing nonprofit chain with a range of pre-owned clothing, furniture, housewares & more.', '98134');
addShop('Total Reclaim Inc', '2200 6th Ave S, Seattle, WA 98134', 'http://www.totalreclaim.com/', 'Total Reclaim was created in 1991 to help industry and government agencies legally recycle refrigerators and HVAC equipment in accordance with the requirements of the 1990 Amendments to the Clean Air Act.', '98134');
addShop('E-Cycle Environmental', '3223 3rd Ave S, Seattle, WA 98134','http://www.ecycleenvironmental.com/', 'Commercial & Residential Junk Recycle, Resell, or Donate Your Material', '98134');
addShop('Rabanco Recycling Company','2733 3rd Ave S, Seattle, WA 98134','http://site.republicservices.com/site/republic-nw/en/pages/location.aspx', 'It’s not just what we haul away, but the value we add to your experience and your bottom line that makes the difference. We help make your waste and recycling program successful by aligning with your goals.', '98134' );
addShop('Republic Services', '2733 3rd Ave S, Seattle, WA 98134',
'http://www.republicservices.com/', 'Garbage Collection Service', '98134');
addShop('Ecolights Northwest LLC', '2200 6th Ave S, Seattle, WA 98134','http://www.ecolights.com/', 'Recycling Center', '98134');
addShop('AAA Cardboard Recycling', '2733 3rd Ave S, Seattle, WA 98134','no website or phone number', '98134');
addShop('Goodwill Seattle Outlet','1765 6th Ave S, Seattle, WA 98134','http://seattlegoodwill.org/shop/locations/seattle-outlet', 'Come find used clothing and furniture at ridiculous prices! Buy things by pound', '98134');

//98144
addShop('Recycling Depot', '851 Rainier Ave S, Seattle, WA 98144','http://www.recyclingdepotseattle.com/', 'Our service for over 30 years has been to help keep our planet "green". Satisfied customers are our number one priority. Our employees are courteous, friendly, and professional. We have the tools and equipment to manage loads of any size. Feel free to contact us with your questions. And don\'t forget, WE PAY CASH.', '98144');
addShop('Goodwill Seattle', '1400 S Lane St, Seattle, WA 98144', 'http://seattlegoodwill.org/shop/locations/seattle', 'For the Earth we divert reusable items from our overwhelmed landfills by recycling them to be reused by people who need them or feel that recycling is a great way to improve the health of our Earth.', '98144');
addShop('Two Big Blondes', '2501 S Jackson St, Seattle, WA 98144', 'http://www.twobigblondes.com/', 'Consignment store featuring casual & formal clothing for women size 14 & up, plus accessories.', '98144' );

//98177
addShop('The Furniture Guy Consignment', '12431 Greenwood Ave N, Seattle, wa 98177', 'http://www.furnitureguyseattle.com/', 'Secondhand shop carrying vintage to modern home furniture as well as lamps & decorative accents.', '98177');
addShop('Childish Things', '10002 Holman Rd NW, Seattle, WA 98177','http://www.childishresale.com/', 'Seller/buyer of used clothes for babies, kids & mothers, plus toys & gear, including some new items.', '98177');

//98199
addShop('Wish Upon Children\'s Consignment', '2425 33rd Ave W, Seattle, WA 98199', 'http://www.wishuponconsign.com/', 'Consignment Shop Wish Upon Children\'s Consignment sells New and Gently used quality clothing, Toys, Books and Baby equipment for every families budget', '98199');


// render items
var renderShops = function(event) {
  mainEl.innerHTML = '';
  var inputEl = document.getElementById('zipPut').value;
  console.log(inputEl);
  var match = false;
  for(var i = 0; i < allShops.length; i ++) {
    if (inputEl === allShops[i][1].zipCode) {
      //display aprop info
      match = true;
      var headingEl = document.createElement('h1');
      headingEl.appendChild(document.createTextNode(allShops[i][0]));
      mainEl.appendChild(headingEl);
      // make unordered list
      var ulEl = document.createElement('ul');
      var addEl = document.createElement('li');
      addEl.appendChild(document.createTextNode(allShops[i][1].address));
      ulEl.appendChild(addEl);

      var urlEl = document.createElement('li');
      urlEl.appendChild(document.createTextNode(allShops[i][1].url));
      var addATag = document.createElement('a');
      addATag.setAttribute('href', allShops[i][1].url);
      addATag.appendChild(urlEl);
      ulEl.appendChild(addATag);

      var infoEl = document.createElement('li');
      infoEl.appendChild(document.createTextNode(allShops[i][1].info));
      ulEl.appendChild(infoEl);
      var zipEl = document.createElement('li');
      zipEl.appendChild(document.createTextNode(allShops[i][1].zipCode));
      ulEl.appendChild(zipEl);
      mainEl.appendChild(ulEl);
      // match = false;
    } else if (i === allShops.length-1  && match === false) {
        var headingEl = document.createElement('h1');
        headingEl.appendChild(document.createTextNode("I'm sorry, it seems we have no information for you zipCode."));
        mainEl.appendChild(headingEl);
      }
  }
};



var submitEl = document.getElementById('ziptake');
submitEl.addEventListener('submit', function() {
  event.preventDefault();
  console.log('in the event');
  renderShops();
});







































// renderShops();
  // make page heading
//   var headingEl = document.createElement('h1');
//   headingEl.appendChild(document.createTextNode(allZips));
//   mainEl.appendChild(headingEl);
//   // make unordered list
//   var ulEl = document.createElement('ul');
//
//   mainEl.appendChild(ulEl);
//   // make list items
//   //Trish you adjusted this to end with zipCat[i] instead of just simply zipCat
//   for (var i = 0; i < allShops.length; i += 1) {
//     if (allShops[i][1].zipCode ===  [i]) {
//       var liEl = document.createElement('li');
//       liEl.appendChild(document.createTextNode(allShops[i][0]));
//       ulEl.appendChild(liEl);
//     };
//   };
// };
// // outside of function


//
// this.name = name;
// this.address = address;
// this.url = url;
// this.info = info;
// this.zipCode = zipCode;
//
// zNames98101 = ['Alexandras','2nd Hand Gala','5th Avenue Boutique','Lion Heart Book Store'];
// zAdds98101 = ['412 Olive Way','1501 Pike Pl', '1118 5th Ave', 'Pike Place Market'];
//
// zNames98102 = ['aStore','bStore'];
// zAdds98101 = ['N. Beacon Hill','2405 E. 11th'];
//
//
//
// var mainEl = document.getElementsById('revealZip');
//
//
//
// switch (input) {
//   case "98101"
//     console.log(Names98101[1] + zAdds98101[1]);
//     break;
//   case "98102"
//     console.log(zNames98102[1] + zAdds98101[1]);
// }
//
//
//
//  ShopZip.prototype.generateShops = function() {
//   for(var i = 0; i < allShops.length; i ++) {
//     var shopName = this.name;
//     this.nameArray[i].push(shopName);
//   }
// }
// //
// ShopZip.prototype.render = function() {
//   this.generateShops();
//     var zipEl = document.getElementsById("revealZip");
//     var tblElem = document.createElement("table");
//     var table = document.getElementsByTagName("table");
//     var tdElem = document.createElement("td");
//     tdElem.textContent = this.name;
//     tblElem.appendChild(tdElem);
//     tdElem.className = "firstRow";
//
//     for (var i = 0; i < this.ShopZip.length; i ++) {
//       var thElem = document.createElement('td');
//       tblElem.appendChild(thElem);
//     }
// }
//
// //zipCode1 = 98101
// //zipCode2 = 98102
//
// nameArray1 = ["Alexandra\'s", "2nd Hand Gala", "5th Avenue Boutique", "Lion Heart Book Store"];
// nameArray2 = ["Goodwill Capitol Hill", "Crossroads Trading Co."];
//
// addArray1 = ["412 Olive Way, Seattle, WA 98101", "1501 Pike Pl #324, Seattle, WA 98101","1118 5th Ave, Seattle, WA 98101", "1501 Pike Pl #432, Seattle, WA 98101"];
// addArray2 = ["115 Belmont Ave E, Seattle, WA 98102", "325 Broadway E, Seattle, WA 98102"];
//
// urlArray1 = ["http://www.alexandrasonline.com/", "https://www.facebook.com/2ndHandGALA/", "http://www.ywcaworks.org/boutique", "http://literarytourist.com/browse.php?mod=usedbooks&pid=6793"];
// urlArray2 = ["http://seattlegoodwill.org/shop/locations/capitol-hill", "http://crossroadstrading.com/"];
//
// infoArray1 = ["Consignment boutique with racks of designer clothing & accessories for bargain hunters.", "Used, Vintage & Consignment in Seattle", "This second-hand shop carries name-brand & designer clothing, footwear & accessories for women", "Used book store"];
// infoArray2 = ["Long-standing nonprofit chain with a range of pre-owned clothing, furniture, housewares & more.", "Consignment store with new & used clothing, shoes & accessories, including brand-name items. " ];
//
// //zipCode1 = 98101
// //zipCode2 = 98102
//
//
// // create consturctor to add zipArrays and  their properties.
// var zip1 = new ShopZip(nameArray1[0],addArray1[0], urlArray1[0], infoArray1[0], 98101)
// var zip2 = new ShopZip(nameArray2[0],addArray2[0], urlArray2[0], infoArray2[0], 98102)
// // var zip1 = new ShopZip(nameArray2[0], 05651)
//
//
// zip1.render();
// zip2.render();
//
//
//
//
// ShopZip();
