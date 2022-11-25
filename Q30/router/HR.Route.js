const service = require('../service/HR.Service');
const router = require('express').Router();

router.get('/resource', service.getAllResources);
router.get('/resource/:id', service.getResourceById);
router.get('/resource/role/:role', service.getResourcesByRole);
router.post('/resource', service.addResource);
router.put('/resource/:id', service.updateResource);
module.exports = router;