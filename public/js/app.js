//var app = angular.module('AtlasApp',[]);

var app = angular.module('AtlasApp', []);
app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});