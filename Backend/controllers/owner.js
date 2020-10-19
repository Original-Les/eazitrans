// in controllers/Owner.js

const Owner = require('../models/owner');
const bcrypt = require('bcrypt');

exports.createOwner = (req, res, next) => {
  const owner = new Owner({
    username: req.body.username,
    email: req.body.email,
    cell: req.body.cell,
    password: req.body.password,
    f_name: req.body.f_name,
    l_name: req.body.l_name,
  });

  owner.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};


exports.getOneOwner = (req, res, next) => {
    Owner.findOne({
      _id: req.params.id
    }).then(
      (Owner) => {
        res.status(200).json(Owner);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };

exports.modifyOwner =  (req, res, next) => {
    const owner = new Owner({
      _id: req.params.id,
      username: req.body.username,
      email: req.body.email,
      cell: req.body.cell,
      f_name: req.body.f_name,
      l_name: req.body.l_name,
    });
    owner.updateOne({_id: req.params.id}, Owner).then(
      () => {
        res.status(201).json({
          message: 'Owner updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  exports.deleteOwner = (req, res, next) => {
    Owner.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  exports.getAllOwner = (req, res, next) => {
    Owner.find().then(
      (Owners) => {
        res.status(200).json(Owners);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };
  