const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
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

function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skill' });
}

function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function edit(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/edit', {
        title: 'Edit Skill',
        skill,
    })
}

function update(req, res) {
    req.body.mastered = !!req.body.mastered;
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
}