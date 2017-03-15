(function(){
		'use strict';

		angular.module('scrumboard.demo', ['ngRoute'])
			.controller('ScrumboardController', ['$scope', '$http','$location',  ScrumboardController]);

			function ScrumboardController($scope, $http, $location){
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
				$scope.logout = function(){
					$http.get('/auth_api/logout')
						.then(function(){
							$location.url('/login');
						});
				}


				$scope.data = [];
				$http.get('/scrumboard/lists/').then(function(response){
					$scope.data = response.data;
				})			
				

				
			}
	})();