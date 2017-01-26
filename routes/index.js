var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js')
    /* GET home page. */
router.get('/cheese', function(req, res, next) {
    knex('cheese').select('*').then(cheeses => {
        res.send(cheeses);
    })
});

router.post('/cheese', function(req, res, next) {
    let newCheese = {
        profile_id: req.body.profile_id,
        cheese_type: req.body.cheese_type,
        rating: req.body.rating,
        comment: req.body.comment
    }
    knex('cheese').insert(newCheese).then(result => {
        res.send('You added a new cheese!');
    })

});

router.get('/cheese/:id', function(req, res, next) {
    knex('cheese').select('*').where('id', req.params.id).then(cheese => {
        res.send(cheese);
    })
});

router.put('/cheese/:id', function(req, res, next) {
    let updateCheese = {
        profile_id: req.body.profile_id,
        cheese_type: req.body.cheese_type,
        rating: req.body.rating,
        comment: req.body.comment
    }
    knex('cheese').where('id', req.params.id).update(updateCheese).then(cheese => {
        res.send('Cheese Updated!');
    })
});

router.delete('/cheese/:id', function(req, res, next) {
    knex('cheese').where('id', req.params.id).del().then(result => {
        res.send('Cheese Deleted!');

    })


});



module.exports = router;
