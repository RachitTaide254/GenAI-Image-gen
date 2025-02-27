const express = require('express');
const router = express.Router();
const apiController = require("./apiController")

router.post(
    '/submit',
    apiController.submit
  );

  module.exports = router;
