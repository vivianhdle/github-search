angular.module('gitSearch').controller('controller',function($scope,gitFactory){
    $scope.search;
    $scope.issues;
    $scope.currentIssue;

    $scope.getInput = function(){
        gitFactory.getData(this.text).then(function(data,error){
            $scope.search = data.data.items;
            $scope.issues = null;
            document.getElementsByClassName('total-found')[0].style.display="block";
            document.getElementsByClassName('issue-title')[0].style.display="none";
        }).catch(function(error){
            console.log(error);
        })
    }

    $scope.getIssues = function(name){
        $scope.currentIssue = name;
        gitFactory.getIssues(name).then(function(data,error){
            document.getElementsByClassName('issue-title')[0].style.display="block";
            $scope.issues = data.data.items;
        }).catch(function(error){
            console.log(error);
        })
    }
});