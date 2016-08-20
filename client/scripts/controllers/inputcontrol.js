App.controller('InputController',  ['$scope', '$log', '$http', '$window', '$mdSidenav', "$mdDialog", "$mdMedia", 'ClientService',function($scope, $log, $http, $window, $mdSidenav, $mdDialog, $mdMedia, ClientService) {
  $scope.toCalendar= function(){
    $window.location.href = '#calendar';
  };

  $scope.toAbout= function(){
    $window.location.href = '#about';
  };

  $scope.toNormal= function(){
    $window.location.href = '#normal';
  };

    //Independent Variables
    var clientService = ClientService;

    $scope.toggleMenu = function() {
        $mdSidenav('left').toggle();
    };


$scope.inputData = {};

$scope.minMax = {};

$scope.getDefaults = function() {
  $http.get("/defaults").then(function(response){
      defaultVariables = response.data[0];
      $scope.minMax = defaultVariables;

      $scope.inputData.someValue= defaultVariables.someValue;
      $scope.inputData.headerBackgroundColor= defaultVariables.headerBackgroundColor;
      $scope.inputData.headerBackgroundHeight= defaultVariables.headerBackgroundHeight;
      $scope.inputData.sideNavWidth= defaultVariables.sideNavWidth;
      $scope.inputData.sideNavBackgroundColor= defaultVariables.sideNavBackgroundColor;
      $scope.inputData.headMainText= defaultVariables.headMainText;
      $scope.inputData.headMainTextSize= defaultVariables.headMainTextSize;
      $scope.inputData.headMainTextColor= defaultVariables.headMainTextColor;
      $scope.inputData.headMainTextBold= defaultVariables.headMainTextBold;
      $scope.inputData.headMainTextItal= defaultVariables.headMainTextItal;
      $scope.inputData.secondText= defaultVariables.secondText;
      $scope.inputData.secondTextSize= defaultVariables.secondTextSize;
      $scope.inputData.secondTextColor= defaultVariables.secondTextColor;
      $scope.inputData.secondTextBold= defaultVariables.secondTextBold;
      $scope.inputData.thirdText= defaultVariables.thirdText;
      $scope.inputData.thirdTextSize= defaultVariables.thirdTextSize;
      $scope.inputData.thirdTextColor= defaultVariables.third;
      $scope.inputData.thirdTextBold= defaultVariables.thirdTextBold;
      $scope.inputData.thirdTextItal= defaultVariables.thirdTextItal;
      $scope.inputData.sideTextOne= defaultVariables.sideTextOne;
      $scope.inputData.sideTextTwo= defaultVariables.sideTextTwo;
      $scope.inputData.sideTextThree= defaultVariables.sideTextThree;
      $scope.inputData.sideTextFour= defaultVariables.sideTextFour;
      $scope.inputData.sideTextFive= defaultVariables.sideTextFive;
      $scope.inputData.sideTextSix= defaultVariables.sideTextSix;
      $scope.inputData.sideTextSeven= defaultVariables.sideTextSeven;
      $scope.inputData.sideTextEight= defaultVariables.sideTextEight;
      $scope.inputData.sideTextNine= defaultVariables.sideTextNine;
      $scope.inputData.sideTextTen= defaultVariables.sideTextTen;
      $scope.inputData.sideFont = defaultVariables.sideFont;
      $scope.inputData.sideSize = defaultVariables.sideSize;
      $scope.inputData.sideFontColor = defaultVariables.sideFontColor;

      $scope.inputData.aboutHead=defaultVariables.aboutHead;
      $scope.inputData.aboutHeadSize=defaultVariables.aboutHeadSize;
      $scope.inputData.aboutHeadColor=defaultVariables.aboutHeadColor;
      $scope.inputData.aboutHeadBold=defaultVariables.aboutHeadBold;
      $scope.inputData.aboutHeadItal=defaultVariables.aboutHeadItal;
      $scope.inputData.aboutHeadFont=defaultVariables.aboutHeadFont;
      $scope.inputData.aboutSecondOne=defaultVariables.aboutSecondOne;
      $scope.inputData.aboutSecondTwo=defaultVariables.aboutSecondTwo;
      $scope.inputData.aboutSecondThree=defaultVariables.aboutSecondThree;
      $scope.inputData.aboutSecondFour=defaultVariables.aboutSecondFour;
      $scope.inputData.aboutSecondFive=defaultVariables.aboutSecondFive;
      $scope.inputDat.aboutOneText=defaultVariables.aboutOneText;
      $scope.inputData.aboutTwoText=defaultVariables.aboutTwoText;
      $scope.inputData.aboutThreeText=defaultVariables.aboutThreeText;
      $scope.inputData.aboutFourText=defaultVariables.aboutFourText;
      $scope.inputData.aboutFiveText=defaultVariables.aboutFiveText;
      $scope.inputData.aboutSecondFont=defaultVariables.aboutSecondFont;
      $scope.inputData.aboutSecondBold=defaultVariables.aboutSecondBold;
      $scope.inputData.aboutSecondSize=defaultVariables.aboutSecondSize;
      $scope.inputData.aboutSecondColor=defaultVariables.aboutSecondColor;
      $scope.inputData.aboutSecondItal=defaultVariables.aboutSecondItal;
      $scope.inputData.aboutTextFont=defaultVariables.aboutTextFont;
      $scope.inputData.aboutTextBold=defaultVariables.aboutTextBold;
      $scope.inputData.aboutTextSize=defaultVariables.aboutTextSize;
      $scope.inputData.aboutTextColor=defaultVariables.aboutTextColor;
      $scope.inputData.aboutTextItal=defaultVariables.abouttextItal;

      console.log(defaultVariables, "defaultVariables");
  });
};

$scope.getDefaults();
console.log($scope.inputData)

var service = ClientService;

$scope.$watchCollection('inputData', function(newVal, oldVal){
  var italics;
  italics=function(input){
    if(input==true){
      input="italics";
    }
    else if(input==false){
      input="normal";
    };
  };
  var bold;
  bold=function(input){
    if(input==true){
      input="bold"
    }
    else if(input==false){
      input="normal"
    }
  }

  italics(inputData.headMainTextItal);
  italics(inputData.secondTextItal);
  italics(inputData.thirdTextItal);


});




    ///chart stuffff
    $scope.$watch.years=3;


    $scope.submitEmail = function() {
        data = {
            email: $scope.submit.email,
            maritalStatus: $scope.inputData.maritalStatus,
            zipCode: $scope.inputData.zipCode,
            income: $scope.inputData.income,
            targetPropertyPrice: $scope.inputData.targetPropertyPrice,
            followup: ""
        };
        clientService.submitEmail(data);
        $scope.submit.email = "";
    }


}]);
