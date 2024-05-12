const router = require('express').Router();

router.get('/cards-data', (request, response) => {
  response.send(require('../json/cards-data/success.json'))
})

router.get('/messages', (request, response) => {
  response.send(require('../json/messages/success.json'))
})

module.exports = router;
