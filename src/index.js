const express = require('express')
// const hbs  = require('express-handlebars')
const morgan = require('morgan')
const methodOverride = require('method-override')
const path = require('path')

const handlebars = require('express-handlebars')
const app = express()
const port = 3000


const route = require('./routes')
const db = require('./config/db')

// connect db
db.connect()

app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded(
  {
    extended: true 
  }
))
app.use(express.json())
app.use(methodOverride('_method'));


app.engine('handlebars', handlebars.engine());

app.set('view engine','handlebars')
app.set('views', path.join(__dirname, 'resourses','views'));



route(app)



app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})



