/**
 * Created by dd31andre on 5/14/2015.
 */

function homePageCtrl($location, $rootScope){
    var self = this;


    self.projects_examples = [
        {id: 0, title:"Website for Unix Interactive",
            big: "example.png",
            host: "Codedrops",
            small: "example_logo.png",
            daysLeft: "12",
            tags:["UX","UI","FrontEnd"],
            description: "We are small interactive agency and dont have enough resources to complete the project, if you are willing to work remotely or inhouse with awesome pros like you"},
        {id: 1, title:"Create the example on our framework",
            big: "example2.png",
            host: "Snap.svg",
            small: "example_logo2.png",
            daysLeft: "54",
            tags:["UI","FrontEnd"],
            description: "We are small interactive agency and dont have enough resources to complete the project, if you are willing to work remotely or inhouse with awesome pros like you" },
        {id: 2, title:"Photoshoot for Transmission Production", big: "example3.png", host: "Transmission Production",  small: "example_logo3.png", daysLeft: "11", tags:["UX","Marketing"], description: "We are small interactive agency and dont have enough resources to complete the project, if you are willing to work remotely or inhouse with awesome pros like you" },
        {id: 3, title:"Please help us build the better world with awesome tool", big: "example4.png", host: "Inuit Production Studio",  small: "example_logo4.png", daysLeft: "81", tags:["UI","Marketing", "FrontEnd", "BackEnd"], description: "We are small interactive agency and dont have enough resources to complete the project, if you are willing to work remotely or inhouse with awesome pros like you" }
    ];

    self.jobTypes = [
        {title: 'User Experience Design', tag: "UX"},
        {title: 'User Interface Design', tag: "UI"},
        {title: 'Front End Development', tag: "FE"},
        {title: 'Back End Development', tag: "BE"},
        {title: 'Marketing Promotion', tag: "MP"},
        {title: 'No tag', tag: ""}
    ];

    self.items = ["Project Introduction", "Welcoming Image", "About you", "Team Greeting", "Job / Reward"];

    self.projectConstractor = {
        countDays: 15,
        jobReward: {
        }
    };
    self.testing = 'staff';

    self.plusDays = function(){
        if(self.projectConstractor.countDays>5){
            self.projectConstractor.countDays--;
        }

        if(self.projectConstractor.countDays<10){
            $(".countNumber").css("left", "81px");
        }else{
            $(".countNumber").css("left", "61px");
        }
    };

    self.orderByItem = 'title';
    self.order = function(sort){
        self.orderByItem = sort;
    };

    self.minusDays = function(){
        if(self.projectConstractor.countDays<50){
            self.projectConstractor.countDays++;
        }

        if(self.projectConstractor.countDays<10){
            $(".countNumber").css("left", "81px");
        }else{
            $(".countNumber").css("left", "61px");
        }
    };

    self.previewObj = function(){
        console.log(self.projectConstractor);
        alertify.success("Settings have been saved!!");
    };
    self.exists = function(){
        var ex = new File("../../index_home.html").exists();
        console.log(ex);
    };

    self.go = function ( path ) {
        $location.path( path );
    };

    var countProjects = 3;
    self.addProject = function(){
        var from = self.projectConstractor;
        var to = self.projects_examples;

        var newProject = {};
        newProject.id = countProjects++;
        newProject.title = from['title'];
        newProject.host = from['teamLeaders'];
        newProject.daysLeft = from['countDays'];
        newProject.description = from['description'];
        newProject.daysLeft = from['countDays'];
        newProject.big = 'example.png';
        newProject.small = 'example_logo.png';

        to.push(newProject);
        self.projectConstractor = {};
        $location.path('/home');
        console.log(to);
        console.log(newProject);

    };


}

function auth_controll( $location){
    var self = this;
    self.email = {
        text: "me@email.com"
    };
    self.go = function ( path ) {
        $location.path( path );
    };
    self.newUser = {};
    self.submit = function(form){
        if(form.$valid){
            self.newUser = {
               name: self.username,
               email: self.userEmail,
               password: self.password
            };
            console.log(self.newUser);
            $location.path("#/home")
        }
    };

}

angular.module("Myapp")
    .controller("home_pageProjectsCtrl", homePageCtrl)
    .controller("authenticationCtrl", auth_controll)
    .config(function($routeProvider){
        $routeProvider
            .when("/home", {
                templateUrl: '../../Programming/index_home.html',
                controller: "home_pageProjectsCtrl",
                controllerAs: 'myCtrl'
            })
            .when("/editor", {
                templateUrl: '../../Programming/index_editor.html',
                controller: "home_pageProjectsCtrl",
                controllerAs: 'myCtrl'
            })
            .when("/logIn", {
                templateUrl: '../../Programming/Scripts/html/index_LogIn.html',
                controller: "authenticationCtrl",
                controllerAs: 'authCtrl'
            })
            .when("/signUp", {
                templateUrl: '../../Programming/index_authentication.html',
                controller: "authenticationCtrl",
                controllerAs: 'authCtrl'
            })
            .when("/project", {
                templateUrl: '../../Programming/index_project.html',
                controller: "home_pageProjectsCtrl",
                controllerAs: 'myCtrl'
            })
            .otherwise({
                redirectTo: '/home'
            })
    })
    .factory("projects", ["$firebaseObject",
        function($firebaseObject) {
            // create a reference to the Firebase database where we will store our data
            var randomRoomId = Math.round(Math.random() * 100000000);
            var ref = new Firebase("https://barter-starter.firebaseio.com/projects/" + randomRoomId);

            // this uses AngularFire to create the synchronized array
            return $firebaseObject(ref);
        }
    ]);
;