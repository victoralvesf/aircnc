const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload')

const SessionController = require('./app/controllers/SessionController');
const SpotController = require('./app/controllers/SpotController');

const upload = multer(uploadConfig);

const sessionRoutes = express.Router();

    sessionRoutes.post('/', SessionController.store);

const spotRoutes = express.Router();

    spotRoutes.post('/', upload.single('thumbnail'), SpotController.store);


const routes = express.Router();

routes.use('/sessions', sessionRoutes);
routes.use('/spot', spotRoutes);

module.exports = routes;