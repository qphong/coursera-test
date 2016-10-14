
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
				if ($scope.dishes === "") {
					$scope.message = "Please enter data first!";
					$scope.textColor = "red";
					$scope.textboxBorderColor = "red";
					return;
				}

				dishes = $scope.dishes.split(',');

				var count = 0;
				for (d in dishes)
					if (dishes[d].replace(/\s/g, '').length)
						count++;

				if (count > 3)
					$scope.message = "Too much!";
				else
					$scope.message = "Enjoy!";

				$scope.textColor = "green";
				$scope.textboxBorderColor = "green";
			}
		}
	}

})();