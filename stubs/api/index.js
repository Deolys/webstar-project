const router = require('express').Router();
const authMiddleware = require('../middleware/auth-middleware');

router.get('/cards-data', (request, response) => {
  response.send(require('../json/cards-data/success.json'))
})

router.get('/messages', (request, response) => {
  response.send(require('../json/messages/success.json'))
})

router.get('/user', authMiddleware, (request, response) => {
  const email = request.userEmail;

  try {
    const usersData = require('../json/users-data/success.json');
    const userData = usersData.data.find(user => user.email === email);

    if (userData) {
      return response.json(userData.favourites);
    } 
    response.status(404).send('User not found');

  } catch (error) {
    console.error('Error reading file:', error);
    response.status(500).send('Internal server error');
  }
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

router.get('/messages/:id', (request, response) => {
  const cardId = request.params.id;

  try {
    const cardsData = require('../json/messages/success.json');
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

router.post('/login', (request, response) => {
 const { email, password } = request.body.loginData;

 try {
  const users = require('../json/users-data/success.json');
  const user = users.data.find(user => user.email === email && user.password === password);

  if (!user) {
    return response.status(401).send('Invalid credentials'); 
  } 

  const responseObject = {
    email: user.email,
  }

  if (user.cardId){
    responseObject.cardId = user.cardId || "";
  }
  return response.json(responseObject);
 } catch (error) {
    console.error('Error reading file:', error);
    response.status(500).send('Internal server error');
 }
})

router.post('/register', async (request, response) => {
  const { _name, email, password, confirmPassword } = request.body.registerData;

  try {
      if (password !== confirmPassword) {
          return response.status(400).send('Passwords do not match');
      }
      const users = require('../json/users-data/success.json');

      const existingUser = users.data.find(user => user.email === email);

      if (existingUser) {
          return response.status(400).send('User with this email already exists');
      }

      return response.json({ email: email});
  } catch (error) {
      console.error('Error registering user:', error);
      response.status(500).send('Internal server error');
  }
});

router.post('/favourite', async (request, response) => {
  const { cardId, email } = request.body;

  try {
      const users = require('../json/users-data/success.json');
      const user = users.data.find(user => user.email === email);

      if (!user) {
          return response.status(404).send('User not found');
      }

      const index = user.favourites.indexOf(cardId);
      if (index !== -1) {
          return response.status(200).send('Card removed from favourites successfully');
      }
      
      response.status(200).send('Card added to favourites successfully');
  } catch (error) {
      console.error('Error adding card to favourites:', error);
      response.status(500).send('Internal server error');
  }
});

module.exports = router;
