var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('admin/novedades',{ //login.hbs
    layout:'admin/layout', title: 'Administrador',  //layout.hbs
    user: req.session.name
  });
});

module.exports = router;