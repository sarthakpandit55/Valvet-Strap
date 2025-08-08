const express = require('express');
const router = require.Router();

router.get('/', (req, res) => {
    res.render("index");
});

module.exports = router;