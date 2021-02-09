## Nature of the project

The task of the Great Success team is to create an e-shop environment which is built on the basis of mongodb. Postman is used for API development. The team has chosen to create an e-shop for pet supplies. Assignments are distributed among team members using Jira for project management. Sets of work are completed in sprints.
Out team members:
Meelis Mumm
Triin Tajur
Taive Sarnik
Kadi Vaigla

## Configurating git

#### Step 1: install git

#### Step 2: choose a folder where you would like to clone the repository

#### Step 3: right click on the folder and open it in terminal

#### Step 4: insert into the terminal: git clone https://github.com/Kadi12345/GreatSuccess.git

#### Getting changes from the master branch:

`cd /home/user/my_project` <-- find the git folder location where repository was configurated
`git pull`

#### Adding changes to the development branch:

`cd /home/user/my_project` <-- find the git folder location where repository was configurated<br>
`git add .` <-- if you want to add all changed files
`git add filename.format` <-- if you want to add a specific file

### Making new branch . Usually branch name is created like this:

First part is a type (story- feature, bug - bugfix),
second part is ticket number

`git checkout -b feature/ABC-123`

### Going to existing branch:

`git checkout feature/ABC-123`

#### Adding commit message

`git commit -m "Description of changes made"`

### Pulling the updated main-branch code

`git pull origin main`

#### Adding changes to the server (main branch)

`git push`



### Configuring the mongodb connection

#### Step 1 Install

`npm install`

#### Step 2 Make a copy of .env-example named as .env (You can do it manually or run this command in project root)

`cp .env-example .env`

#### Step 3 Add mongo db connection url to .env file

`MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.g29ki.mongodb.net/<dbName>?retryWrites=true&w=majority`

#### Step 4 Run application

`npm run start:dev`

#### Step 5 Open http://localhost:3000 in your browser and you should see "Hakkama said!"


### Inserting data to database in Postman

### Adding new user
**POST** 

 {<br>
"userType": "ADMIN",<br>
"firstName": "Triin",<br>
"lastName": "Tajur",<br>
"email": "triin.tajur@karvikud.ee",<br>
"address": "Tallinna tänav, Viljandi"<br>
}

### Adding new product
**POST**

{<br>
"type": "TOIT",<br>
"productName": "Saiake",<br>
"size": "10",<br>
"sizeUnit": "cm",<br>
"colour": "punane",<br>
"description": "maitsev",<br>
"price": 1<br>
}

### Adding new order
**POST**

{<br>
"orderStatus": "MAKSTUD",<br>
"products": [<br>
    {"productID": "601a9cc8c552193ebcfc2cc0",<br>
      "quantity": 4<br>
    }<br>
],<br>
"client": "601a9b8dc552193ebcfc2cbe",<br>
 "deliveryMethod": "KULLER",<br>
  "deliveryAddress": "Sinna kus Meelis elab"<br>
}

#### Edit data 
**PATCH**

#### Delete products from database
**DELETE** 

{<br>
  productID: "601a9cc8c552193ebcfc2cc0"<br>
}



