const skills = [
    {skill: 'HTML', id: 123, mastered: true},
    {skill: 'JS', id: 456, mastered: true},
    {skill: 'Express', id: 789, mastered: false},
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.mastered = false; //def false bc o/w wouldnt be added
    skills.push(skill); //add new obj to todos arr
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
  }