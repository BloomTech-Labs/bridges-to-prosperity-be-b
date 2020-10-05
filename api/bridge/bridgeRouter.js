const express = require('express');
const bridgeModel = require('./bridgeModel');
const router = express.Router();
const validateBridgeId = require('../middleware/validate-bridge-id');

router.post('/', async (req, res) => {
  bridgeModel.addBridge(req.body)
    .then((id) => {
      res.status(200).json({ message: 'Added bridge!', id: id });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
});

router.get('/', async (req, res) => {
  bridgeModel
    .findAll()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get('/:id', validateBridgeId, async (req, res) => {
  const id = req.params.id;
  bridgeModel.getBridgeById(id).then((bridge) => {
    res.status(200).json(bridge);
  });
});

router.put('/update/:id', validateBridgeId, async (req, res) => {
  const id = req.params.id;
  const updatedBridge = {
    ...req.body,
  };
  bridgeModel
    .updateBridge(id, updatedBridge)
    .then((newBridge) => {
      res.status(200).json(newBridge);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.delete('/delete/:id', validateBridgeId, async (req, res) => {
  const id = req.params.id;
  bridgeModel
    .deleteBridge(id)
    .then(() => {
      res.status(200).json({ message: `Deleted bridge with ID ${id}.` });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

module.exports = router;
