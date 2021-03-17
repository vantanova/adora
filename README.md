# Adora


---

**Adora** is social media application

<img alt="Logo" align="right" src="https://user-images.githubusercontent.com/70561117/103400052-8645d380-4af8-11eb-8c61-1f2bab847bfd.png" width="20%" />

* Users can **log in** or **sign up** to access functionality the site.
* A user has the ability to **make projects** with both members and tasks.
* Posted tasks can be **completed** with their due date, status and assignee all changeable.
* The **profile page** hosts information about each user including their current projects and tasks.  


<p align="center">
<img src="https://user-images.githubusercontent.com/70561117/109456977-c77e3500-7a0e-11eb-9808-ea5c5db47d77.PNG">
</p>

<h2>Try the site live: <a href=http://aurora-quora.herokuapp.com/>Here</a> <b>|</b> Check out our <a href="https://github.com/midigi/a_sauna/wiki">documentation</a></h2>

## How to run the site locally

- Clone the repo
- Use the command ```npm install``` to install all dependencies
- Make a copy of the .env.example file and edit to match local db configuration
- Create the database and user in psql
  * Run all migrations with ```npx dotenv sequelize db:migrate```
  * Seed all data with ```npx dotenv sequelize db:seed:all```
- Use the start script ```npm start``` to run the server

## Technologies used in Aurora
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


**Flask** was used for our backend and it reduced a ton of boiler plate 
code, freeing us to implement more features. 

**pyenv** was our software registry, and within it we installed many packages;
some notable examples include:
* 
* 
* 
* 

**React** is the view engine of choice! 

**Heroku** is the web hosting app of our choice that allowed us to 
run our app on the cloud! 

**Honorable Mentions** are the developement tools that made life 
much more enjoyable! 
* Postman made route testing very easy and fun!
* Postbird, its wonderful GUI made all the difference!

## Features that we implemented
The first big feature we tackled is the searching algorithm,
which populates the page with results containing either a question's
title or its message. 
    ```
   TBD
    ```
<details><summary><b>How it was done</b></summary>

1. We started by extracting the search term from the POST request.
```
  TBD
```
2. Then we queried the database for questions where either the question title 
  or the question message (case insensitive) matched the search term.
  
    ```
    TBD
    ```
    
3. We included each question's topic, expertise level, and user, and 
  ordered the results so that the most recent question appears first. 

    ```
    TBD
    ```    

</details>

The other big feature that we implemented was a sorting algorithm on our search results.

    ```
    TBD
    ```
<details><summary><b>How it was done</b></summary>

1. We started by populating the dropdown menus for Topic and Expertise Level on the 
search results page to reflect the topics and expertise levels of the result questions:

    ```
     TBD
    ```
2. Then we cleared local storage when the search results page was loaded 
in order to make space for our sorting function variables:

    ```    
    TBD
    ```
    
    
3. We rendered the dropdown select menus with the content from our query in step 1, 
then set up an event listener to save the selected value to local storage:
    ```
    TBD
    ```
      
4. We called a helper function on each of our result divs to filter results
based on the variables in local storage and render them dynamically:

    ```
    TBD
    ```
    ```
     TBD
    ```
</details>

## Challenges throughout the development process
We faced a few challenges while we were building Aurora:

1. We encountered a merge issue with one of our features that took a long time to sort out.
Make sure you stay up to date with ```main```, folks!

2. It took us a long time to figure out what the best way to sort our search results was.
Thankfully, we were able to reference some other people's strategies and come up with something
that fit our project.


## Developers

<img alt="Developer" align="right" src="https://user-images.githubusercontent.com/70561117/103400187-079d6600-4af9-11eb-8d20-00c8f88e3936.png" width="20%" />
<table style="width:100%">
  <tr>
    <th><a href="https://github.com/vantanova" rel="nofollow"><img src="https://avatars1.githubusercontent.com/u/70561117?s=460&u=85a68af6fc136866eb4f33ee657aeb751aba9935&v=4" height="auto" width="100"></a></th>
    <th><a href="https://github.com/midigi" rel="nofollow"><img src="https://avatars.githubusercontent.com/u/16071042?s=460&u=55b7ede1bdfa6882cda2ffcbfb94e24d2b2050e8&v=4" height="auto" width="100"></a></th>
    <th><a href="https://github.com/IamDgrant" rel="nofollow"><img src="https://avatars.githubusercontent.com/u/68237215?s=460&u=cd87edf80199467670d2b4e87fc13b1001245f7e&v=4" height="auto" width="100"></a></th>
    <th><a href="https://github.com/bparsons17" rel="nofollow"><img src="https://avatars.githubusercontent.com/u/67128124?s=460&v=4" height="auto" width="100"></a></th>
  </tr>
  <tr>
    <td>Antonio A.</td>
    <td>Michael D.</td>
    <td>Dre G.</td>
    <td>Brandon P.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/vantanova">@vantanova</a></td>
    <td><a href="https://github.com/midigi">@midigi</a></td>
    <td><a href="https://github.com/IamDgrant">@IamDgrant</a></td>
    <td><a href="https://github.com/bparsons17">@bparsons17</a></td>
  </tr>
</table>

<p> <i>Thank you for reading our project README ❤️</i> </p>

