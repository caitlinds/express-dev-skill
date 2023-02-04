const skills = [
    {skill: 'HTML', id: 123, mastered: true},
    {skill: 'JS', id: 456, mastered: true},
    {skill: 'Express', id: 789, mastered: false},
]

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}