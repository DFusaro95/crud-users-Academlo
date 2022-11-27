
const usersController = require('./users.controllers')

const getAllUsers = (req, res) => {
  usersController.findAllUsers()
  .then((data) => {
    res.status(200).json(data)
  })
  .catch((err) => {
     res.status(400).json({message: err.message})
  })
}

const getUserById = (req, res) => {
  const id = req.params.id
  usersController.findUserById(id)
    .then((data) => {
      if(data){
        res.status(200).json(data)
      } else {
        res.status(404).json({message: 'Invalid ID'})
      }
    })
    .catch((err) => {
      res.status(400).json({message: err.message})
    })
}

const postUser = (req, res) => {
  const { first_name, last_name, email, password, birthday } = req.body
  usersController.createUser({ first_name, last_name, email, password, birthday })
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(400).json({message: err.message})
    })
    
}

const patchUser = (req, res) => {
  const id = req.params.id
  const { first_name, last_name, email, password, birthday } = req.body
  usersController.updateUser(id, { first_name, last_name, email, password, birthday })
    .then((data) => {
      if (data){
        res.status(200).json({message: 'User updated succesfully'})
      } else {
        res.status(404).json({message: 'Invalid ID'})
      }
    })
    .catch((err) =>{
      res.status(400).json({message: err.message})
    })
}

const deleteUser = (req, res) => {
  const id = req.params.id
  usersController.deleteUser(id)
    .then(() => {
      if(data){
        res.satus(204).json({message: 'User deleted succesfully'})
      } else {
        res.status(404).json({message: 'Invalid ID'})
      }
    })
    .catch((err) => {
      res.status(400).json({message: err.message})
    })
    
}

module.exports = {
  getAllUsers,
  getUserById,
  postUser,
  patchUser,
  deleteUser
}