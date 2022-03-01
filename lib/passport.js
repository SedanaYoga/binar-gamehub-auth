const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const { UserGame } = require('../models')

// Authentication
async function authenticate(email, password, done) {
  try {
    const user = await UserGame.authenticate({ email, password })
    // 'done' represent the error, if no error found we can set to null
    // Second parameter is the return value
    return done(null, user)
  } catch (err) {
    return done(null, false, { message: err.message })
  }
}

passport.use(
  new LocalStrategy(
    { usernameField: 'username', passwordField: 'password' },
    authenticate
  )
)

// Serialize
passport.serializeUser((user, done) => done(null, user.id))
// Deserialize
passport.deserializeUser(async (id, done) =>
  // findByPk => query with the primary key
  done(null, await UserGame.findByPk(id))
)

module.exports = passport
