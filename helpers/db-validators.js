const Role=require('../models/role');
const Usuario=require('../models/usuario');

const esRolevalido= async(rol='')=>{

    const existeRol= await Role.findOne({rol});
    if(!existeRol){
      throw new Error(`El rol ${rol} no esta registrado en la base de datos.`);
    }
  }

  const emailExiste= async(correo='')=>{

    const existeEmail=await Usuario.findOne({correo});
    if(existeEmail){
      throw new Error(`El email ${correo} ya esta registrado en la base de datos.`);
    }   
  }

  const existeUsuarioPorId= async(id='')=>{

    const existeUsuario=await Usuario.findById(id);
    if(!existeUsuario){
      throw new Error(`El ID ${id} no existe .`);
    }   
  }

  module.exports={
      esRolevalido,
      emailExiste,
      existeUsuarioPorId
  }