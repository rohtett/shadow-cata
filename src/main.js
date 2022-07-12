"use strict";
(()=> {
  angular.module("main", [])
  .controller("headerController", ($scope) => {
    $scope.menus = ["Introduction", "Talents", "Rotation", "Stat Priority"];
  });
})();
