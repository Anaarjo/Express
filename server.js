// criando nosso servidor
/* first we need to require the libary express*/

const express = require('express')
// creating an app that we gonna be able to settle everything
const app = express()

// will save all the files 
app.use(express.static("public"))

// using the variable to be able to use ejs and create an ejs file and download the ejs extension
app.set('view engine', 'ejs')
app.use(logger)

// make a get request , it has 3 parameters req, res, next, but we gonna use 2
//app.get('/', (req, res) => {
    // console.log('Here')

    // it means there's an error in the server
    //res.sendStatus(500)

    // res.send("Hi")

    // set a file to download
    //res.download('server.js')

    // or a json 
    //  res.send(500).json({ message: "Error" })


    /*to do that create a folder called views and inside a file called index.js */
    /*a second parameter is just an obj */
   // res.render('index', {text: 'World'})
   

//})


const useRouter = require('./routes/users')

app.use('/users', useRouter)


// Middleware
//we dont use next so much, it's often with middleware only.
function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}





// for the server run, it is need a port number 
app.listen(3000)