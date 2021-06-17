const express = require("express")
const PaytmChecksum = require("./PaytmChecksum")
require("dotenv").config()
const formidable=require("formidable")
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("./server/config/keys");
// http://localhost:3002/api/user/all-user
const app = express()

app.use(bodyParser.json())
const PORT = process.env.PORT || 3002;

// Import Router
const authRouter = require("./server/routes/auth");
const contactUsRouter = require("./server/routes/contactUs");
const orderRouter = require("./server/routes/order");
const usersRouter = require("./server/routes/user");
// const { default: User } = require("./client/src/components/User/User");

// Model
let userModel = require("./server/models/user");

// Middleware
//app.use(cookieParser());
app.use(cors());
//app.use(express.static("public"));
//app.use(express.urlencoded({ extended: false }));
//app.use(express.json());

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
  console.log("in callback");
    const form = new formidable.IncomingForm()
    console.log(form)
    form.parse(req,async (err,fields,file)=>{
      console.log("in form.parse");
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
      console.log(fields)
      if (isVerifySignature) {
        console.log(fields)
          if(fields.STATUS==='TXN_SUCCESS'){
            //once payment is verified then set the flag as verfied and push the description i.e cart items to history array of user
            // let updateStatus = User.fin
            console.log(fields);
            res.redirect("http://localhost:3000/")
            
        }else {
          //once payment is failed then delete the current assigned object whose flag was set as not verfied
          res.send("payment was unsuccessful please contact earnwithfriendofficial@gmail.com and explain the event in detail with the registered email don't try to signup because you will not be able to")
          }
        //push the payment json to transaction details
      } 
    })
})

app.post("/payment",async (req,res)=>{ //you get array buffer when you use wrong credentials

  var params = {};
  //decode token
  
    //  req.body.token
    console.log(req.body.token)
    let decoded = jwt.verify(req.body.token, JWT_SECRET);
    console.log(decoded)
    const email = await userModel.findById(decoded._id);

    /* initialize an array */
    params['MID'] = process.env.PAYTM_MID;
    params['WEBSITE'] = process.env.PAYTM_WEBSITE;
    params['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
    params['INDUSTRY_TYPE_ID'] = 'Retail';
    params['ORDER_ID'] = 'EWF_'  + new Date().getTime();
    params['CUST_ID'] = `EWF_10${email.email.replace("@gmail.com","")}`;
    params['TXN_AMOUNT'] = '1360';
    params['CALLBACK_URL'] = `http://localhost:3002/callback`;
    params['EMAIL'] = `${email.email}`;
    params['MOBILE_NO'] = "";
    


//user token
    //add req.body.description(cart items) to one object and set it's flag to 
    //payment not verified

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