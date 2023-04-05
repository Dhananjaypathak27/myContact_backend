const mongoos = require("mongoose");

const contactSchema = mongoos.Schema({
name: {
type: String,
required: [true, "Please add the contact name"],
},
email: {
type: String,
required: [true, "Please add the contact email address"],
},
phone: {
type: String,
required: [true, "Please add the contact phone number"],
},
},{
    timestamps:true,
});

module.exports = mongoos.model("constact",contactSchema);