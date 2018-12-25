const express = require('express');
const router = express.Router();
const Table = require('../models/modelTable');

// this is our get method
// this method fetches all available data in our database
router.get("/", (req, res) => {
  Table.find((err, data) => {
    // console.log(req);
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// this is our create method
// this method adds new data in our database
router.post('/add', (req, res) => {
  console.log('/addTable work')
  let data = new Table();

  const { id, status, tableName } = req.body;

  if ((!id && id !== 0) || !status || !tableName) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.tableName = tableName;
  data.status = status;
  data.id = id;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our delete method
// this method removes existing data in our database
router.delete("/delete", (req, res) => {
  const { _id } = req.body;
  Table.findOneAndDelete({ "_id": _id }, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// this is our update method
// this method overwrites existing data in our database
router.post("/update", (req, res) => {
  const { id, update } = req.body;
  Table.findOneAndUpdate({ "_id" : id }, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

module.exports = router;