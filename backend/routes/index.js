const express = require('express');
const router = express.Router();

const AtracaoController = require('../controllers/AtracaoController');
const DestinoController = require('../controllers/DestinoController');

router.get('/teste', (req, res) => {
    res.json('teste');
});

router.get('/atracoes', AtracaoController.getAllAttractions);
router.get('/atracoes/:id', AtracaoController.getAttractionById);

router.get('/destinos', DestinoController.getAllDestinations);
router.get('/destinos/:id', DestinoController.getDestinationById);

module.exports = router;
