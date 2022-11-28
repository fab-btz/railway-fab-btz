var express = require('express');
//const { route } = require('..');
var router = express.Router();

var usersModel = require('./../../models/usersModel');

router.get('/', function(req, res, next) {
  res.render('./admin/login',{ //login.hbs SI FALLA TODO AGREGUE EL PUNTO ESE ACA O QUITE YA NO SE
    layout:'admin/layout', //layout.hbs 
    title: 'Login'
  });
});

router.get('/logout', function (req, res, next) {
  req.session.destroy();
  //res.redirect('/admin/login');
  res.render('./admin/login', {
    layout: 'admin/layout',
    title: 'Login'
  });
});

router.post('/', async (req, res, next) => {
  try {
    var user = req.body.user_name;
    var password = req.body.user_pass;

    var data = await usersModel.getUserByUsernameAndPassword(user, password);

    if (data != undefined) {
      
      req.session.id_usuario = data.id;
      req.session.name = data.name;
      
      //redireccionar segun role de usuario
      // if (req.session.id_usuario == 2) {
      //   res.redirect('/admin/administrador');  
      // } else {
      //   res.redirect('/admin/novedades');  
      // }
      // res.redirect('/admin/novedades'); yo cambie a proyectos
      res.redirect('/admin/projects');
      
    } else {
      res.render('./admin/login', {
        layout: 'admin/layout',
        error: true,
        title: 'Login'
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;