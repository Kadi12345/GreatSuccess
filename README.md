## Nature of the project

The task of the Great Success team is to create an e-shop environment which is built on the basis of mongoDB. Postman is used for API development. The team has chosen to create an e-shop for pet supplies. Assignments are distributed among team members using Jira for project management. Sets of work are completed in sprints.

### Team members:

Meelis Mumm

Triin Tajur

Taive Sarnik

Kadi Vaigla

## Configurating git

#### Step 1: install git

#### Step 2: choose a folder where you would like to clone the repository

#### Step 3: right click on the folder and open it in terminal

#### Step 4: insert into the terminal:

`git clone https://github.com/Kadi12345/GreatSuccess.git`

## Configuring mongoDB connection

#### Step 1 Install

`npm install`

#### Step 2 Make a copy of .env-example named as .env (can do it manually or run this command in project root)

`cp .env-example .env`

#### Step 3 Add mongo db connection url to .env file

`MONGODB_URI=mongodb+srv://yoururlhere`

#### Step 4 Run application

`npm run start:dev`

#### Step 5 Open http://localhost:3000 in your browser and you should see "Hakkama said!"

## Branching Models

#### Making a new branch

First part is a type (story- feature, bug - bugfix).
Second part is ticket number.

`git checkout -b feature/ABC-123`

#### Going to existing branch

`git checkout feature/ABC-123`

#### Adding commit message

`git commit -m "Description of changes made"`

#### Pulling the updated main-branch code

`git pull origin main`

#### Adding changes to the server (main branch)

`git push`

#### Adding changes to the development branch:

`cd /home/user/my_project` <-- find the git folder location where repository was configurated

`git add .` <-- if you want to add all changed files

`git add filename.format` <-- if you want to add a specific file

## Inserting data to database in Postman

#### New user

```json
{
  "userType": "ADMIN",
  "firstName": "John",
  "lastName": "Doe",
  "email": "johndoe@email.com",
  "address": "Street, City"
}
```

#### New product

```json
{
  "type": "TOIT",
  "productName": "Bread",
  "size": "1",
  "sizeUnit": "kg",
  "colour": "yellow",
  "description": "delicious",
  "price": 1
}
```

#### New order

```json
{
  "orderStatus": "MAKSTUD",
  "products": [{ "productID": "601a9cc8c552193ebcfc2cc0", "quantity": 4 }],
  "client": "601a9b8dc552193ebcfc2cbe",
  "deliveryMethod": "KULLER",
  "deliveryAddress": "Street, City"
}
```

#### Delete

```json
{
  "productID": "601a9cc8c552193ebcfc2cc0"
}
```
