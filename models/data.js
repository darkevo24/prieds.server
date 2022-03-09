const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    ID : {
        type : Number,
        required : true
    },
    CustomerName : {
        type : String,
        required : true
    },
    Pic : {
        type : String,
        required : true
    },
    City : {
        type : String,
        required : true
    },
    Remark : {
        type : String,
        required : true
    },
    NPWP : {
        type : Number,
        required : true
    },
    CustomerPrice : {
        type : Number,
        required : true
    },
    Address : {
        type : String,
        required : true
    },
    Address2 : {
        type : String,
        required : true
    },
    Contact : {
        type : Number,
        required : true
    },
    Region : {
        type : String,
        required : true
    },
    Province : {
        type : String,
        required : true
    },
    Kuota : {
        type : Number,
        required : true
    },    
    expedition : {
        type : Number,
        required : true
    }
});

const data = mongoose.model("data",dataSchema);
module.exports = data;