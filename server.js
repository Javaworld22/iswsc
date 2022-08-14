const api_key = "key-a00c71a40ae289ea2d62babad75987f5"
const domain = "iswscorp.org.ng"

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
  app.get('/article/Day_2_SURWASH_WorldBank_Technical_Support_Mission', (req, res) =>{
    res.render('Day_2_SURWASH_WorldBank_Technical_Support_Mission')
  })
  app.get('/node/156', (req, res) => {
    res.render('orientation');
  });

  app.get('/page1', (req, res) => {
    res.render('page1');
  });

  app.get('/privacy-policy', (req, res) => {
    res.render('policy');
  });

  app.get('/success', (req, res) => {
    res.render('msg_success');
  });
  app.get('/error', (req, res) => {
    res.render('error_msg');
  });

  app.post('/contact', (req, res) => {
    const {name,mail,subject,message} = req.body
    console.log(req.body)
    let msg = runmessage(message)
      let data1 = data(subject,msg,name,mail)
      mailgun1.messages().send(data1,  (error, body) => {
        req.body = null
        if(body){
          console.log(body);
          console.log("Message sent")
          res.redirect('/success')
          // res.render('',{status1:true,status2:true});
        }else{
          console.log(error)
          console.log("Error occured here")
          res.redirect('/error')
          // res.render('contact',{status1:false,status2:true});
        }

      });

  });

  app.get('/article/database-admistrator-vacancy', (req, res) => {
    res.render('advertisement');
  });

  app.get('/article/meet-our-discon-finest-speaker-water-and-environmental-expert', (req, res) => {
    res.render('meet-our-discon-finest-speaker-water-and-environmental-expert');
  });

  app.get('/article/presentation-enhancing-project-management-public-sector-nigeria', (req, res) => {
    res.render('presentation-enhancing-project-management-public-sector-nigeria');
  });

  app.get('/article/MONITORING_AND_EVALUATION_OFFICIALS_UNDER_SURWASH', (req, res) => {
    res.render('MONITORING_AND_EVALUATION_OFFICIALS_UNDER_SURWASH');
  });

  app.get('/article/KUNNY-INNOVATION-POWER-POINT', (req, res) => {
    res.render('kunny-connection');
  });

  app.get('/article/Imo-State-Magazine-Vol-One.cdr', (req, res) => {
    res.render('imo-state-magazine');
  });

  app.get('/article/STAKEHOLDERS_REVIEW_AND_VALIDATION', (req, res) => {
    res.render('STAKEHOLDERS_REVIEW_AND_VALIDATION');
  });

  app.get('/user/admin', (req, res) => {
    res.render('admin');
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