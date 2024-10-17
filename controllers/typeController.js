const { Type } = require("../models");

const getAllTypes = async (req, res) => {
  try {
    const types = await Type.find();
    res.json(types);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getTypeById = async (req, res) => {
  try {
    const { id } = req.params;
    const type = await Type.findById(id);
    if (type) {
      return res.json(type);
    }
    return res.status(404).send(`that type with ID not found`);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const getTypeByName = async (req, res) => {
  try {
    const { name } = req.params;
    console.log(`Searching for type:`, name);
    const type = await Type.findOne({ type_name: name });
    if (type) {
      return res.json(type);
    }
    return res.status(404).send(`${name} not found`);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const createType = async (req, res) => {
  try {
    const type = await new Type(req.body);
    await type.save();
    return res.status(201).json({ type });
  } catch (e) {
    return res.status(500).json({ error: error.message });
  }
};

const updateType = async (req, res) => {
  try {
    let { id } = req.params;
    let type = await Type.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (type) {
      return res.status(200).json(type);
    }
    throw new Error("type not found");
  } catch (e) {
    return res.status(500).send(error.message);
  }
};

const deleteType = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Type.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Type deleted");
    }
    throw new Error("Type not found");
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

module.exports = {
  getAllTypes,
  getTypeById,
  getTypeByName,
  createType,
  updateType,
  deleteType,
};
