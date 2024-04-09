import express from 'express';
const router = express.Router();

/* Login page for user. */
router.get('/', function(req, res, next) {
  res.send('This will be the registration page');
});

export default router;
