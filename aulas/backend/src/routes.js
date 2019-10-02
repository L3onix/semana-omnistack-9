const express = require('express'),
    multer = require('multer'),
    uploadConfig = require('./config/upload'),
    routes = express.Router(),
    upload = multer(uploadConfig),
    SessionController = require('./controllers/SessionController'),
    SpotController = require('./controllers/SpotController'),
    DashboardController = require('./controllers/DashboardController'),
    BookingController = require('./controllers/BookingController')

routes.post('/sessions', SessionController.store)

routes.get('/spots', SpotController.index)
routes.post('/spots', upload.single('thumbnail'), SpotController.store)

routes.get('/dashboard', DashboardController.show)

routes.post('/spots/:spot_id/bookings', BookingController.store)

module.exports = routes;