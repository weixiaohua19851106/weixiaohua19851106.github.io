﻿app.config(["$stateProvider","$urlRouterProvider",routeFn]);
function routeFn($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/main");
    $stateProvider
        .state("main",{
            url:"/main",
            templateUrl:"views/main.html",
            controller:"main",
            controllerAs:"vm",
            resolve:{
                deps:["$ocLazyLoad",function($ocLazyLoad){
                    return $ocLazyLoad.load("js/controllers/main.js");
                }]
            }
        })
        .state("main.homepage",{
            url:"/homepage",
            templateUrl:"views/homepage.html",
            controller:"homepage",
            controllerAs:"vm",
            resolve:{
                deps:["$ocLazyLoad",function($ocLazyLoad){
                    return $ocLazyLoad.load("js/controllers/homepage.js");
                }]
            }
        })
        .state("main.specialtyIntroduce",{
            url:"/specialtyIntroduce",
            templateUrl:"views/specialtyIntroduce.html",
            controllerAs:"vm"
        })
        .state("main.faculty",{
            url:"/faculty",
            templateUrl:"views/faculty.html",
            controller:"faculty",
            controllerAs:"vm"
        })
        .state("main.faculty.facultyContent",{
            params:{teacherId:null},
            url:"/facultyContent?teacherId",
            templateUrl:"views/facultyContent.html",
            controller:"facultyContent",
            controllerAs:"vm"
        })
}