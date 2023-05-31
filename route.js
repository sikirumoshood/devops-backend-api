const express = require('express');
const Router = express.Router
const router = Router()

const users = [
  {
    id: 1111,
    firstName: "Moshood",
    lastName: "Siiru",
    email: "sikirumoshood@gmal.com",
    password: "12345"
  },

  {
    id: 2222,
    firstName: "Lammy",
    lastName: "Jane",
    email: "lammyjane@gmal.com",
    password: "33333"
  },

  {
    id: 3333,
    firstName: "Sofia",
    lastName: "Nasir",
    email: "sofia@gmal.com",
    password: "password"
  },

  {
    id: 444,
    firstName: "Nadia",
    lastName: "Bashir",
    email: "nd@gmal.com",
    password: "password-nadia"
  },
]

router.get('/', (req, res) => {
  return res.status(200).json({ success: true })
})

router.get('/users', (req, res) => {
  return res.status(200).json({ success: true, users })
})

router.post('/auth/login', (req, res) => {
  const {email, password} = req.body

  console.log(':::: data :::::', email, password)

  // Verify if user provided email & password
  if(!email || !password) { 
    console.log(':::Missing credentials')
    return res.status(401).json({success:false, message: 'Please provide email & password.'})
  }

  // Verify credentials

  /***
   * 1. Do we have a user with this email ?
   * 2. Do the passwords for the user match ?
   */

  const user = users.find((user) => user.email === email)

  if(!user){
    console.log('::::User not found')
    return res.status(401).json({success:false, message: 'Invalid email or password'})
  }

  if(user.password !== password){
    console.log(':::Invalid password')
    return res.status(401).json({success:false, message: 'Invalid login credentials'})
  }

  // Login successful
  return res.status(200).json({success: true, user})
})

module.exports = {router}
