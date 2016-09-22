var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var bodyparser = require('body-parser');

app.engine('handlebars', exphbs({
  defaultLayout: 'layout',
  helpers: {
    json: function(context) {
      return JSON.stringify(context);
    }
  }
}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));
app.use(bodyparser.json());

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/about', function(req, res) {
  res.render('about', {isAboutPage: true});
});

app.get('/about/solution', function(req, res) {
  res.render('about-solution', {isSolutionPage: true});
});

app.get('/about/faq', function(req, res) {
  res.render('about-faq', {isFaqPage: true});
});

app.get('/technology', function(req, res) {
  res.render('technology', {isTechnologyPage: true});
});

app.get('/technology/whitepapers', function(req, res) {
  res.render('technology-whitepapers', {isWhitepapersPage: true});
});

app.get('/newsroom', function(req, res) {
  res.render('newsroom', {isNewsroomPage: true});
});

app.get('/contact', function(req, res) {
  res.render('contact', {isContactPage: true});
});

app.listen(3434, function() {
  console.log('server up on port 3434...');
})
