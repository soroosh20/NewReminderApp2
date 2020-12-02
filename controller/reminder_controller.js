let database = require("../database");

let remindersController = {
  list: (req, res) => {
    res.locals.item = "reminderList";
    res.render('reminder/index', { reminders: database.cindy.reminders })
  },

  new: (req, res) => {
    res.locals.item = "create"
    res.render('reminder/create')

  },

  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    if (searchResult != undefined) {
      res.render('reminder/single-reminder', { reminderItem: searchResult })
    } else {
      res.render('reminder/index', { reminders: database.cindy.reminders })
    }
  },

  create: (req, res) => {
    let reminder = {
      id: database.cindy.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      subtask:req.body.subtask,
      tags:req.body.tags,
      completed: false
    }
    database.cindy.reminders.push(reminder);
    res.redirect('/reminders');
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    res.render('reminder/edit', { reminderItem: searchResult })

  },

  update: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      if (reminder.id == reminderToFind) {
        reminder.title = req.body.title,
          reminder.description = req.body.description,
          reminder.subtask = req.body.subtask,
          reminder.tags = req.body.tags,
          reminder.completed = req.body.completed == "true"
      }
    });
    res.redirect('/reminder/' + reminderToFind)
  },

  delete: (req, res) => {
    let reminderToFind = req.params.id;
    let reminderIndex = database.cindy.reminders.findIndex(function (reminder) {
      return reminder.id == reminderToFind;
    })
    database.cindy.reminders.splice(reminderIndex, 1);
    res.redirect('/reminders');
  }, 
  
  friends: (req, res) => {
    res.locals.item = "friends";
    res.render('reminder/friends', {reminders: database})
}
    
}

module.exports = remindersController;
