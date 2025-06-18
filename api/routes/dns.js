const express = require('express');
const router = express.Router();
const dnsService = require('../services/dnsService');

router.post('/add', async (req, res) => {
  const { name, type, value } = req.body;
  try {
    await dnsService.addRecord(name, type, value);
    res.send({ message: 'Record added' });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;