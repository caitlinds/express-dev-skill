var express = require('express');
var router = express.Router();

var skillsCtrl = require('../controllers/skills');

//GET index page for skills
//define controller fn to show pg w all skills (skills index)
router.get('/', skillsCtrl.index);

router.get('/:id', skillsCtrl.show);

module.exports = router;