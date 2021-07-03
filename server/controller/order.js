const orderModel = require("../models/order");
const userModel = require("../models/user")
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");

class Order {
  async getAllOrders(req, res) {
    try {
      let Orders = await orderModel
        .find({})
        // .populate("history")
        .populate("user", "name email")
        .sort({ _id: -1 });
      if (Orders) {
        return res.json({ Orders });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async getOrderByUser(req, res) {
    let { token } = req.body;
    if (!token) {
      return res.json({ message: "All filled must be required" });
    } else {
      try {
        let decoded = jwt.verify(token, JWT_SECRET);
        let Order = await orderModel
          .find({ user: decoded._id })
          // .populate("allProduct.id", "pName pImages pPrice")
          .populate("user", "name email")
          .sort({ _id: -1 });
        if (Order) {
          return res.json({ Order });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  async postCreateOrder(req, res) {
    let { allProduct, amount, transactionId, address, phone, paymentMode, token } = req.body;
    let decoded = jwt.verify(token, JWT_SECRET);
    if (
      !allProduct ||
      !amount ||
      // !address ||
      // !phone ||
      !paymentMode ||
      !token
    ) {
      return res.json({ err: "All filled must be required" });
    } else {
      try {
        if(phone === "" && address === ""){
          let currentUser = await userModel
                .findById(decoded._id)
                .select("phoneNumber address")
          console.log(currentUser)
          address = currentUser.address;
          phone = currentUser.phoneNumber;
        }
        let newOrder = new orderModel({
          allProduct,
          user: decoded._id,
          amount,
          address,
          phone,
          paymentMode,
        });
        let save = await newOrder.save();
        if (save) {
          console.log(save)
          let orderId = await userModel.updateOne({_id: decoded._id},{$push: {history:save._id}})
          if(orderId){
            console.log(orderId)
          }
          return res.json({ success: "Order created successfully",
                            orderId: save._id
        });
        }
      } catch (err) {
        return res.json({ error: err });
      }
    }
  }

  async postUpdateOrder(req, res) {
    let { oId, status } = req.body;
    if (!oId || !status) {
      return res.json({ message: "All filled must be required" });
    } else {
      let currentOrder = await orderModel.findByIdAndUpdate(oId, {
        status: status,
        updatedAt: Date.now(),
      });
      currentOrder.exec((err, result) => {
        if (err) console.log(err);
        return res.json({ success: "Order updated successfully" });
      });
    }
  }

  async postDeleteOrder(req, res) {
    let { oId } = req.body;
    if (!oId) {
      return res.json({ error: "All filled must be required" });
    } else {
      try {
        let deleteOrder = await orderModel.findByIdAndDelete(oId);
        if (deleteOrder) {
          return res.json({ success: "Order deleted successfully" });
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  async returnOrder(req, res) {
    let { bankAccountNo, ifscCode, bankName, bankBranch, token , orderId} = req.body;
    let decoded = jwt.verify(token, JWT_SECRET);

    let user = await userModel.findById({_id: decoded._id});
    if (user){
      /**
 *
 * This call sends a message to the given recipient with vars and custom vars.
 *
 */
const mailjet = require ('node-mailjet')
.connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)
const request = mailjet
.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": "alpinestationeries@gmail.com",
        "Name": "Return Order"
      },
      "To": [
        {
          "Email": "alpinestationeries@gmail.com",
          "Name": "passenger 1"
        }
      ],
      "TemplateID": 3018067,
      "TemplateLanguage": true,
      "Subject": "Hey Admin, we have return request",
      "Variables": {
    "userName": user.Name,
    "phoneNumber": user.phone,
    "email": user.email,
    "userAddress": user.address,
    "pinCode": user.pin,
    "orderId": orderId,
    "bankName": bankName,
    "ifscCode": ifscCode,
    "bankBranch": bankBranch,
    "accountNumber": bankAccountNo,
  }
    }
  ]
})
request
.then((result) => {
  console.log(result.body)
  res.send(result.body.Messages[0].Status)
})
.catch((err) => {
res.status(400).send("failed")
})
    }
 
  }

}

const ordersController = new Order();
module.exports = ordersController;
