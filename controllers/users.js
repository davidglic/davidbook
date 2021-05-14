const users = require('../models/users.js')

const index = (req, res) => {
    res.render('users/index.ejs', {users})
}
const signUp = (req, res) => {
    res.render('users/signup.ejs')
}
const createUser = (req, res) => {
    const uuid = new Date().valueOf()
    req.body.uuid = uuid
    users.push(req.body)
    res.redirect('/users')
}

module.exports = {
    index,
    signUp,
    createUser
}
