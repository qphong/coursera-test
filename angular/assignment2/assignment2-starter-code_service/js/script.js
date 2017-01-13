(function(){

	"use strict";

	angular.module("ShoppingListApp",[])
		.controller("BuyingController", BuyingController)
		.controller("BoughtController", BoughtController)
		.service("BuyService", BuyService);

	BuyingController.$inject = ["BuyService"];
	function BuyingController(BuyService) {
		var buyingCntrl = this;

		var buyingList = [
			{name: "Cookies", quantity: 10},
			{name: "Snacks", quantity: 10},
			{name: "Bottles of Coke", quantity: 10},
			{name: "Cans of Beer", quantity: 10},
			{name: "Boxs of Candy", quantity: 10}
		];

		for (var i=0; i < buyingList.length; i++) {
			BuyService.addBuyingItem(buyingList[i]);
		}

		buyingCntrl.list = BuyService.getBuyingList();

		buyingCntrl.buy = function(idx) {
			BuyService.buyItemIdx(idx);
		};
	}

	BoughtController.$inject = ["BuyService"];
	function BoughtController(BuyService) {
		var boughtCntrl = this;

		boughtCntrl.list = BuyService.getBoughtList();
	}

	function BuyService() {

		var buyService = this;
		var buyingList = [];
		var boughtList = [];

		buyService.getBuyingList = function() {
			return buyingList;
		};

		buyService.addBuyingItem = function(item) {
			buyingList.push(item);
		};

		buyService.getBoughtList = function() {
			return boughtList;
		};

		buyService.addBoughtItem = function(item) {
			boughtList.push(item);
		};

		buyService.buyItemIdx = function(idx) {
			var item = buyingList[idx];	
			buyingList.splice(idx,1);
			boughtList.push(item); 
		};
	}

})();