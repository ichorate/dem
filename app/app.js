angular.module('webapp711',[])
.service('couponService',['$http',function($http){
	var s = this;
	s.url = 'https://app711.nwisecloud.net';
	

	s.loadTrueCoupon = function(){
		return $http.get(s.url+'/api/coupontype/true');

	}
}])

.controller('main',['$scope','couponService', function($scope,couponService){
	var c = this;
	c.say = 'hi';
	c.coupons = [];
	c.load = function(){

		couponService.loadTrueCoupon()
			.then(function(response){
				console.log(response);
				c.coupons = response.data;
			},
			function(error){
				console.log(error);
			});
	}

}])
;




