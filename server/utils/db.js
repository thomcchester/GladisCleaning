var express = require('express');
var router = express.Router();
var Default = require("../models/default.js");

/* initValues are for the initial startup of a server so they
can populate the calculator on the client-side. */

var initValues = new Default({

});



module.exports = router;
