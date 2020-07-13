var app = angular.module("app", ["ngAnimate", "ui.router", "anim-in-out"]);


app.service("authorize", function ($http) {
    this.getSession = function (callback) {
        $http.get("/api/session")
            .then(function (response) {
                callback(response);
            })
            .catch(function (err) {
                throw err;
            });
    };
});



app.config(["$stateProvider", "$urlRouterProvider", '$locationProvider', 'authorizeProvider', '$httpProvider',
function (
    $stateProvider,
    $urlRouterProvider,
    $locationProvider,
    authorizeProvider,
    $httpProvider
) {

    $stateProvider
        .state("home", {
            url: "/home",
            views: {
                "home": {
                    templateUrl: "views/partials/home.html",
                    controller: "MainController"
                },
                "about": {
                    templateUrl: "views/partials/about.html",
                    controller: "MainController"
                },
                "apply": {
                    templateUrl: "views/partials/apply.html",
                    controller: "MainController"
                },
                "download": {
                    templateUrl: "views/partials/downloadApp.html",
                    controller: "MainController"
                },
                "media": {
                    templateUrl: "views/partials/media.html",
                    controller: "MainController"
                },
                "contact": {
                    templateUrl: "views/partials/contact.html",
                    controller: "MainController"
                }
            },
        })
        ;

    $urlRouterProvider.otherwise(function ($injector, $location) {
        var $state = $injector.get('$state');
        $state.go("home", {
            title: "Dashboard",
            message: "Login Successful!"
        });
    });

    $locationProvider.html5Mode(true);

}]);



// app.run(['authorize', '$state', '$rootScope', '$stateParams', function (authorize, $state, $rootScope, $stateParams, $http) {
//     authorize.getSession(function (data) {
//         var user = data.data;
//         $rootScope.user = user;
//         if (user) {
//             $rootScope.$state = $state;
//         } else {
//             $state.go("login", {
//                 title: "Login",
//                 message: "Please login with your credentials"
//             });
//         }
//     });
// }]);










