angular.module('gitSearch').factory('gitFactory', function($http){
    function getData(keyword){
        return $http.get(`https://api.github.com/search/repositories?q=${keyword}`)
    }
    function getIssues(repo){
        return $http.get(`https://api.github.com/search/issues?q=repo:${repo}`)
    }
    return {
        getData:getData,
        getIssues:getIssues
    }
});