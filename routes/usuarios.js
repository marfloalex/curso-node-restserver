const {Router}= require('express');
const { check } = require('express-validator');
const {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
  usuariosGetJson}=require('../controllers/usuarios');
const {validarCampos}=require('../middlewares/validar-campos');
const {esRolevalido,emailExiste,existeUsuarioPorId}=require('../helpers/db-validators');
const router= Router();

router.get('/',usuariosGet);

router.post('/',[
  check('nombre','El nombre no es valido').not().isEmpty(),
  check('password','El password debe ser mas de 6 letras').isLength({min:6}),
  check('correo','El correo no es valido').isEmail(),
  check('correo').custom(emailExiste),
  check('rol').custom(esRolevalido),
  validarCampos],usuariosPost);

router.put('/:id',[
  check('id','No es un ID valido').isMongoId(),
  check('id').custom(existeUsuarioPorId),
  check('rol').custom(esRolevalido),
  validarCampos
],usuariosPut);

router.patch('/',usuariosPatch);

router.delete('/:id',[check('id','No es un ID valido').isMongoId(),
check('id').custom(existeUsuarioPorId),
validarCampos],usuariosDelete);

router.get('/json',usuariosGetJson);



module.exports=router;