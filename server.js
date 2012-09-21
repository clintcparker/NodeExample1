var express = require('express'), 
    app = express.createServer(),
    Adder = require("./adder/adder");

app.listen(process.env.C9_PORT || process.env.PORT || 3000);

app.get('/', function (req, res) {
    var adder = new Adder();
    res.send(adder.add(req.query.val1 && req.query.val2));
});