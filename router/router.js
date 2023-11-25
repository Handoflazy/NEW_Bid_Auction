const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html')
});
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/instance-page.html')
});
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/product.html')
});
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/sign-in.html')
});

module.exports = router;