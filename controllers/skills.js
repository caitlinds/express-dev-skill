const Skill = require('../models/skill');

module.exports = {
    index,
    show
}

//all methods require cbfn
function index(req, res) {
    //second parameter is info to pass into view
    //need to see skills and whether or not theyre masteres
    res.render('skills/index', {
        //need to require skills array from models
        skills: Skill.getAll(),
        title: 'All Skills'
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Skill Details'
    })
}