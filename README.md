
# LifeSports Challlenge

### Getting Started
Before running the app in you command line enter:
```bash
npm install
```
You will also need a .env file to save port number and database URIs. This will look something like this:
```
ATLAS_URI = "mongodb+srv://YOURUSERNAMEANDPASSWORDHERE@cluster0-slysp.mongodb.net/test?retryWrites=true&w=majority"
LOCAL_URI = "mongodb://localhost:27017"
PORT = "5000"
```

### In This Project
This project is based off a MongoDB database and uses Mongoose to define the schemas. The backend is coded with NodeJS/Express. The UI is built out in React. The communication between the server and front-end is made possible with axios to call the endpoints.

### Test the App!
[Open in Heroku](https://workout-tracker-challenge.herokuapp.com)

### License
MIT