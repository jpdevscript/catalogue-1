var express = require('express');
var app = express();
var router = express.Router();
var PORT = 8081;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept')
  next()
})


router.get('/watches', function(req, res) {
  res.json({
    data: [
      { 
        id: 1,
        name: 'Apple Watch Series 6',
        brand: 'Apple',
        price: 529
      },
      {
        id: 2,
        name: 'Apple Watch SE',
        brand: 'Apple',
        price: 369
      },
      {
        id: 3,
        name: 'Apple Watch Series 3',
        brand: 'Apple',
        price: 259
      }
    ],
  });
});

router.get('/iphones', function(req, res) {
  res.json({
    data: [
      { 
        id: 1,
        name: 'iPhone 12 Pro',
        brand: 'Apple',
        price: 1399 
      },
      {
        id: 2,
        name: 'iPhone 12',
        brand: 'Apple',
        price: 979
      },
      {
        id: 3,
        name: 'iPhone SE',
        brand: 'Apple',
        price: 599
      },
    ],
  });
});

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Apple API started on port ${PORT}`);
});
