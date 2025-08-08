const express = require('express');
const router = express.Router();
const userModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/', (req, res)=>{
    res.send("hello");
})

router.post('/register', async (req, res)=>{

    try{
        let {email, password, fullname} = req.body;

        bcrypt.genSalt(10, (err, salt)=>{
            bcrypt.hash(password, salt, async (err, hash) => {
                if(err) return res.send(err.message);
                else{
                    let user = await userModel.create({
                        email,
                        password,
                        fullname
                    });

                    jwt.sign()
                }
            });
        });
    }
    catch(err){
        err.send(err.message);
    }

})

module.exports = router;