const {Router} = require('express');
const controllers = require('../controllers');

const router = Router();
const upload = require('../middleware/upload');


router.get('/', (req, res) => res.send('Welcome'))
router.get('/plantas', controllers.getAllPlanta);

router.post('/plantas', controllers.createPlanta);
router.post('/plantas-imagen', upload.single('imagen'), controllers.uploadImage);

router.get('/plantas/:id', controllers.getPlantaById);
router.put('/plantas/:id', controllers.update);

router.delete('/plantas/:id', controllers.deletePlanta);
/*router.get('/plantas', getAllPlanta);
router.get('/plantas/:id', getPlantaById);
router.post('/plantas', createPlanta);
router.put('/plantas/:id', update);
router.delete('/plantas/:id', deletePlanta);*/

module.exports = router;


