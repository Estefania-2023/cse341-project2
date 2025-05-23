const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => { 
    //#swagger.tags = ['Hello world!']
    res.send('Hello world!');});

router.use('/entrepreneurs', require('./entrepreneurs'));
router.use('/companies', require('./companies'));

module.exports = router;