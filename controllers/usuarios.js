const { response,request } = require('express');

const usuariosGet=(req=request, res=response)=> {
    
    const {q,nombre='No name',apikey,page='10',limit}=req.query;
    res.json({

        ok:true,
        msg:'get API - Controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    })
  }


const usuariosPost= (req, res=response)=> {

    //Body para devolver todo lo enviado en el consumo
    const {nombre,edad}=req.body;

    res.status(201).json({

        ok:true,
        msg:'post API - Controlador',
        nombre,
        edad
    })
}
 

const usuariosPut= (req, res=response)=> {

    const id=req.params.id;
    res.status(400).json({

        ok:true,
        msg:'put API - Controlador',
        id
    })
}

const usuariosPatch=(req, res=response)=> {
    res.json({

        ok:true,
        msg:'patch API - Controlador'
    })
}

const usuariosDelete=(req, res=response)=> {
   
    const id=req.params.id;
    
    res.json({

        ok:true,
        msg:'delete API - Controlador',
        id
    })
}

module.exports={
    
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete

}