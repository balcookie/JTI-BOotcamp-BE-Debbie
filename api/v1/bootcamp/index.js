const express = require('express');
const router = express.Router();
const mongo = require('mongojs');
const db = mongo('mongodb+srv://gojo6:gojo1212@techcamp.ikxkupn.mongodb.net/tech-camp', ['TODO']);

router.get('/', function(req, res, next){
    db.todos.find({},function(err, result){
        if(err){
            res.send(err);
        } else {
            res.json(result);
        }
    })
});

module.exports = router;