let database = require("../database");

let authController = {
  login: (req, res) => {
    res.locals.item = "login"
    res.render('auth/login')
  },

  register: (req, res) => {
    res.locals.item = "register"
    let email = req.query.email
    res.render('auth/register', { exampleInputEmail1: email });
    res.redirect('auth/register')
  },

  loginSubmit: (req, res) => {
    
    if (database.cindy.username = req.body.username && database.cindy.password === req.body.password) {
      req.session['user'] = req.body.username;
      console.log("this is" + req.session['user'])
      console.log(req.session)
      res.render('reminder/index', { reminders: database.cindy.reminders })
    } else {
      res.redirect('/');
    }
    
  },

  registerSubmit: (req, res) => {
    console.log('register', req.body)
    if (req.body.username && req.body.password) {
      database[req.body.username] = { username: req.body.username , password: req.body.password }
      req.session["user"] = req.body.username;
      res.redirect('/login');
    } else {
      res.redirect('/login');
    }
    // implement
  }
}

module.exports = authController;
