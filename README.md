## Nature of the project

The task of the Great Success team is to create an e-shop environment which is built on the basis of mongodb. Postman is used for API development. The team has chosen to create an e-shop for pet supplies. Assignments are distributed among team members using Jira for project management. Sets of work are completed in sprints.

## Configurating git

#### Step 1: install git

#### Step 2: choose a folder where you would like to clone the repository

#### Step 3: right click on the folder and open it in terminal

#### Step 4: insert into the terminal: git clone https://github.com/Kadi12345/GreatSuccess.git

#### Getting changes from the master branch:

cd /home/user/my_project <-- find the git folder location where repository was configurated
git pull

#### Adding changes to the development branch:

cd /home/user/my_project <-- find the git folder location where repository was configurated<br>
git add . <-- if you want to add all changed files
git add filename.format <-- if you want to add a specific file

#### Adding commit message

git commit -m "Description of changes made"

#### Adding changes to the server (master branch)

git push

## Configuring the mongodb connection

#### Step 1: Install

npm install

#### Step 2: Make a copy of .env-example named as .env (You can do it manually or run this command in project root)

cp .env-example .env

#### Step 3 Add mongo db connection url to .env file

MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.g29ki.mongodb.net/<dbName>?retryWrites=true&w=majority

#### Step 4 Run application

npm run start:dev

#### Step 5 Open http://localhost:3000 in your browser and you should see "Hakkama said!"

### Kõige uuema main brachi sisse tõmbamine

git pull origin main
