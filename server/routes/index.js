const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('http://localhost:3001/api/');
    res.send({title: 'Hello bro.'});
});
router.get('/login', (req, res) => {
    console.log('http://localhost:3001/api/login');
    res.send({title: 'Login bro.'});
});
router.get('/join', (req, res) => {
    console.log('http://localhost:3001/api/join');
    res.send({title: 'Join bro.'});
});

module.exports = router;