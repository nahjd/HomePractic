const Nahid = require("./../models/nahidModel");

const getAllNahid = async (req, res) => {
  let allNahid = await Nahid.find({});
  res.send(allNahid);
};

const postNahid = async (req, res) => {
  let found = await Nahid.findOne({ _id: req.body.id });
  if (found) {
    console.log("This is exist");
  } else {
    const newNahid = new Nahid(req.body);
    await newNahid.save();
  }
};

const getNahidById = async (req, res) => {
  let found = await Nahid.findOne({ _id: req.params.id });
  res.send(found);
};

const deleteNahid = async (req, res) => {
  let found = await Nahid.findOne({ _id: req.params.id });
  if (found) {
    await Nahid.findByIdAndDelete(req.params.id);
    res.send(`Nahid with ID ${req.params.id} deleted successfully`);
  } else {
    res.send("Nahid not found");
  }
};

const updateNahid = async (req, res) => {
  let updatedNahid = await Nahid.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.send(updatedNahid);
};

const putNahid = async (req, res) => {
  let updatedNahid = await Nahid.replaceOne({ _id: req.params.id }, req.body);
  res.send(updatedNahid);
};

module.exports = {
  getAllNahid,
  postNahid,
  getNahidById,
  deleteNahid,
  updateNahid,
  putNahid,
};
