const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@decs Get all Contact
//@route GET /api/contacts
//@access public
const getAllContact = asyncHandler( async (req,res)=> {
    const contact = await Contact.find();
    res.status(200).json(contact);
});


//@decs Create new contact Contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req,res)=> {
    console.log("body is - ",req.body);
    const {name , email , phone } = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("all field are mandotory")
    }

    const contact = await Contact.create({
        name,email,phone
    })

    res.status(201).json(contact);
});

//@decs GET contact
//@route GET /api/contacts/:1
//@access public
const getContact = asyncHandler(async(req,res)=> {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }
    res.status(200).json(contact);
});

//@decs GET contact
//@route GET /api/contacts/:1
//@access public
const deleteContact = asyncHandler(async(req,res)=> {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }

    console.log("1");
    await Contact.findByIdAndRemove(contact.id);
    console.log("2");
    res.status(200).json(contact);
});

//@decs GET contact 
//@route GET /api/contacts/:1
//@access public
const updateContact = asyncHandler(async(req,res)=> {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }

    const upadtedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true
        }
    );
    res.status(200).json(upadtedContact);
});


module.exports = { getAllContact,getContact,createContact,deleteContact,updateContact } 