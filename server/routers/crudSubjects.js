const express = require('express');
const router = express.Router();
var table = require('../models/subjects');
var cors = require('cors'); // We will use CORS to enable cross origin domain requests.

const strUrlPath = '/';

/* GET ALL BOOKS */
router.get(strUrlPath, cors(), function (req, res, next) {
  if (req.query.member === undefined) {
    console.log('I am get all ++++subjects++++++++');
    table.find(function (err, products) {
      if (err) return next(err);
      res.json(products);
    });
    return;
  }
  if (req.query.member.length > 0) {
    console.log('I am here++++subjects++');
    console.log(req.query.member);
    let qryStr = req.query.member;

    table.findOne({ member: qryStr }, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  }
});

/* GET SINGLE BY ID */
router.get(strUrlPath + '/:member', cors(), function (req, res, next) {
  console.log('I am here++subjects+++');
  console.log(req.query.email);

  var email = req.query.email;

  table.findById(email, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE  */
router.post(strUrlPath, cors(), function (req, res, next) {
  let data = req.body;
  console.log(data);
  data._id = null;
  table
    .create(data)
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      res.json(err);
    });
});

/* UPDATE  */
router.put(strUrlPath, cors(), function (req, res, next) {
  console.log('I am update +++++subject+++++++' + req.params);
  table.findByIdAndUpdate(req.body._id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE */
router.delete(strUrlPath + '/:id', cors(), function (req, res, next) {
  console.log('I am delete ++++++++++++');
  console.log(req.params.id);
  tblStations.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
