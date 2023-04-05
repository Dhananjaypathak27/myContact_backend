const express = require("express");
const router = express.Router();

const { getAllContact,getContact,createContact,deleteContact,updateContact } = require("../controller/contactController")

router.route("/").get(getAllContact).post(createContact);

router.route("/:id").delete(deleteContact).put(updateContact).get(getContact);



module.exports = router;