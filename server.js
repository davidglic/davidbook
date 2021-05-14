const express = require('express')
const app = express()

const routes = require('./routes')

app.use(express.static('public'))
app.use('/users', routes.users) //whenever we see a users address ferry to this router.


app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(3000, () => {
    console.log('Server initialized on port 3000.')
})
