CRUD USERS FOR POSTGRES SQL

IMPORTANT: For this project to work you must have PostgresSQL installed on your pc

Welcome to my 3rd project in Back-End for Academlo Academy's "Web Development" course.
Here you'll find some general steps for you to make this CRUD work in your PC.
( If you already have DBEAVER w/PostgresSQL on your PC got to step 2 )

step 1: 
- Install DBeaver with the general config 
- Port should be 5432 or 5433 (remember it)
- Config username and remember it (I suggest to you: 'postgres')
- Set a password and remember it (I suggest to you: 'root')
- Connect DBeaver with PostgresSQL
- Go to the main file (Postgres localhost:5432||5433), enter in databases folder and make a new database with the name "users-crud"

step 2:
- Fork/clone the repo
- install the dependences (npm i express sequelize pg pg-hstore)
- install nodemon as a developer (npm i -D nodemon)

step 3:
- In the path 'src/utils' you will find 'database.js'
- Check if the port setted is the same that the one that DBeaver gives to you (if not, replace it)
- Replace the username w/ the one that you choose (I suggested to you 'postgres')
- Replace the password w/ the one that you choose (I suggested to you 'root')
- In case that you name your Database in Dbeaver with other name that it isn't "users-crud" replace it too.

step 4:
- With all previous steps done go to the file 'package.json' and search the "Scripts"
- You should have an object like this one: 
  "scripts": {
    "start": "node ./src/app.js",
    "dev": "nodemon ./src/app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
- If not, copy it or make your own scripts for node & nodemon
- When you finnish that, you must be ready to go.
- Run the nodemon script.

step 5:
- Open a new tab in Chrome, Firefox, Opera or whatever you use.
- Install the "json formater" extension.
- In the URL line call the localhost:9200
- You're ready to start creating your own users and post it in your databases on DBeaver app.

For create the users in this project I used Thunder Client extension in Visual Studio Code.