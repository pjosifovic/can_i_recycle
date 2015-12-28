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

// render items
var inputEl; 
var renderShops = function(event) {
  var inputEl = event.target.zipPut.value;
  console.log(inputEl);

  for(var i = 0; i < allShops.length; i ++) {
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
    ulEl.appendChild(urlEl);
    var infoEl = document.createElement('li');
    infoEl.appendChild(document.createTextNode(allShops[i][1].info));
    ulEl.appendChild(infoEl);
    var zipEl = document.createElement('li');
    zipEl.appendChild(document.createTextNode(allShops[i][1].zipCode));
    ulEl.appendChild(zipEl);
    mainEl.appendChild(ulEl);
    console.log("you're crazy");
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
