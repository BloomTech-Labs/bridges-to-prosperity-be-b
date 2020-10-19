const express = require('express');
const bridgeModel = require('./bridgeModel');
const router = express.Router();
const validateBridgeId = require('../middleware/validate-bridge-id');

router.post('/', async (req, res) => {
  bridgeModel
    .addBridge(req.body)
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
router.put('/update-images/', async (req, res) => {
  const data = req.body;
  for (let i = 0; i < data.length; i++) {
    if (data[i]['Completed Bridge Photo URL'] === '') {
      bridgeModel
        .updateBridgeByProjectCode(data[i]['Project Code'], {
          bridge_image: data[i]['Pre-Bridge Crossing Photo URL'],
        })
        .then()
        .catch((error) => {
          console.log(error);
        });
    } else {
      bridgeModel
        .updateBridgeByProjectCode(data[i]['Project Code'], {
          bridge_image: data[i]['Completed Bridge Photo URL'],
        })
        .then()
        .catch((error) => {
          console.log(error);
        });
    }
  }
  res.json({
    message: 'done',
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
router.get('/gdp/:id', async (req, res) => {
  const { id } = req.params;
  bridgeModel
    .getBridgeGDP(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;
