app.controller("ModalController", function($scope){
	$scope.categories = [];

	$scope.addCategory = function() {
		if( $scope.categories.length < 3 ){
			$scope.categories.push({name:$(event.target).html()});
		}else{

		}
	}
});