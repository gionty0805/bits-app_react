const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('http://localhost:3001/api/');
    res.send({title: 'Hello bro.'});
});

module.exports = router;