app.controller('activateCtrl', function ($scope, $http, $route, $routeParams) {
    
    console.log($route.current.params.email);
 $http.post("/api/registr/" + $route.current.params.email).then(function (response) {
                console.log(response);
            })
})