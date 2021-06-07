const { response,request } = require('express');
const Usuario=require('../models/usuario');
const bcryptjs=require('bcryptjs');

const usuariosGet= async(req=request, res=response)=> {
    
    const {limite=5,desde=0}=req.query;

    // const usuarios=await Usuario.find({estado:true})
    // .skip(Number(desde))
    // .limit(Number(limite));
    
    // const total=await Usuario.countDocuments({estado:true});

    const [total,usuarios]=await Promise.all([
      Usuario.countDocuments({estado:true}),
      Usuario.find({estado:true})
    .skip(Number(desde))
    .limit(Number(limite))
    
    ]);

    res.json({
      //resp
      total,
      usuarios
    })
  }


const usuariosPost= async(req, res=response)=> {

    //Body para devolver todo lo enviado en el consumo
    const {nombre,correo,password,rol}=req.body;
    const usuario= new Usuario({nombre,correo,password,rol});
    
    //encriptar contraseña
    const salt=bcryptjs.genSaltSync();
    usuario.password=bcryptjs.hashSync(password,salt);

    //Guardar
    await usuario.save();

    res.status(201).json({

        ok:true,
        usuario
    })
}
 

const usuariosPut= async(req, res=response)=> {

    const {id}=req.params;
    const {_id,password,google,correo,...resto}=req.body;

    //TODo validar contra base de datos
    if(password){
        
        //encriptar contraseña
        const salt=bcryptjs.genSaltSync();
        resto.password=bcryptjs.hashSync(password,salt);
    }

    const usuario=await Usuario.findByIdAndUpdate(id,resto);

    res.json({usuario });
}

const usuariosPatch=(req, res=response)=> {
    res.json({

        ok:true,
        msg:'patch API - Controlador'
    })
}

const usuariosDelete=async (req, res=response)=> {
   
    const {id}=req.params;
    
    //borrado fisico
    //const usuario= await Usuario.findByIdAndDelete(id);

    const usuario= await Usuario.findByIdAndUpdate(id,{estado:false});
    res.json({
        usuario
    })
}


const usuariosGetJson=(req, res=response)=> {
   
    res.json({}

    )
}

module.exports={
    
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
    usuariosGetJson

}