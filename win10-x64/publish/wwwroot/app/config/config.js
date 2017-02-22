app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'app/config/template/event.html',
        controller: 'eventCtrl'
    })
    $routeProvider.when('/:dis', {
        templateUrl: 'app/config/template/event.html',
        controller: 'eventCtrl'
    })
    $routeProvider.when('/about', {
        templateUrl: 'app/config/template/about.html',
        controller: 'aboutCtrl'
    })
    $routeProvider.when('/activate/:email',{
        templateUrl: 'app/config/template/activate.html',
        controller: 'activateCtrl'
    })
    $routeProvider.otherwise({ redirectTo: '/'});
})