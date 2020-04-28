var app = require('express')();
// var users = require('./User');
var bodyParser = require('body-parser')
var cors = require('cors');
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res) {
    res.send('<h1>Hello Node.js</h1>');
});

app.post('/enroll', (req, res) => {
    var json = req.body;
    console.log(json);
    res.status(200).send({ "message": "Data received" });
    // res.status(401).send({ "message": "Data received" });
});

app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});



// app.get('/index', function (req, res) {
//     res.send('<h1>This is index page</h1>');
// });

// app.get('/user', function (req, res) {
//     res.json(users.findAll());
// });

// app.get('/user/:id', function (req, res) {
//     var id = req.params.id;
//     res.json(users.findById(id));
// });

// app.post('/newuser', function (req, res) {
//     var json = req.body;
//     res.send('Add new ' + json.name + ' Completed!');
// });