const express = require('express');

const router = express.Router();

router.use(require('./catchAll'));

module.exports = router;
