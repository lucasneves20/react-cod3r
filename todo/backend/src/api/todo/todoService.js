const Todo = require('./todo')

Todo.methods(['Get', 'Post', 'Put', 'Delete'])
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo