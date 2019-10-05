const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload')

const SessionController = require('./app/controllers/SessionController');
const SpotController = require('./app/controllers/SpotController');
const DashboardController = require('./app/controllers/DashboardController');
const BookingController = require('./app/controllers/BookingController');

const upload = multer(uploadConfig);

const sessionRoutes = express.Router();

    sessionRoutes.post('/', SessionController.store);

const spotRoutes = express.Router();

    spotRoutes.get('/', SpotController.index);
    spotRoutes.post('/', upload.single('thumbnail'), SpotController.store);
    spotRoutes.post('/:spot_id/bookings', BookingController.store);

const dashboardRoutes = express.Router();
    
    dashboardRoutes.get('/', DashboardController.show);

const routes = express.Router();

routes.use('/sessions', sessionRoutes);
routes.use('/spots', spotRoutes);
routes.use('/dashboard', dashboardRoutes);

module.exports = routes;