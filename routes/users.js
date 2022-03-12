import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [

]

// all routes in here are starting with /users

// Get Users
router.get('/', (req, res) => {
    res.send(users)
});

// Post Users
router.post('/', (req, res) => {
    // Get Data from postman (Body raw json)
    const user = req.body;

    // Generate Id
    const userId = uuidv4();

    // add id and spread
    const userWithId = {
        id: userId,...user
    }
    users.push(userWithId);

    res.send(`User with the username ${user.firstName} added to the Database`)
})

// Get User (/users/123123123)
router.get('/:id', (req, res) => {
    //get url id
    const { id } = req.params;

    // match user id with params id
    const foundUser = users.find((user) => user.id === id)

    res.send(foundUser); 
})

// Delete User
router.delete('/:id', (req, res) => {
     //get url id
     const { id } = req.params;

    //  filter user
    // if true keep | if false it removes from array
    users = users.filter((user) => user.id !== id);
    
    res.send(`Users with the id ${id} has been deleted`)

})

// Update User 
router.patch('/:id', (req, res) => {
    //  get url id
      const { id } = req.params;
    //  object from data
      const { firstName, lastName, age } = req.body;

    // find same from params with id want to edit
     const user = users.find((user) => user.id === id);

     if(firstName) user.firstName = firstName;
     if(lastName) user.lastName = lastName;
     if(age) user.age = age;
     
     res.send(`User with the id ${id} has beed Updated`)
    
})



export default router;