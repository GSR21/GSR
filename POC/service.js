var mainModule = angular.module('myApp',[]);
mainModule.factory("candidates",function($http,$q){
  
 this.candidates=[];
 var self=this;
 var defer=$q.defer();
   $http.get("./data.json").success(function(data){
  var candidates=data.myData;
    defer.resolve(candidates);
    
  })
 return defer.promise;
});