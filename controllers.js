var app = angular.module('wsbApp');

app.controller('LoginController', ['$scope', '$http', function ($scope, $http) {

    $(document).ready(function ($) {
        $('.signup').hide();
        $('.recover-password').hide();


        $('.btn-reset').click(function () {
            $('.login').hide();
            $('.recover-password').fadeIn(300);
        });

        $('.btn-member').click(function () {
            $('.login').hide();
            $('.signup').fadeIn(300);
        });


        $('.btn-login').click(function () {
            $('.signup').hide();
            $('.recover-password').hide();
            $('.login').fadeIn(300);

        });

        $('.notification').hide();

        $('.btn-password').click(function () {

            if ($('#resetPassword').val() == 0) {
                // $('#resetPassword').after('<span class="error">Email not valid.</span>')
                $('.error').text('Email not valid.')
            }

            else {
                $('.reset-mail').text($('#resetPassword').val());
                $('.recover-password form').hide();
                $('.notification').fadeIn(300);
            }
        });

    });


}]);
app.controller('HomeController', ['$scope', '$http', function ($scope, $http) {
    console.log('HomeController');
 
}]);
 

   /*
      var countryApp = angular.module('countryApp', []);

      countryApp.controller('CountryCtrl', function ($scope, $http){

        $http.get('data.json').success(function(data) {

          $scope.countries = data;

        });

      });*/
 
app.controller('ChildrenSaveController', ['$scope', '$http','getChild',  function ($scope, $http,getChild) {
    getChild.resultSet().then(function(data){
        $scope.users= data;
        console.log($scope.display);
    });
}]);
app.controller('AddChildrenController', ['$scope', '$http', function ($scope, $http) {
    console.log('AddChildrenController');

}]);
app.controller('GroupCreateController', ['$scope', '$http', function ($scope, $http) {
    console.log('GroupCreateController');

}]);