const Email = require('./email')

Email.methods(['get', 'post', 'put', 'delete'])
Email.updateOptions({new: true, runValidators: true})

module.exports = Email