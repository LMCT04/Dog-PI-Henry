const { Router } = require('express');
const dogRouter = require('./dogRoute')
const temperamentRouter = require('./temperamentRoute')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use('/dog', dogRouter)
router.use('/temperament', temperamentRouter)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
