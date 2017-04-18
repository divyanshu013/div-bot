var express = require('express');
var app = express();

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

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})

//https://div-bot.herokuapp.com/
