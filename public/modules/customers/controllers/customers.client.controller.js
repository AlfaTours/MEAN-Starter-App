'use strict';

// Customers controller
angular.module('customers').controller('CustomersController', ['$scope', '$stateParams', '$location', 'Authentication', 'Customers',
	function($scope, $stateParams, $location, Authentication, Customers) {
		$scope.authentication = Authentication;

		// Create new Customer
		$scope.create = function() {
			// Create new Customer object
			var customer = new Customers ({
				date: this.date
				exname: this.exname
				guide: this.guide
				tourists: [{
					tname: this.tname
					hotel: this.hotel
					tel: this.tel
					qadult: this.qadult
					qchild: this.qchild
					usdneed: this.usdneed
					vndneed: this.vndneed
					usdpayed: this.usdpayed
					vndpayed: this.vndpayed
					salesman1: this.salesman1
					salesman2: this.salesman2
					location: this.location
					created: this.created
					user: this.user
				}]
				created: this.created
				user: this.user

			});

			// Redirect after save
			customer.$save(function(response) {
				$location.path('customers/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Customer
		$scope.remove = function(customer) {
			if ( customer ) { 
				customer.$remove();

				for (var i in $scope.customers) {
					if ($scope.customers [i] === customer) {
						$scope.customers.splice(i, 1);
					}
				}
			} else {
				$scope.customer.$remove(function() {
					$location.path('customers');
				});
			}
		};

		// Update existing Customer
		$scope.update = function() {
			var customer = $scope.customer;

			customer.$update(function() {
				$location.path('customers/' + customer._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Customers
		$scope.find = function() {
			$scope.customers = Customers.query();
		};

		// Find existing Customer
		$scope.findOne = function() {
			$scope.customer = Customers.get({ 
				customerId: $stateParams.customerId
			});
		};
	}
]);