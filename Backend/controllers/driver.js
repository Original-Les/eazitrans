// in controllers/driver.js

const Driver = require('../models/driver');

exports.createDriver = (req, res, next) => {
  const driver = new Driver({
    username: req.body.username,
    email: req.body.email,
    cell: req.body.cell,
    password: req.body.password,
    f_name: req.body.f_name,
    l_name: req.body.l_name,
    license_num: req.body.license_num
  });

  driver.save().then(
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

exports.getOneDriver = (req, res, next) => {
    Driver.findOne({
      _id: req.params.id
    }).then(
      (Driver) => {
        res.status(200).json(Driver);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };

exports.modifyDriver =  (req, res, next) => {
    const driver = new Driver({
      _id: req.params.id,
      username: req.body.username,
      email: req.body.email,
      cell: req.body.cell,
      password: req.body.password,
      f_name: req.body.f_name,
      l_name: req.body.l_name,
      license_num: req.body.license_num
    });
    driver.updateOne({_id: req.params.id}, Driver).then(
      () => {
        res.status(201).json({
          message: 'Driver updated successfully!'
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

  exports.deleteDriver = (req, res, next) => {
    Driver.deleteOne({_id: req.params.id}).then(
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

  exports.getAllDriver = (req, res, next) => {
    Driver.find().then(
      (Drivers) => {
        res.status(200).json(Drivers);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };
  