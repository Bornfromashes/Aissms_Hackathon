const express= require('express');
const router= express.Router();
const mongoose= require('mongoose');
const http= require('http');
const path= require('path');
const ejs= require('ejs');
const bodyParser= require('body-parser');
const methodOverride= require('method-override');
var app=express();
var stringify = require('json-stringify-safe');
global.fetch = require('node-fetch')
const cc = require('cryptocompare')

app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set( 'views', path.join( __dirname, 'public/site/production' ));

app.use(express.static(path.join('static')));

const db= 'mongodb://qwe:qwe@ds129333.mlab.com:29333/abc';
mongoose.Promise= global.Promise;

mongoose.connect(db, function(err){
  if(err){
    console.error("Error! "+ err);
  }
});

var videoSchema= new mongoose.Schema({
  uid: String,
  dis: String,
});
const Video= mongoose.model('video', videoSchema, 'meter');

app.get('/tables.html', function(req, res){
Video.find({}, function(err, videos){
    if(err){
      console.log("Error retrieving video");
    }else{
      console.log('Sucessful');
  //    var str= videos.toString();
      res.render('tables.html', {data: videos});
   }
  });
});
app.get('/index.html', function(req, res){
  console.log('home');
  cc.price('BTC', ['USD', 'EUR', 'INR'])
.then(prices => {
  res.render('index.html', {k: prices});
})
.catch(console.error)
});
app.get('/profile.html', function(req, res){
  console.log('profile');
  res.render('profile.html');
});
app.get('/form.html', function(req, res){
  console.log('complain');
  res.render('form.html');
});
app.get('/billpay.html', function(req, res){
  console.log('bill');
  res.render('billpay.html');
});
app.get('/chartjs.html', function(req, res){
  console.log('chart');
  res.render('chartjs.html');
});
app.get('/tables_dynamic.html', function(req, res){
  console.log('tables2');
  res.render('tables_dynamic.html');
});
app.get('/indexheatmap.html', function(req, res){
  console.log('heatmap');
  res.render('indexheatmap.html');
});



/*  app.get('/view', function(req, res){
  Video.find({}, function(err, videos){
      if(err){
        console.log("Error retrieving video");
      }else{
        console.log('Sucessful');
    //    var str= videos.toString();
        res.render('tables.html', {data: videos});
     }
    });
    });
*/

var port = process.env.PORT || 2353;
app.listen(port, function() {
	console.log('Node.js listening on port ' + port);
})
/*router.get('/videos', function(req, res){
  console.log('Get request for all videos');
  Video.find({})
  .exec(function(err, videos){
    if(err){
      console.log("Error retrieving videos");
    }else{
      res.render('index',{'data':videos});
    }
  });
});
*/
module.exports =router;
