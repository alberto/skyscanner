require('isomorphic-fetch');
require('es6-promise').polyfill();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./api/');
const mapper = require('./mapper');

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

/**
  Simple flight search api wrapper.

  Api params and location values are here:
  http://business.skyscanner.net/portal/en-GB/Documentation/FlightsLivePricingQuickStart
*/
app.get('/api/search', (req, res) => {
  api.livePricing.search(req.query)
  .then((results) => {
    res.json(mapper.mapAll(results));
  })
  .catch(console.error);
});


app.post('/api/pricing', (req, res) => {
  api.livePricing.createSession(req.body)
    .then((response) => {
      const location = response.location;
      const sessionKey = location.substring(location.lastIndexOf('/') + 1);
      return res.json({
        sessionKey,
        response
      });
  })
  .catch(console.error);
});

app.get('/api/pricing', (req, res) => {
  api.livePricing.pollSession(req.query.sessionKey)
  .then(results => {
    const response = mapper.mapAll(results);
    response.status = results.Status;
    return res.json(response);
  });
});

app.listen(4000, () => {
  console.log('Node server listening on http://localhost:4000');
});
