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
