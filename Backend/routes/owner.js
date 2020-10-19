const express = require('express');
const router = express.Router();

const ownerCtrl = require('../controllers/owner');

router.get('/', ownerCtrl.getAllOwner);
router.post('/',ownerCtrl.createOwner);
router.get('/:id', ownerCtrl.getOneOwner);
router.put('/:id',ownerCtrl.modifyOwner);
router.delete('/:id', ownerCtrl.deleteOwner);

module.exports = router;