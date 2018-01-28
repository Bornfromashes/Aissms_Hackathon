const express= require('express');
const router= express.Router();
const mongoose= require('mongoose');
const http= require('http');
const path= require('path');
const ejs= require('ejs');
const bodyParser= require('body-parser');
const bitcore= require('bitcore-lib')
const methodOverride= require('method-override');
var app=express();
var stringify = require('json-stringify-safe');
global.fetch = require('node-fetch')
const cc = require('cryptocompare')

var accountSid = '*******************************'; // Your Account SID from www.twilio.com/console
var authToken = '********************************'; // Your Auth Token from www.twilio.com/console
var twilio = require('twilio');
var client = new twilio(accountSid, authToken);


app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set( 'views', path.join( __dirname, 'public/site/production' ));

app.use(express.static(path.join('static')));

const db= '*********************************';
mongoose.Promise= global.Promise;

mongoose.connect(db, function(err){
  if(err){
    console.error("Error! "+ err);
  }
});

var formSchema= new mongoose.Schema({
  Name: String,
  Address: String,
  PK: String,
  Email: String
});
const Complain= mongoose.model('complain', formSchema, 'bit');

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
app.get('/signup', function(req, res){
  console.log('signup');
  res.render('signup.html');
});
app.post('/signup', function(req, res){	
  var brainsrc= req.body.brainsrc;
  var savedata= new Complain(req.body);
  savedata.save(function(err, result) {
		if (err) throw err;

		if(result) {
			res.json(result);
		}
	})
  console.log(brainsrc);
  var input= new Buffer(brainsrc);
  var hash= bitcore.crypto.Hash.sha256(input)
  var bn= bitcore.crypto.BN.fromBuffer(hash)
  var pk= new bitcore.PrivateKey(bn).toWIF();
  var addy= new bitcore.PrivateKey(bn).toAddress();
  res.send("The Brain wallet of: " + brainsrc +"<br>Addy:" + addy + "<br>Private Key:" + pk);
});	
app.get('/index.html', function(req, res){
  console.log('home');
  cc.price('BTC', ['USD', 'EUR', 'INR'])
.then(prices => {
  res.render('index.html', {k: prices});
})
.catch(console.error)
});

app.get('/OTP', function(req, res){
  console.log('OTP');
  res.render('OTP.html');
});

app.post('/OTP', function(req, res){
 var no= req.body.Phone;	
 client.messages.create({
    body: '22340',
    to: '************',  // Text this number
    from: '************' // From a valid Twilio number
})
.then((message) => console.log(message.sid));
if (no== req.body.OTP)
 {
 	res.redirect('index.html');
 }
});

var port = process.env.PORT || 2353;
app.listen(port, function() {
	console.log('Node.js listening on port ' + port);
})

*/
module.exports =router;
