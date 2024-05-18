const router = require('express').Router();

router.get('/cards-data', (request, response) => {
  response.send(require('../json/cards-data/success.json'))
})

router.get('/messages', (request, response) => {
  response.send(require('../json/messages/success.json'))
})

router.get('/cards-data/:id', (request, response) => {
  const cardId = request.params.id;

  try {
    const cardsData = require('../json/cards-data/success.json');
    const cardData = cardsData.data.find(card => card.id === cardId);

    if (cardData) {
      return response.json(cardData);
    } 
    response.status(404).send('Card not found');

  } catch (error) {
    console.error('Error reading file:', error);
    response.status(500).send('Internal server error');
  }
})

module.exports = router;
