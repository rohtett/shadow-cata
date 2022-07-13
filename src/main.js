"use strict";
(()=> {
  angular.module("main", ["ngRoute"])
  //routes
  .config(["$routeProvider", function($routeProvider) {
    $routeProvider
      .when("/introduction", {
        templateUrl: "app/introduction.html"
      })
      .when("/talents", {
        templateUrl: "app/talents.html"
      })
      .when("/rotation", {
        templateUrl: "app/rotation.html"
      })
      .when("/stats", {
        templateUrl: "app/stats.html"
      })
      .otherwise({
        redirectTo: "/introduction"
      });
  }])
  //header controller
  .controller("headerController", ["$scope", function($scope) {
    $scope.menus = ["introduction", "talents", "rotation", "stats"];
    $scope.locateTo = menu => {
      window.location.href='#!/'+menu;
    }
  }]);
})();
