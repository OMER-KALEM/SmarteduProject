const express = require('express');
const pageRoute = require('./routes/pageRoute');
const pageController = require('./controllers/pageController');

const app = express();

//Template Engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));

const port = 3000;

//Route
app.use('/', pageRoute);

app.listen(port, () => {
  console.log(`App stated on port ${port}`);
});
