const { Router } = require('express')
const authMiddleware = require('../middlewares/authMiddleware')
const { signup, login, logout } = require('../controllers/authController')
const { readUsers, getUserMe, updateUserMe, deleteUserMe } = require('../controllers/userController')
const router = Router()

router.post('/users', readUsers)
router.post('/users/signup', signup)
router.post('/users/login', login)
router.post('/users/logout', logout)
router.get('/users/me', getUserMe)
router.patch('/users/me', updateUserMe)
router.delete('/users/me', deleteUserMe)

module.exports = router