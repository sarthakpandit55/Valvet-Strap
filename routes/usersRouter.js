const express = require('express');
const router = express.Router();
const {registerUser, loginUser} = require('../controllers/authControler');
 
router.get('/', (req, res)=>{
    res.send("its working");
})

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;