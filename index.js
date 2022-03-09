const express = require("express");
const app = express();
const cors = require("cors");
var bodyParser = require('body-parser');
const dataModel = require("./models/data");
const { add } = require("nodemon/lib/rules");
const mongoose = require("mongoose");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://darkevo24:Alvinyoyo9598@cluster0.wswom.mongodb.net/data?retryWrites=true&w=majority",{
    useNewUrlParser : true,
})


app.post("/",function(req,res){
    const id = req.body.id;
    const cusName = req.body.cusName;
    const pic = req.body.pic;
    const city = req.body.city;
    const remark = req.body.remark;
    const npwp = req.body.npwp;
    const price = req.body.price;
    const address = req.body.address;
    const address2 = req.body.address2;
    const contact = req.body.contact;
    const region = req.body.region;
    const province = req.body.province;
    const kuota = req.body.kuota;
    const Expedition = req.body.Expedition;
    const data = new dataModel({
        ID : id,
        CustomerName : cusName,
        Pic : pic,
        City : city,
        Remark : remark,
        NPWP : npwp,
        CustomerPrice : price,
        Address : address,
        Address2 : address2,
        Contact : contact,
        Region : region,
        Province : province,
        Kuota : kuota,
        expedition : Expedition
    });
    data.save();
    res.send("inserted data");
})
app.get("/read",function(req,res){
    dataModel.find({},function(err,result){
        if (err){
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
})


app.listen(3000);