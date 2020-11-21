const express = require("express");
const app = express();
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");
const reminderController = require("./controller/reminder_controller");
const authController = require("./controller/auth_controller");
const cookieSession = require("cookie-session");
const authCheck = require("./middleware/auth");
let database = require("./database"); 

app.use(cookieSession({
  name: 'session',
  keys: ["abc", "def", "ghi"],
  maxAge: 2*1000
}));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  console.log("The user is " + req.user);
  console.log("The session is "+ req.session.user)
  if(req.session.user) {
    console.log("OK")
    if (database.cindy.username == req.session.user) {
      req.user = database.cindy.username;
      next();
    }
  } else {
    next();
  }
})

app.use(ejsLayouts);

app.set("view engine", "ejs");

// Routes start here

app.get("/reminders", authCheck, reminderController.list)

app.get("/reminder/new", authCheck, reminderController.new)

app.get("/reminder/:id", authCheck, reminderController.listOne)

app.get("/reminder/:id/edit", authCheck, reminderController.edit)

app.post("/reminder/", authCheck, reminderController.create)

app.post("/reminder/update/:id", authCheck, reminderController.update)

app.post("/reminder/delete/:id", authCheck, reminderController.delete)


app.get("/register", authController.register);
app.get("/login", authController.login);
app.post("/register", authController.registerSubmit);
app.post("/login", authController.loginSubmit);


app.listen(3001, function () {
  console.log("Server running. Visit: localhost:3001/reminders in your browser 🚀");
});
