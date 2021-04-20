<br />
<br />
<p align="center">
 <img alt="Big Logo"  src="https://user-images.githubusercontent.com/70561117/111498929-a81a2400-86ff-11eb-9655-93761b76a922.png" width="50%"/>
</ p>

<br />
<br />
<hr />

**Adora** is social media application with stickers! Stickers are special awards that a user can grant 
towards other users posts. Collect as many stickers as you can!

* Users can **log in** or **sign up** to access functionality the site.
* A user has the ability to **make posts** using the canvas element to draw an image, with optional text.
* The **stickerbook** holds all the users stickers, with a description of each.
* The **profile page** allows the user to change their profile picture or bio.  


<p align="center">
<img src="https://user-images.githubusercontent.com/70561117/114602352-5d7ebf80-9c4b-11eb-88fd-1449ff5cb940.png">
</p>

<h2>Try the site live: <a href=https://adora-react.herokuapp.com/>Here</a> <b>|</b> Check out our <a href="https://github.com/vantanova/adora/wiki">documentation</a></h2>

## How to run the site locally

- Clone the repo
- ```pipenv install``` in the main directory to install python packages  
- ```/cd react-app``` and use the command ```npm install``` to install all dependencies
- Make a copy of the .env.example file and edit to match local db configuration
- Create the database and user in psql
  * Run all migrations with ```npx dotenv sequelize db:migrate```
  * Seed all data with ```npx dotenv sequelize db:seed:all```
- Use the start script in the react-app (```npm start```) to run the server

## Technologies used in Adora
<p align="left">
<a href="https://flask.palletsprojects.com/en/1.1.x/">
<img src="https://img.shields.io/badge/Flask-v1.12-blue">
<a/>

<a href="https://www.sqlalchemy.org/">
<img src="https://img.shields.io/badge/SQLAlchemy-v1.3-blue">
<a/>
  
<a href="https://reactjs.org/">  
<img src="https://img.shields.io/badge/React-v17-blue">
<a/>
 
 <a href="https://www.docker.com/">  
<img src="https://img.shields.io/badge/Docker-v3-blue">
<a/>

<a href="https://www.heroku.com/">
<img src="https://img.shields.io/badge/Heroku-hosting-blue">
<a/>
</p>


**Flask** was used for the backend and it reduced a ton of boiler plate 
code, increasing development speed. 

**pyenv** was the software registry of choice.

**React** is the view engine of choice! 

**Heroku** is the web hosting app of our choice that allowed runs our app on the cloud! 

**Honorable Mentions** are the developement tools that made life 
much more enjoyable! 
* Postman made route testing very easy and fun!
* Postbird, its wonderful GUI made all the difference!

## Developer

<table style="width:100%">
  <tr>
    <th><a href="https://github.com/vantanova" rel="nofollow"><img src="https://avatars1.githubusercontent.com/u/70561117?s=460&u=85a68af6fc136866eb4f33ee657aeb751aba9935&v=4" height="auto" width="100"></a></th>
  </tr>
  <tr>
    <td>Antonio A.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/vantanova">@vantanova</a></td>
  </tr>
</table>

<p> <i>Thank you for reading my project README ❤️</i> </p>

