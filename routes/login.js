import express from 'express';
const router = express.Router();

/* Login page for user. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../view/public', 'index.html'));
});

export default router;
