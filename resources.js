// Done: got this zipValidation working. After changing format.
// To Do: May need to add further validation for Seattle zip codes only. And throw errors/msg when zip codes with no shops are entered.

function zipValidation(ziptake) {
    var isValid = /^[0-9]{5}(?:-[0-9]{4})?$/.test(ziptake);
    if (isValid)
        alert('Valid ZipCode');
    else {
        alert('Invalid ZipCode, please use numeric characters only');
    }
}



// // BELOW is code to reveal shops based on zip code entered.
// var allShops = [];
// //
//  var allZipCodes = [
//    "98101",
//    "98102",
//  ];
// // // more zip codes to come. 27+++
//
// var mainEl = document.getElementById('revealZip');
//
//  function Shop(name, address, url, info, zipCode) { // info = description
//    this.name = name;
//    this.address = address;
//    this.url = url;
//    this.info = info;
//    this.zipCode = zipCode;
// }
//
// //shop loader
// var addShop = function(name, address, url, info, zipCode) {
//   var newShop = new addShop(name, address, url, info, zipCode);
//   allShops.push([name, newShop]);
// };
//
// //shop data per zip?
//
// addShop('Alexandra\'s', '412 Olive Way, Seattle, WA 98101', 'http://www.alexandrasonline.com', 'Consignment boutique with racks of designer clothing & accessories for bargain hunters.', '98101');
//
// ShopZip();

// var renderShops = function() {
//   // make page heading
//   var headingEl = document.createElement('h1');
//   headingEl.appendChild(document.createTextNode(allShops));
//   mainEl.appendChild(headingEl);
//   // make unordered list
//   var ulEl = document.createElement('ul');
//   ulEl.addEventListener('click', renderDisposal);
//   mainEl.appendChild(ulEl);
//   // make list items
//   for (var i = 0; i < allShops.length; i += 1) {
//     if (allShops[i][1].parent === allShops) {
//       var liEl = document.createElement('li');
//       liEl.appendChild(document.createTextNode(allShops[i][0]));
//       ulEl.appendChild(liEl);
//     };
//   };
// };
//
// renderShops();


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
