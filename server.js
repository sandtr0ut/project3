const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/src"));
}
// Add routes, both API and view
//app.use(routes);

app.get("/scrape", function(req, res) {
  console.log("Scraping initiated");
  axios
    .get(
      "https://www.glassdoor.com/Reviews/phoenix-web-developer-reviews-SRCH_IL.0,7_IM678_KO8,21.htm"
    )
    .then(function(response) {
      let $ = cheerio.load(response.data);

      $(".header").each(function(i, element) {
        let result = {};
        result.company = $(this).text();
        //console.log(result);
        $(".reviewSnip").each(function(i, element) {
          //let result = {};
          result.review = $(this).text();
          console.log(result);
        });
      });
    });
  console.log("Scrape complete!");
  res.send("Scrape complete");
});
// Connect to the Mongo DB
//===================================================
// Using NEW db information from mLab in Heroku
// mongoose.connect(
//   process.env.MONGODB_URI ||
//     "mongodb://project3:project3@ds145302.mlab.com:45302/heroku_x6t27mhn"
// );
// Heroku deploy guide @ https://ua.bootcampcontent.com/UA-Coding-Bootcamp/AZGIL201902FSF2/blob/master/20-react/03-Supplemental/MERNHerokuDeploy.md

// Original Boilerplate (from 12-Stu_Deployment)
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reviewsdb");
//====================================================

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
