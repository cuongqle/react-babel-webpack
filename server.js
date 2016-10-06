var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require("cors");

app.use(cors({credentials: true, origin: true}));
app.use(bodyParser.json());

app.get('/products', function (req, res) {
    res.status(200).json([
        {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
        {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
        {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
        {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
        {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
        {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
        ]
    );
});

app.listen(1234);
