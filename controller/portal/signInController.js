const asyncHandler = require('express-async-handler')
const { UserGame, setLogProps } = require('../../models')
const passport = require('../../lib/passport')

exports.renderSignInPage = asyncHandler((req, res) => {
  res.render('sign-in-up', { signType: 'in', error: '' })
})

exports.signInControl = asyncHandler(async (req, res) => {
  let error = ''
  const { email, password } = req.body
  const user = await UserGame.findOne({
    where: {
      email,
      password,
    },
  })
  if (!user || user.password !== password) {
    error = 'Unable to login, wrong email or password. Please Try Again.'
    return res.render('sign-in-up', { signType: 'in', error })
  }

  if (user !== null) {
    setLogProps(true, user.uuid, user.id, user.username, user.isAdmin)
    return res.redirect('/')
  } else {
    return res.redirect('/signin')
  }
})

exports.authLoginControl = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/signin',
  failureFlash: true, // for activate express flash
})

exports.whoami = (req, res) => {
  res.json({ username: req.user.dataValues.username })
}
