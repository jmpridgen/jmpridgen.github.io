const express = require('express');

const router = express.Router();

router.use((error, req, res, _next) => {
  const errorType = error.type ? error.type : 'UnknownError';
  return res.status(500).json({
    type: errorType,
    message: error.message,
  });
});

module.exports = router;
