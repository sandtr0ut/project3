<<<<<<< HEAD
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
=======
const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

>>>>>>> b208d61e4bb6b4ccdae1525aab29c59c8c0b142a
const app = express();

<<<<<<< HEAD
// Connect to the Mongo DB
//===================================================
// Using NEW db information from mLab in Heroku
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://project3:project3@ds145302.mlab.com:45302/heroku_x6t27mhn"
);
// Heroku deploy guide @ https://ua.bootcampcontent.com/UA-Coding-Bootcamp/AZGIL201902FSF2/blob/master/20-react/03-Supplemental/MERNHerokuDeploy.md
=======
// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
>>>>>>> b208d61e4bb6b4ccdae1525aab29c59c8c0b142a

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

<<<<<<< HEAD
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
=======
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
>>>>>>> b208d61e4bb6b4ccdae1525aab29c59c8c0b142a
