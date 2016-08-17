var express = require('express');
var router = express.Router();
var Default = require("../models/default.js");

router.route('/')
    .get(function(req, res){
        Default.find(function(err, defaults){
            if(err){console.log(err);}
            res.send(defaults);
        });
    })
    /*  the following post route will only ever be used once.
     *  it is there to provide the initial values for the calculator
     *  which will be generated everytime this application is
     *  loaded fresh on a new server.
     */
    .post(function(req, res){
        var defaults = new Default({

            someValue : req.body.someValue,
            headerBackgroundColor: req.body.headerBackgroundColor,
            headerBackgroundHeight:req.body.headerBackgroundHeight,
            sideNavWidth:req.body.sideNavWidth,
            sideNavBackgroundColor:req.body.sideNavBackgroundColor,
            headMainText:req.body.headMainText,
            headMainTextSize: req.body.headMainTextSize,
            headMainTextColor: req.body.headMainTextColor,
            headMainTextBold: req.body.headMainTextBold,
            headMainTextItal: req.body.headMainTextItal,
            secondText: req.body.secondText,
            secondTextSize : req.body.secondTextSize,
            secondTextColor : req.body.secondTextColor,
            secondTextBold : req.body.secondTextBold,
            secondTextItal : req.body.secondTextItal,
            thirdText : req.body.thirdText,
            thirdTextSize : req.body.thirdTextSize,
            thirdTextColor : req.body.thirdTextColor,
            thirdTextBold : req.body.thirdTextBold,
            thirdTextItal : req.body.thirdTextItal,
            sideTextOne : req.body.sideTextOne,
            sideTextTwo : req.body.sideTextTwo,
            sideTextThree : req.body.sideTextThree,
            sideTextFour : req.body.sideTextFour,
            sideTextFive : req.body.sideTextFive,
            sideTextSix : req.body.sideTextSix,
            sideTextSeven : req.body.sideTextSeven,
            sideTextEight : req.body.sideTextEight,
            sideTextNine : req.body.sideTextNine,
            sideTextTen : req.body.sideTextTen

        });
        defaults.save(function(err, defaults){
            if(err) console.log(err);
            res.send(defaults);
        });
    });

    router.route('/:id').put(function(req, res){
        Default.findById(req.body._id, function(err, defaults){
            if(err) res.send(err);
            console.log(req.body);

            defaults.someValue = req.body.someValue;
            defaults.headerBackgroundColor= req.body.headerBackgroundColor;
            defaults.headerBackgroundHeight= req.body.headerBackgroundHeight;
            defaults.sideNavWidth= req.body.sideNavWidth;
            defaults.sideNavBackgroundColor= req.body.sideNavBackgroundColor;
            defaults.headMainText= req.body.headMainText;
            defaults.headMainTextSize= req.body.headMainTextSize;
            defaults.headMainTextColor= req.body.headMainTextColor;
            defaults.headMainTextBold= req.body.headMainTextBold;
            defaults.headMainTextItal= req.body.headMainTextItal;
            defaults.secondText= req.body.secondText;
            defaults.secondTextSize = req.body.secondTextSize;
            defaults.secondTextColor = req.body.secondTextColor;
            defaults.secondTextBold = req.body.secondTextBold;
            defaults.secondTextBold = req.body.secondTextBold;
            defaults.secondTextItal = req.body.secondTextItal;
            defaults.thirdText = req.body.thirdText;
            defaults.thirdTextSize = req.body.thirdTextSize;
            defaults.thirdTextColor = req.body.thirdTextColor;
            defaults.thirdTextBold = req.body.thirdTextBold;
            defaults.thirdTextItal = req.body.thirdTextItal;
            defaults.sideTextOne = req.body.sideTextOne;
            defaults.sideTextTwo = req.body.sideTextTwo;
            defaults.sideTextThree = req.body.sideTextThree;
            defaults.sideTextFour = req.body.sideTextFour;
            defaults.sideTextFive = req.body.sideTextFive;
            defaults.sideTextSix = req.body.sideTextSix;
            defaults.sideTextSeven = req.body.sideTextSix;
            defaults.sideTextEight = req.body.sideTextSeven;
            defaults.sideTextNine = req.body.sideTextEight;
            defaults.sideFont = req.body.sideFont;
            defaults.sideSize = req.body.sideSize;
            defaults.sideFontColor = req.body.sideFontColor;





            defaults.save(function(err){
                if(err) res.send(err);
                res.json({message: 'defaults have been updated!'});
            });
        });
    });

module.exports = router;
