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
const show = (req, res) => {
    for (let i = 0; i < users.length; i++) {
        if (parseInt(users[i].uuid) === parseInt(req.params.id)) {
            res.render('users/profile.ejs', {user: users[i]})
        }
    }
}

module.exports = {
    index,
    signUp,
    createUser,
    show
}
