const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.use('/entrepreneurs', require('./entrepreneurs'));
router.use('/companies', require('./companies'));

module.exports = router;