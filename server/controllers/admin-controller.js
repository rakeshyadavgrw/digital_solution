const User = require("../models/user-model");
const Contact = require("../models/contact-model");

const getAllUsers = async (req, res) => {
  try {
    const user = await User.find({}, { password: 0 });
    if (!user || user.length === 0) {
      return res.status(404).json({ message: "No Users Found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    next(error);
    
  } 
};

const getAllContacts = async (req, res) => {
  try {
    const contact = await Contact.find({}, { password: 0 });
    if (!contact || contact.length === 0) {
      return res.status(404).json({ message: "No Contacts Found" });
    }

    return res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
};

const deletecontactdata = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "Contact delete successfully" }); 
  } catch (error) {
    next(error);
  } 
};
const deleteuserdata = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User delete successfully" });
  } catch (error) {
    next(error);
  }
};

const getuserdata = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
   
    return res.status(200).json(data);
  } catch (error) { 
    next(error); 
  }
};

const updateuserdata = async (req, res) => {
  try {
    const id = req.params.id;
    const updateddata = req.body;
    const updatinguserdata = await User.updateOne(
      { _id: id },
      { $set: updateddata }
    );
    return res.status(200).json(updatinguserdata);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllUsers,
  getAllContacts,
  deleteuserdata,
  getuserdata,
  updateuserdata,
  deletecontactdata
};
