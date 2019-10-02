const express = require('express'),
    routes = require('./routes'),
    mongoose = require('mongoose'),
    app = express()

mongoose.connect('mongodb://omnistack:default1@ds229108.mlab.com:29108/omnistack', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
app.use(routes)

app.listen(3000)