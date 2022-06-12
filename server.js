
var express = require('express');
const bodyParser = require ('body-parser')
var app = express()
var path = require('path')
const nodemailer = require('nodemailer')
const mailgun1 = require('mailgun-js')({apiKey: api_key, domain: domain});

const port = process.env.PORT || 3030


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')



app.disable('etag');
app.use(express.static(path.join(__dirname,'public')))
//app.use('/assets',express.static(path.join(__dirname,'public/assets')))

app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/overview', (req, res) => {
    res.render('overview');
  });
  app.get('/company-profile', (req, res) => {
    res.render('company-profile');
  });

  app.get('/management-team', (req, res) => {
    res.render('management-team');
  });
  app.get('/faq', (req, res) => {
    res.render('faq');
  });
  app.get('/transmission-network-map', (req, res) => {
    res.render('transmission-network-map');
  });
  app.get('/sanitation', (req, res) => {
    res.render('sanitation');
  });
  app.get('/iswc-reticulation-map', (req, res) =>{
    res.render('iswc-reticulation-map');
  });
  app.get('/gallery', (req, res) =>{
    res.render('gallery');
  });
  app.get('/library', (req, res) => {
    res.render('library');
  });
  app.get('/videos', (req, res) =>{
    res.render('videos');
  });
  app.get('/advertisement', (req, res) => {
    res.render('advertisement');
  });

  app.get('/water-schemes', (req, res) => {
    res.render('water-schemes');
  });
  app.get('/tariffs', (req, res) => {
    res.render('tariffs');
  });
  app.get('/contact', (req, res) =>{
    res.render('contact',{status1:true,status2:false});
  });
  app.get('/news', (req, res)=> {
    res.render('news');
  });
  app.get('/user/login', (req, res) =>{
    res.render('login');
  });
  app.get('/user/register', (req, res) =>{
    res.render('register');
  });
  app.get('/user/password', (req, res) =>{
    res.render('password');
  });
  app.get('/article/courtesy-visit-rotary-club-owerri-metropolitan-managing-director-iswsc-27th-april-2022', (req, res) =>{
    res.render('courtesy-visit-rotary-club-owerri-metropolitan-managing-director-iswsc-27th-april-2022');
  });
  app.get('/article/iswsc-financial-statement', (req, res) =>{
    res.render('iswsc-financial-statement');
  });
  app.get('/article/training-non-revenue-water-and-strategic-intent-non-revenue-water-reduction-iswsc', (req, res) => {
    res.render('training-non-revenue-water-and-strategic-intent-non-revenue-water-reduction-iswsc');
  });
  app.get('/article/official-two-day-visit-usaid-program-specialist-team-imo-state-water-and-sewerage', (req, res) => {
    res.render('official-two-day-visit-usaid-program-specialist-team-imo-state-water-and-sewerage');
  });
  app.get('/article/report-5-day-online-meeting-between-world-bank-and-imo-state-water-and-sewerage-corporation', (req, res) => {
    res.render('report-5-day-online-meeting-between-world-bank-and-imo-state-water-and-sewerage-corporation');
  });
  app.get('/article/inspection-and-monitoring-burst-pipe-mdceo-iswsc', (req, res) => {
    res.render('inspection-and-monitoring-burst-pipe-mdceo-iswsc');
  });
  app.get('/article/courtesy-visit-office-honorable-commissioner-imo-state-ministry-power-and-water-resources', (req, res) => {
    res.render('courtesy-visit-office-honorable-commissioner-imo-state-ministry-power-and-water-resources');
  });
  app.get('/article/usaid-partnership-imo-state-water-and-sewerage-corporation-introduces-interswitch-payment', (req, res) => {
    res.render('usaid-partnership-imo-state-water-and-sewerage-corporation-introduces-interswitch-payment');
  });
  app.get('/article/mdceo-imo-state-water-and-sewerage-corporation-engr-emeka-ugoanyawu-fnse-fniwe-npom-fosha', (req, res) => {
    res.render('mdceo-imo-state-water-and-sewerage-corporation-engr-emeka-ugoanyawu-fnse-fniwe-npom-fosha');
  });
  app.get('/node/156', (req, res) => {
    res.render('orientation');
  });

  app.get('/page1', (req, res) => {
    res.render('page1');
  });

  app.get('/privacy-policy', (req, res) => {
    res.render('policy');
  });

  app.post('/contact', (req, res) => {
    const {name,mail,subject,message} = req.body
    console.log(req.body)
    let msg = runmessage(message)
      let data1 = data(subject,msg,name,mail)
      mailgun1.messages().send(data1,  (error, body) => {
        if(body){
         // console.log(body);
          console.log("Message sent")
          res.render('contact',{status1:true,status2:true});
        }else{
         // console.log(error)
          console.log("Error occured here")
          res.render('contact',{status1:false,status2:true});
        }

      });

  });

  app.get('/article/database-admistrator-vacancy', (req, res) => {
    res.render('advertisement');
  });




app.listen(port, ()=>{console.log('Starting the server at port ' +port)})

const runmessage = (msg) => {
  messages = msg
  console.log(messages)
  return messages
}

const data = (subj,msg,name,mail)=>({
  from : mail,
  to : 'iswsccustomercare@gmail.com',
  subject :  subj,
  text : msg+" Complaint by "+name
})

// mailgun1.messages().send(data, function (error, body) {
//   if(body)
//     console.log(body);
//   else
//     console.log(error)
// });