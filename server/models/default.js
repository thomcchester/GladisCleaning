var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// TODO enter min and max values.

var Default_Values = new Schema({

  headerBackgroundColor:{type: String},
  headerBackgroundHeight:{type: Number},
  sideNavWidth:{type: Number},
  sideNavBackgroundColor:{type: String},
  headMainText:{type: String},
  headMainTextSize:{type: Number},
  headMainTextColor:{type: String},
  headMainTextBold:{type: Boolean},
  headMainTextItal:{type: Boolean},
  secondText:{type: String},
  secondTextSize:{type: Number},
  secondTextColor:{type: String},
  secondTextBold:{type: Boolean},
  secondTextItal:{type: Boolean},
  thirdText:{type: String},
  thirdTextSize:{type: Number},
  thirdTextColor:{type: String},
  thirdTextBold:{type: Boolean},
  thirdTextItal:{type: Boolean},
  someValue: {type: Number}

});

module.exports = mongoose.model("Default_Values", Default_Values);
