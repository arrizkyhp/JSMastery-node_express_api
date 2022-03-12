import express from "express";

import { createUser, getUsers, getUser, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();


// all routes in here are starting with /users

// Get Users
router.get('/', getUsers);

// Post Users
router.post('/', createUser)

// Get User (/users/123123123)
router.get('/:id', getUser)

// Delete User
router.delete('/:id', deleteUser)

// Update User 
router.patch('/:id', updateUser)



export default router;