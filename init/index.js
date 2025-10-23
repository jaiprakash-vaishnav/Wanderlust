const mongoose = require("mongoose");
let data = require("./data.js");
const Listing = require("../models/listing.js");


async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

main().then((res)=>{
    console.log("connect Sucessfully");
}).catch((err)=>{
    console.log(err);
});

const initDB = async()=>{
    await Listing.deleteMany({});
    // await Listing.insertOne({title : "Hotal", description:"good place" ,price : 1200, location : "goa",country:"india"});
    data = data.map((obj) => ({...obj, owner : '68ee7bd0cab641d28f482f52'}));
    await Listing.insertMany(data);
    console.log("data was initlize");
};

initDB().then((res)=>{
    // console.log(res);
}).catch((err)=>{
    console.log(err);
});