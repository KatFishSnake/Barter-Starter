/**
 * Created by dd31andre on 5/14/2015.
 */

angular.module("Myapp")
.directive("projectExample", [function(){
    return{
        templateUrl: "Scripts/html/project_example_directive.html",
        restrict: "E",
        transclude: true,
        scope: {
            info: '='
        },
        controller: function(){},
        controllerAs: "home_pageProjectsCtrl"
    }
}])


//directive for the global header
.directive("headerDirective", [function(){
    return{
        templateUrl: "Scripts/html/header_directive.html",
        restrict: "E"
    }
}])
.directive("bannerDirective", [function(){
    return{
        templateUrl: "Scripts/html/banner_directive.html",
        restrict: "E"
    }
}])
.directive("taskPanel", function(){
        return{
            templateUrl: "Scripts/html/jobReward_directive.html",
            restrict: "E",
            scope: {
                info: "="
            }
        }
    })
;
