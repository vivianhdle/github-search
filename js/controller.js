angular.module('gitSearch').controller('controller',function($scope,gitFactory){
    $scope.search;

    gitFactory.getData().then(function(data,error){
        $scope.search = data.data;
        console.log($scope.search);
    }).catch(function(error){
        console.log(error);
    })
});