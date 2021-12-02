const Router = require('express')
const router = new Router()
const controller = require('../controllers/authController')
const { check } = require('express-validator')
const roleMiddleware = require('../middleware/roleMiddleware')

const { registration, login, getUsers } = controller

router.post('/registration', [
  check('username', 'Имя пользователя не может быть пустым').notEmpty(),
  check('password', 'Пароль должен быть больше 4 и меньше 10 символов').isLength({min: 4, max:10})
], registration)
router.post('/login', login)
router.get('/users', roleMiddleware(['ADMIN']), getUsers)

module.exports = router
