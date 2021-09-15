
const { Router, response } = require('express');

const { usuariosGet, 
        usuariosPut, 
        usuariosPost, 
        usuariosDelete, 
        usuariosPatch } = require('../controllers/usuarios');


const router = Router();


module.exports = router;


router.get('/', usuariosGet );

router.put('/:id', usuariosPut );

router.post('/', usuariosPost);

router.delete('/', usuariosDelete );

router.patch('/', usuariosPatch );


