const express = require('express');
const { AssertionError } = require('assert');

const router = express.Router();

router.use((error, req, res, next) => {
  if (error instanceof AssertionError) {
    return res.status(400).json({
      type: 'AssertionError',
      message: error.message,
    });
  }
  return next(error);
});
