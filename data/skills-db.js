const skills = [
    {skill: "JavaScript", learned: true},
    {skill: "React.js", learned: false},
    {skill: "Django", learned: false},
    {skill: "Python", learned: true},
    {skill: "Node.js", learned: null}
  ]

  module.exports = {
    getAll: function() {
        return skills
    }
  }