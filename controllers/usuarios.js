const { response, request } = require('express');

const usuariosGet = (req = request, res = response)  => {
  const {q , nombre = ' no name', apikey, page = 1, limit } = req.query;


    res.status(403). json({                
        msg:'get api - controlador',
        q,        
        apikey,
        nombre,
        page,
        limit
    })
  } 

  const usuariosPost = (req, res)  => {

    const body = req.body;
    const {nombre , edad} = req.body;
    res.status(201). json({                
        msg:'post api - controlador',        
        nombre,
        edad
    })
  }

  const usuariosPut = (req, res)  => {
    const id = req.params.id;
    res.status(201). json({                
        msg:'put api - controlador',
        id
    })
  }

  const usuariosPatch = (req, res)  => {
    res.status(403). json({                
        msg:'patch api -  controlador'
    })
  }

  const usuariosDelete = (req, res)  => {
    res.status(403). json({                
        msg:'delete api - controlador'
    })
  }


  module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
  }