
(function(){

	angular.module("LunchApp",[])
	  .controller("CheckerController", checkerController);

	checkerController.$inject = ['$scope'];

	function checkerController($scope) {
		$scope.message = "";
		$scope.dishes = "";
		$scope.checkLunch = checkLunch;
		$scope.textColor = "black";
		$scope.textboxBorderColor = "#ccc";

		function checkLunch(event) {			

			if (!(event instanceof KeyboardEvent) || event.key === "Enter") {

				dishes = $scope.dishes.split(',');

				var count = 0;
				for (d in dishes)
					if (dishes[d].replace(/\s/g, '').length)
						count++;

				if (count == 0) {
					$scope.message = "Please enter your data!";
					$scope.textColor = "red";
					$scope.textboxBorderColor = "red";

				} else if (count > 3) {
					$scope.message = "Too much!";
					$scope.textColor = "green";
					$scope.textboxBorderColor = "green";

				} else {
					$scope.message = "Enjoy!";
					$scope.textColor = "green";
					$scope.textboxBorderColor = "green";					
				}				
			}
		}
	}

})();