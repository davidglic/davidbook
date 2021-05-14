users = require('../models/users.js')

const index = (req, res) => {
    res.render('users/index.ejs', {users})
}
const signUp = (req, res) => {
    res.render('users/signup.ejs')
}

module.exports = {
    index,
    signUp
}
