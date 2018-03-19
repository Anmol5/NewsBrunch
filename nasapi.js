var nasa = angular.module("mymodule",[]);
nasa.controller("nasacontroller",function($scope,$http){
	$scope.init = function(source,category){
		$scope.load=true;
		$scope.colstyle = {
			"opacity":"0.2"
		}
		$scope.lodstyle = {
			  "position": "fixed",
			  "z-index": "999",
			  "height": "2em",
			  "width": "2em",
			  "overflow": "show",
			  "margin": "auto",
			  "top": "10",
			  "left": "0",
			  "bottom": "0",
			  "right": "0"
			}
			if(category == null)
			{
	$http.get("https://newsapi.org/v2/everything?sources="+source+"&apiKey=7782265c7d5b479785f8e819f2c3242d").then(function(res){
	$scope.message = res.data;
	$scope.load=false;
	$scope.colstyle = {
			
		}
	});
}
else
{
	$http.get("https://newsapi.org/v2/top-headlines?country=in&category="+category+"&apiKey=7782265c7d5b479785f8e819f2c3242d").then(function(res){
	$scope.message = res.data;
	$scope.load=false;
	$scope.colstyle = {
			
		}
	});
}
  }
  $scope.topicsearch = function(){
  	    var topic = document.getElementById('search').value;
		$scope.load=true;
		$scope.colstyle = {
			"opacity":"0.2"
		}
		$scope.lodstyle = {
			  "position": "fixed",
			  "z-index": "999",
			  "height": "1em",
			  "width": "1em",
			  "overflow": "show",
			  "margin": "auto",
			  "top": "18",
			  "left": "0",
			  "bottom": "0",
			  "right": "0"
			}
	$http.get("https://newsapi.org/v2/everything?q="+topic+"&sortBy=popularity&apiKey=7782265c7d5b479785f8e819f2c3242d").then(function(res){
	$scope.message = res.data;
	$scope.load=false;
	$scope.colstyle = {
			
		}
	});
}

});

