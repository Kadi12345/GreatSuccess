# GreatSuccess
## Step 1: Install 
npm install

## Step 2: Make a copy of .env-example named as .env (You can do it manually or run this command in project root)
cp .env-example .env

## Step 3 Add mongo db connection url to .env file
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.g29ki.mongodb.net/<dbName>?retryWrites=true&w=majority

## Step 4 Run application
npm run start:dev

## Step 5 Open http://localhost:3000 in your browser and you should see "Hakkama said!"
