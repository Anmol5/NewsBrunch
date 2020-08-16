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
	$http.get("http://newsapi.org/v2/everything?sources="+source+"&apiKey=b3cb4e26d9d04fb5998816a9644eea3c").then(function(res){
	$scope.message = res.data;
	$scope.load=false;
	$scope.colstyle = {
			
		}
	});
}
else
{
	$http.get("http://newsapi.org/v2/top-headlines?country=in&category="+category+"&apiKey=b3cb4e26d9d04fb5998816a9644eea3c").then(function(res){
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
	$http.get("http://newsapi.org/v2/everything?q="+topic+"&sortBy=popularity&apiKey=b3cb4e26d9d04fb5998816a9644eea3c").then(function(res){
	$scope.message = res.data;
	$scope.load=false;
	$scope.colstyle = {
			
		}
	});
}

});

