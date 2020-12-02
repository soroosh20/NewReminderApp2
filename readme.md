About the App
This is a reminder app that allows users to to set up reminders for things. It is designed in such a way that users can edit their reminders later and delete them whenever they want. It is recommended who have a less busy schedule and want to add reminders of certain tasks to be completed in upcoming days.

Main Folders
Controllers
Auth_controller.js - All the logic related to authentication provided to users is in this file. All the content in this app is filled under views ⇒ auth ⇒ login.ejs and register.ejs.
Reminder_controller.js - All the logic related to providing control over how to create, edit, update and delete reminders is under this app. The files which support the content in this file is under views ⇒ reminder ⇒ create.ejs, edit.ejs, index.ejs, single-reminder.ejs.
Public
This folder contains index.html, script.js, and style.css which is used to design the homepage of our app. This folder is not related to any other folder. So, the changes in these files will not affect the working of our other files. This folder contains files that can be visible to the public. It means there’s no need to be registered to view these files.
Database.js - This file is responsible for containing a fake database which is used in this app. It only contains a single user till now, because this is just for testing how the app should work at basic start.
Index.js - This is the main js file which contains all the routes, packages installed and local port number on which the app will run.
The packages which are required to run these apps are in folders node_modules, package-lock.json , package.json.
Instructions to run this app in terminal
Npm start ( before using it we need to install nodemon )
Instructions on how to link your app to github
Initialize the local directory as a Git repository.
$ git init -b main
Add the files in your new local repository
$ git add . 
Commit the files that you’ve staged in your local repository
$ git commit =m “first commit”
In the cmd, add URL for your remote repository where your local repository will be pushed.
$ git remote add origin remote repository URL        # sets the new remote
$ git remote -v                                                     # verifies the new remote URL
Push the changes in your local repository to Github
$ git push origin main






Front end Tech
HTML
CSS
Bootstrap
Javascript ES6
NPM Packages
 js-cookie


Back End Tech
Node.js
Expree.js, Middlewares
NPM packages 
 js-cookie 

Tasks uncompleted

Unfortunately we weren’t able to completely finish Sprint 4 that included tasks like:
Having a page which shows all registered users, and a button next to each user that says: "Add friend".
Adding the functionality to the button “Add friend” which would add that friend to the fake db and then you would have the option to see their reminders.
Every user in your application needs to have a field in their database called profile picture. You can use the website unsplash to get pictures of people. The field should be a string url pointing to an image. When you display a page with all the registered users (and a add friend button next to it), show their profile pictures. 


How we are going to complete these tasks 

For completing the first task we have to do the following steps:
We created the friends.ejs page in the views/reminder folder. 
We created "friends" in the navbar, that takes the user to the friends page. 
In our reminder_controller.js we created a function called friends that takes the user to the friends.ejs page. 
The friends.ejs has a while loop that iterates through the database contents and the loop take in content and display it on the screen, when a user is on "/friends" link.
The contents of users displayed as a list of users for the user to see what users are registered on the reminder app. 
But this task has not been completed, due to shortage of time. We need to make "Add friend" working, that can add the friend and add some CSS to the friends.ejs page. 











For completing the last task ( have a profile picture filed got from a web api)

In the create function we are going to add an image from a website for example “Unsplash”.
 
In our reminder_controller:
const fetch = require(“node-fetch”);
 
in our create function in the reminder_controller:
// the following lines until fetch(url) are the information of the images got from the website
const clientId=” a code got from the website”       	
const query = req.body.coverInput;
const url = `https://api.unsplash.com/ … ?client_id=${clientId}&query = ${query}`;
 
fetch(url)
 // if there is no exception, read the json file from the url and change it to an object
        	.then(res=>res.json())
 
// if there is no exception, read the value of the key of the object and put it into the imageUnsplash
        	.then(data=>{
                    	const imageUnsplash=data.result[0].urls.regular;

 // we add a key with the imageUnsplash value below the other key value pairs of the reminders
        	        	let reminder={
                    	coverPhoto: imageUnsplash
                    	}
        	 Database.cindy.reminder.push(reminder);
        	 Res.redirect(‘/reminders’);


Project Contributors
Ranjot Kaur
Soroosh Azizi
Shahin Yousefi
Karandeep Singh
