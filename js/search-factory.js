angular.module('gitSearch').factory('gitFactory', function($http){
    function getData(keyword){
        return $http.get(`https://api.github.com/search/repositories?q=${keyword}`)
    }
    return {
        getData:getData
    }
});