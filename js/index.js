//定义一个名为myApp的模块
var myApp=angular.module('myApp',['ui.router','ksSwiper']);
//定义控制器
myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {		
 	$urlRouterProvider.otherwise('/home');
	$stateProvider
        .state("home", {
            url:"/home",
            templateUrl: "./html/home.html"
        })
        .state("order", {
            url:"/order",
            views:{
                "":{templateUrl:"./html/order.html"},
                "top@order":{
                      templateUrl:"./html/header.html",
                      controller:function($scope) {
                        $scope.header="我的订单";
                    }
                }               
               
            }
        })
        .state("member", {
            url:"/member",
             views:{
                "":{templateUrl:"./html/member.html"},
                "top@member":{
                      templateUrl:"./html/header.html",
                      controller:function($scope) {
                        $scope.header="会员";
                    }
                }               
               
            }
        })
        .state("mine", {
            url:"/mine",
            templateUrl: "./html/mine.html"
        });
}]);
 
myApp.controller('ctrl',["$scope",function($scope){
    /*$scope.sub = function(addRode) {
        $rootScope.back()
    }*/
    $scope.swiper = {};
    $scope.next = function() {
        $scope.swiper.slideNext();
    };
    
    $scope.onReadySwiper = function(swiper) {
        swiper.on('slideChangeStart', function() {
        });
        $scope.eventBind();
    };
    $scope.eventBind=function(){
        var ss=new IScroll("#container");
        ss.refresh()
    }
    
}]);
function toIndexback(){
    location.href='common/indexback.html';
}