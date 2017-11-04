var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.use(bodyParser());

//urn:ietf:wg:oauth:2.0:oob

app.post('/items/import', function (req, res) {
  var result = [];
  var pictureQ = [];
  var temp;
  var tempArray = [];
  var foundPic = false;

  console.log('*********testing POST req.body: ', req.body);
  var options = {
    url: `http://theastrologer-api.herokuapp.com/api/horoscope/${req.body.mySign}/yesterday`,
    method: 'GET'
  }
  request(options, function(err, response, body){



            temp = JSON.parse(body);
            pictureQ = [];
            pictureQ.push(temp.meta.mood);
            tempArray = [];
            tempArray = temp.meta.keywords.split(",");
            pictureQ.push(tempArray[0], tempArray[1]);
            console.log("************* !!! pictureQuerry: ", pictureQ);

                        for(var i = 0; i < pictureQ.length; i++) {
                          var myPicRaw;
                          if(!foundPic) {
                            console.log("going to do Api request PPPPPictures");
                            var options = {
                                // url: 'https://api.github.com/${req.body.username}/repos',
                                
                              url: `https://api.unsplash.com/search/photos?page=1&query=${pictureQ[i]}`,
                                  // url: 'https://api.unsplash.com/search/photos?page=1&query=office',
                              method: 'GET',
                              headers: {
                                'Content-Type': 'application/json',
                                'Authorization': "Bearer 582c5d7ebe28bd707751a43c8e22dc5c0a4ba0a60dbe69d520677f47b7cfcc1b",
                                'per_page': 3
                              }
                            };
                            request(options, function(error, response, body) {
                              myPicRaw = JSON.parse(body);
                              console.log("testing pictures API to see myPicRaw ************", myPicRaw);

                              if(myPicRaw.results.length > 0) {
                                foundPic = true;
                                console.log("Picture Api Body Exists!!!");
                                temp.moodPictures = myPicRaw.results;
                                console.log("LETS CHECK TEMP OBJECT 0 ! **********", temp);

                              } else console.log("Picture Api Body DOES NOT Exist!!!");

                              // res.send(myPicRaw.results[0].urls.small);
                              // res.send(myPicRaw.results);   //sends to client array "results" of 5 pictures!!!
                            });
                          } else break;
                        }
            console.log("Pushing temp to sending result array***********");

            result.push(temp);




    console.log("Horoscope request 0 *********", body);

          var options = {
            url: `http://theastrologer-api.herokuapp.com/api/horoscope/${req.body.mySign}/today`,
            method: 'GET'
          }
          request(options, function(err, response, body){
            temp = JSON.parse(body);
            pictureQ = [];
            pictureQ.push(temp.meta.mood);
            tempArray = [];
            tempArray = temp.meta.keywords.split(",");
            pictureQ.push(tempArray[0], tempArray[1]);
            console.log("************* !!! pictureQuerry: ", pictureQ);
                        foundPic = false;
                        for(var i = 0; i < pictureQ.length; i++) {
                          var myPicRaw;
                          if(!foundPic) {
                            console.log("going to do Api request PPPPPictures");
                            var options = {
                                // url: 'https://api.github.com/${req.body.username}/repos',
                                
                              url: `https://api.unsplash.com/search/photos?page=1&query=${pictureQ[i]}`,
                                  // url: 'https://api.unsplash.com/search/photos?page=1&query=office',
                              method: 'GET',
                              headers: {
                                'Content-Type': 'application/json',
                                'Authorization': "Bearer 582c5d7ebe28bd707751a43c8e22dc5c0a4ba0a60dbe69d520677f47b7cfcc1b",
                                'per_page': 3
                              }
                            };
                            request(options, function(error, response, body) {
                              myPicRaw = JSON.parse(body);
                              console.log("testing pictures API to see myPicRaw ************", myPicRaw);

                              if(myPicRaw.results.length > 0) {
                                foundPic = true;
                                console.log("Picture Api Body Exists!!!");
                                temp.moodPictures = myPicRaw.results;
                                console.log("LETS CHECK TEMP OBJECT 1 ! **********", temp);

                              } else console.log("Picture Api Body DOES NOT Exist!!!");

                              // res.send(myPicRaw.results[0].urls.small);
                              // res.send(myPicRaw.results);   //sends to client array "results" of 5 pictures!!!
                            });
                          } else break;
                        }

            console.log("Pushing temp to sending result array***********");

            result.push(temp);
            console.log("Horoscope request 1 *********", body);


                    var options = {
                      url: `http://theastrologer-api.herokuapp.com/api/horoscope/${req.body.mySign}/tomorrow`,
                      method: 'GET'
                    }
                    request(options, function(err, response, body){



            temp = JSON.parse(body);
            pictureQ = [];
            pictureQ.push(temp.meta.mood);
            tempArray = [];
            tempArray = temp.meta.keywords.split(",");
            pictureQ.push(tempArray[0], tempArray[1]);
            console.log("************* !!! pictureQuerry: ", pictureQ);
                        foundPic = false;
                        for(var i = 0; i < pictureQ.length; i++) {
                          var myPicRaw;
                          if(!foundPic) {
                            console.log("going to do Api request PPPPPictures");
                            var options = {
                                // url: 'https://api.github.com/${req.body.username}/repos',
                                
                              url: `https://api.unsplash.com/search/photos?page=1&query=${pictureQ[i]}`,
                                  // url: 'https://api.unsplash.com/search/photos?page=1&query=office',
                              method: 'GET',
                              headers: {
                                'Content-Type': 'application/json',
                                'Authorization': "Bearer 582c5d7ebe28bd707751a43c8e22dc5c0a4ba0a60dbe69d520677f47b7cfcc1b",
                                'per_page': 1
                              }
                            };
                            request(options, function(error, response, body) {
                              myPicRaw = JSON.parse(body);
                              //PLEASE FIX SLICE !!!
                              var tempTemp = myPicRaw.results.slice(0, 5);
                              console.log("******************* tempTemp on Api 3 looks, length: ", tempTemp.length, " ***** tempTemp ", tempTemp)
                              myPicRaw.results = tempTemp;
                              console.log("******************* myPicRaw.results on Api 3 looks, length: ", myPicRaw.results.length, " ***** and itself ", myPicRaw.results);

                              console.log("testing pictures API to see myPicRaw after 2 Api ************", myPicRaw);
                              // !!!!!!!!!!!!!!!!!!!!!!!
                              // myPicRaw.results.splice(5);

                              if(myPicRaw.results.length > 0) {
                                foundPic = true;
                                console.log("Picture Api Body Exists!!!");
                                temp.moodPictures = tempTemp;
                                console.log("LETS CHECK TEMP OBJECT 2 ! **********", temp);
                              } else console.log("Picture Api Body DOES NOT Exist!!!");

                              // res.send(myPicRaw.results[0].urls.small);
                              // res.send(myPicRaw.results);   //sends to client array "results" of 5 pictures!!!

                          


                            });
                          } else break;





                        }
                        console.log("Pushing temp to sending result array***********");
                        result.push(temp);

                        console.log("******* let's see how many in array RESULT before send: ", result.length);
                        console.log("Horoscope request 2 last! and sending to client *********");
                        setTimeout(() => res.send(result), 1500);

            
                    });


          });


  });

});




app.get('/testing', function(req, res) {
  var myPicRaw;
  console.log("trying to do Api request PPPPPictures", req.body);
  var options = {
      // url: 'https://api.github.com/${req.body.username}/repos',
      
    url: 'https://api.unsplash.com/search/photos?page=1&query=lumbering',
        // url: 'https://api.unsplash.com/search/photos?page=1&query=office',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Bearer 582c5d7ebe28bd707751a43c8e22dc5c0a4ba0a60dbe69d520677f47b7cfcc1b",
      'per_page': 3

    }
  };
  request(options, function(error, response, body) {
    console.log("testing pictures API ************", body);
    myPicRaw = JSON.parse(body);

    if(myPicRaw.results.length > 0) {
      console.log("Picture Api Body Exists!!!");
    } else console.log("Picture Api Body DOES NOT Exist!!!");

    // res.send(myPicRaw.results[0].urls.small);
    res.send(myPicRaw.results);   //sends to client array "results" of 5 pictures!!!
  });
});




app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

