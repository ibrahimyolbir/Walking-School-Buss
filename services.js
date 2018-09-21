var app = angular.module('wsbApp');

app.factory('getChild', ['$http', function ($http) {
    var childrens = {
        resultSet: function () {
            var url = `data.json`;
            var data;
            return $http.get(url)
                .then(function onSuccess(response) {
                    // Handle success
                    data = response.data;
                    console.log(data);
                    var status = response.status;
                    var statusText = response.statusText;
                    var headers = response.headers;
                    var config = response.config;
                    return data;

                })
                .catch(function onError(response) {
                    // Handle error
                    data = response.data;
                    var status = response.status;
                    var statusText = response.statusText;
                    var headers = response.headers;
                    var config = response.config;
                    return "Error";
                });

        }
    };
    return childrens;
}]);
