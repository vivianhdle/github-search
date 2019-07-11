angular.module('gitSearch').controller('controller',function($scope,gitFactory){
    $scope.search;
    $scope.issues;

    $scope.getInput = function(){
        gitFactory.getData(this.text).then(function(data,error){
            $scope.search = data.data.items;
            console.log($scope.search);
        }).catch(function(error){
            console.log(error);
        })
    }

    $scope.getIssues = function(name){
        gitFactory.getIssues(name).then(function(data,error){
            $scope.issues = data.data.items;
            console.log('issues:',$scope.issues);
        }).catch(function(error){
            console.log(error);
        })
    }
});