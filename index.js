const express = require("express")
const PaytmChecksum = require("./PaytmChecksum")
require("dotenv").config()
const {v4:uuidv4} = require("uuid")
const formidable=require("formidable")
const date = require('date-and-time');
const bodyParser = require('body-parser')
var fs = require('fs');
const cookieParser = require("cookie-parser");
const cors = require("cors");
// http://localhost:3002/api/user/all-user
const app = express()

app.use(bodyParser.json())
const PORT = process.env.PORT || 3002;

// Import Router
const authRouter = require("./server/routes/auth");
const contactUsRouter = require("./server/routes/contactUs");
const orderRouter = require("./server/routes/order");
const usersRouter = require("./server/routes/user");



// Middleware
app.use(cookieParser());
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api", authRouter);
app.use("/api/user", usersRouter);
app.use("/api/contactUs", contactUsRouter);
app.use("/api/order", orderRouter);

app.get("/test", (req,res) => {
  res.send("hello")
})


// Payments Routes
app.post("/callback",(req,res)=>{
    const form = new formidable.IncomingForm()
    form.parse(req,async (err,fields,file)=>{
      console.log(fields)
      if(err){
          console.log(err)
      }
      paytmChecksum = fields.CHECKSUMHASH;
      delete fields.CHECKSUMHASH;
      //merchant id kupXTo83613795537613
      //merchant key KcD6HXTx4gx%r4hl
      //test key Xd&_NRTpc1aDkAJ6
      var isVerifySignature = PaytmChecksum.verifySignature(fields,process.env.MERCHENT_KEY , paytmChecksum);
      if (isVerifySignature) {
        console.log(fields)
          if(fields.STATUS==='TXN_SUCCESS'){
            let useremail = req.query.email
            let person = await User.findOne({email: req.query.email});
            let userName = person.name;
            let productName = "Gold-X";
            let orderNo = person.referralId;
            const now = new Date();
            let paymentstamp = date.format(now, 'DD/MM/YYYY HH:mm:ss');  
            let price = fields.TXNAMOUNT +" "+ fields.CURRENCY
            let taxes = "18%"
            let totalAmount = fields.TXNAMOUNT

            res.redirect("https://www.earnwithfriend.com/logintocontinue")
        }else {
          res.send("payment was unsuccessful please contact earnwithfriendofficial@gmail.com and explain the event in detail with the registered email don't try to signup because you will not be able to")
          }
        //push the payment json to transaction details
      } 
    })
})

app.post("/payment",(req,res)=>{ //you get array buffer when you use wrong credentials

    var params = {};

    /* initialize an array */
    params['MID'] = process.env.PAYTM_MID;
    params['WEBSITE'] = process.env.PAYTM_WEBSITE;
    params['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
    params['INDUSTRY_TYPE_ID'] = 'Retail';
    params['ORDER_ID'] = 'EWF_'  + new Date().getTime();
    params['CUST_ID'] = `EWF_10${req.body.email.replace("@gmail.com","")}`;
    params['TXN_AMOUNT'] = '1360';
    params['CALLBACK_URL'] = `http://localhost:3000/callback?email=${req.body.email}`;
    params['EMAIL'] = `${req.body.email}`;
    params['MOBILE_NO'] = "";

    /**
     * https://securegw-stage.paytm.in/
    * Generate checksum by parameters we have
    * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys 
    */
    var paytmChecksum = PaytmChecksum.generateSignature(params,process.env.MERCHENT_KEY );//process.env.MERCHENT_KEY
    paytmChecksum.then(function(checksum){
    let paytmParams={
        ...params,
        "CHECKSUMHASH":checksum
      }
      res.json(paytmParams)
    })
    .catch(function(error){
      console.log(error);
    });
})


// Run Server
app.listen(PORT, () => {
  console.log("Server is running on ", PORT);
});