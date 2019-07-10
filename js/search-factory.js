angular.module('gitSearch').factory('gitFactory', function($http){
    function getData(){
        return $http.get('https://api.github.com/search/repositories?q=bootstrap')
    }
    return {
        getData:getData
    }
});