const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
// Note: this file is private, and you may need to create it
const keys = require('./keys')
passport.use(new GoogleStrategy(keys.google), () => {
    // callback
})