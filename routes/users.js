// we need to import express
const express = require('express')
/* create a router and there is like an app , but mini and just live inside this main app , 
so this mini will be undependent */
const router = express.Router()

//const users = [{ name: "Ana"}, { name: "Alice"}]

// This should be encapsulated 
router.get('/', (req, res) => {
    res.send('User List')
})

router.get('/new', (req, res) => {
// it's gonna render out this page, so we need to create a file
   // res.render("users/new", { firstName:"Ana"})
    res.render("users/new")
   // res.render("/users/new", { FName:"Iago"})
  //  res.send("User New Form")

})

router.post("/", (req, res) => {
   res.send("Create User")
})



// get access to an individual user
/*http://localhost:3000/users/1 , it shows that */

router.route("/:id").get((req, res) => {

    // it shows the name of the user on the terminal
    console.log(req.user)
    res.send(`Get User With ID ${req.params.id}`)
})
.put((req, res) => {
    res.send(`Update User With ID ${req.params.id}`)
})
.delete((req, res) => {
    res.send(`Delete User With ID ${req.params.id}`)
})
   // const users = [{ name: "Ana"}, { name: "Alice"}]
router.param("id", (req, res, next, id) => {
    //console.log(id)
    req.user = users[id]
    next()
})



// USING THE ROUTER
module.exports = router 
