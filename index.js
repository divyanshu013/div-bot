var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/webhook', function(req, res) {
  if (req.query['hub.mode'] === 'subscribe' && req.query['hub.verify_token'] === 'top-secret-div') {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  }
  else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);
  }
});

app.listen(port, function () {
  console.log('App listening on port ' + port);
})

//https://div-bot.herokuapp.com/
