App.factory("ClientService", ["$http", function($http){
    var client = {};

    var alterDefaults = function(object){
        $http.put('/defaults/' + object._id, object).then(function(){
            getDefaults();
        });
    };

    var getDefaults = function(){
        $http.get("/defaults").then(function(response){
            client.defaults = response.data[0];
        });
    };

    var submitEmail = function(data){
        $http.post("/submit", data).then(function(response){
            console.log("this was the response from the service submitemail", response);
        });
    };

    /* the following variable and function are for loading initial values
    into the DB if there are none. there should be no need to include
    them into the return object for this factory. */
    var initialValues = {
        headerBackgroundColor:"#123456",
        headerBackgroundHeight:120,
        sideNavWidth:150,
        sideNavBackgroundColor:"#456789",
        headMainText:"Gladis' Cleaning",
        headMainTextSize:17,
        headMainTextColor:"#000000",
        headMainTextBold:false,
        headMainTextItal:false,
        secondText:"I clean like it is no one's business... except mine!",
        secondTextSize:14,
        secondTextColor:"#000000",
        secondTextBold:false,
        secondTextItal:false,
        thirdText:"I can clean just about anything, you tell me what you want and I will do it.",
        thirdTextSize:12,
        thirdTextColor:"#000000",
        thirdTextBold:false,
        thirdTextItal:false,
        sideTextOne:"thing 1",
        sideTextTwo:"thing 2",
        sideTextThree:"thing 3",
        sideTextFour:"thing 4",
        sideTextFive:"thing 5",
        sideTextSix:"thing 6",
        sideTextSeven: "thing 7",
        sideTextEight: "thing 8",
        sideTextNine: "thing 9",
        sideTextTen: "thing 10",
        sideFont: "something",
        sideSize: 17,
        sideFontColor: "#000000",
        aboutHead="about string of stuff"
        aboutHeadSize=17,
        aboutHeadColor="#000000",
        aboutHeadBold=false,
        aboutHeadItal=false,
        aboutHeadFont="string",
        aboutSecondOne="text of some sort",
        aboutSecondTwo="text of some sort",
        aboutSecondThree="text of some sort",
        aboutSecondFour="text of some sort",
        aboutSecondFive="text of some sort",
        aboutOneText="longer Smaller Text"
        aboutTwoText="longer smaller text",
        aboutThreeText="longer smaller text",
        aboutFourText="longer smaller text",
        aboutFiveText="longer smaller text",
        aboutSecondFont="string of font",
        aboutSecondBold=false,
        aboutSecondSize=17,
        aboutSecondColor="#000000"
        aboutSecondItal=false,
        aboutTextFont="string"
        aboutTextBold="false",
        aboutTextSize=17,
        aboutTextColor="#000000",
        aboutTextItal=false,
        someValue:1100

    };

    var checkIfThereIsData = function(){
        $http.get('/checkDB').then(function(response){
            var bool = response.data;
            if(bool === false){
                $http.post('/defaults', initialValues).then(function(response){
                    getDefaults();
                });
            }else{
                getDefaults();
            }
        });
    };
    checkIfThereIsData();

    return {
        alterDefaults: alterDefaults,
        client: client,
        getDefaults: getDefaults,
        submitEmail: submitEmail
    };
}]);
