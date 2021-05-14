users = require('../models/users.js')

const index = (req, res) => {
    res.render('users/index.ejs', {users})
}

module.exports = {
    index
}
