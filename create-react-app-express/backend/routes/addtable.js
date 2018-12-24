const express = require('express');
const router = express.Router();
const Table = require('./../models/modelTable');

// router.get("/getData", (req, res) => {
//     Table.find((err, data) => {
//       if (err) return res.json({ success: false, error: err });
//       return res.json({ success: true, data: data });
//     });
// });

router.post('/addTable', (req, res) => {
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

module.exports = router;