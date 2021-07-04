
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");

class ContactUs{

    async getMailFromUser(req, res) {
        const mailjet = require ('node-mailjet')
        .connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)
        const request = mailjet
        .post("send", {'version': 'v3.1'})
        .request({
            "Messages":[
                {
                    "From": {
                        "Email": "techgeeksfs@gmail.com",
                        "Name": "Contact us"
                    },
                    "To": [
                        {
                            "Email": "techgeeksfs@gmail.com",
                            "Name": "Admin"
                        }
                    ],
                    "TemplateID": 2962766,
                    "TemplateLanguage": true,
                    "Subject": "Hey Admin we have a mail from a User",
                    "Variables": {
        "userName": `${req.body.name}`,
        "phoneNumber": `${req.body.phoneNumber}`,
        "message": `${req.body.message}`
        }
                }
            ]
        })
        request
        .then((result) => {
            console.log(result.body)
            res.json({
                message: "success"
            })
        })
        .catch((err) => {
            console.log(err.statusCode)
        })
      }

}

const contactUsController = new ContactUs();
module.exports = contactUsController;