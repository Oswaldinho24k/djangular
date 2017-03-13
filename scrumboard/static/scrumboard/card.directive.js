(function(){
	'use strict';

	angular.module('scrumboard.demo')
		.directive('scrumboardCard', CardDirective);

	function CardDirective() {
		return {
			templateUrl: '/static/scrumboard/card.html', 
			restrict: 'E',
			controller: ['$scope', '$http', function($scope, $http){
				var url = '/scrumboard/cards/' + $scope.card.id + '/';
				$scope.update = function(){
					$http.put(
						url, 
						$scope.card
					);
					console.log('actualizando');
				};//update
				$scope.delete = function(){
					if(confirm('Seguro??? Ya no hay vuelta atrás heeeee'))
					$http.delete(url).then(function(){
						var cards = $scope.list.cards;
						cards.splice(
							cards.indexOf($scope.card),
							1
						);
					})
				};//delete

				$scope.modelOptions = {
					debounce: 500
				};
			}]
		};
	}

})();