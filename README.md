# iosd-frontend
IOSD Website 

This is the Website for International Organization of Softwware Developers.

A Bootstrap-Theme based site.

The site is divided into different sections which can be used accordingly.


<strong>To Use the Site as your template locally Clone or Download the Zip file of the site.</strong>



<h1>To Deploy This App on Heroku -</h1> 

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)


1) Have git installed

2) Heroku Account – sign up at https://signup.heroku.com/.

3) Download the Heroku Toolbelt – a command line application for managing your Heroku account

4) Run heroku login in your terminal or command prompt and fill in your Heroku credentials

5) Clone the Repository or Download the Zip folder for this Site.

6) Navigate to your project in the command prompt.

cd Projects(Or the Directory in which it is saved)/iosd-frontend-master

7) Create an index.php file and fill in this one line of code.

<?php header( 'Location: /index.html' ) ;  ?>

The index.php file will be served by Heroku before index.html. We need to make the browser redirect from index.php to index.html.

8) Then we’ll use the command line tool called git to initialize or create a version of the site you want to deploy. To do that run the command:

git init
git add .

9) Then you want to commit or save all the changes for the site. With a message describing what you’ve done.

git commit -m "My site ready for deployment."

10) Run - heroku apps:create my-static-site-example

Insert your desired name instead of my-static-site-example as the name of the site.

11) Run - git push heroku master
Once you see “remote: Verifying deploy…. done.” the site has been deployed.

You can now visit your site at https://<whatever-name-you-selected>.herokuapp.com 


