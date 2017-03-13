(function(){
		'use strict';

		angular.module('scrumboard.demo', [])
			.controller('ScrumboardController', ['$scope', '$http', ScrumboardController]);

			function ScrumboardController($scope, $http){
				$scope.add = function(list, title){
					var card = {
						list: list.id, 
						title: title
					};
					$http.post('/scrumboard/cards/', card)
						.then(function(response){
							list.cards.push(card);
							//var x = document.getElementById('textin').value;
							//console.log(x);
							//x.value = "";
						}, 
						function(){
							alert('No se pudo papaê');
						});
				};

				$scope.login = function(){
					$http.post('/auth_api/login/', 
						{username: 'oswaldinho', password: 'oswaldinho' })
				};

				$scope.data = [];
				$http.get('/scrumboard/lists/').then(function(response){
					$scope.data = response.data;
				})			
				

				
			}
	})();