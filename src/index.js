const app = require('./app');


app.get('/', function(req, res){
    console.log('aiueo');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});