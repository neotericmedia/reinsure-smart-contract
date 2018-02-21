import mongoose = require("mongoose");

interface ApiModel extends mongoose.Document{
  name: string;
}




export = ApiModel;