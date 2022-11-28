var express = require('express');
var router = express.Router();
//para trabajar con imagenes
var util = require('util');
var cloudinary = require('cloudinary').v2;

const uploader = util.promisify(cloudinary.uploader.upload);

const destroy = util.promisify(cloudinary.uploader.destroy);

var projectsModel = require('./../../models/projectsModel');


router.get('/', async function(req, res, next) {
  
  var projects = await projectsModel.getProjects();
  //solo para imagenes sino sin el map
  projects = projects.map(projects => {
    if (projects.image_id) {
      const image = cloudinary.image(projects.image_id,{
        width: 100,
        height: 100,
        crop: 'fill' //pad
      });
      return {
        ...projects,
        image
      }
    } else {
      return {
        ...projects,
        image: ''  
      }
    }
  });
  //solo datos
  res.render('./admin/projects',{
    layout:'admin/layout', 
    title: 'Administrador de Proyectos',
    user: req.session.name,
    projects
  });
});

router.get('/add', (req, res, next) => {
  res.render('admin/add', {
    layout: 'admin/layout',
    title: 'Agregar Proyecto'
  });
});

router.post('/add', async (req, res, next) => {
  try {
    //solo para imagenes sino sin el map
    var image_id = '';
    //console.log(req.files.image);

    if (req.files && Object.keys(req.files).length > 0) {
      image = req.files.image;
      image_id = (await uploader(image.tempFilePath)).public_id;
    }
    //solo datos y le sacamos el spread y mandamos solo el body
    if (req.body.name != "" 
        && req.body.lenguage != "" 
        && req.body.type != ""
        && req.body.url != "") {

        await projectsModel.insertProject({
          ...req.body, //spread > datos del body
          image_id
      });
      res.redirect('/admin/projects');      
    } else {
      res.render('./admin/add', {
      layout: 'admin/layout',
      title: 'Agregar Proyecto',
      error: true,
      message: 'Los campos Nombre, Lenguaje, Tipo y URL son requeridos'
      });    
    }
  } catch (error) {
    console.log(error);
    res.render('./admin/add', {
      layout: 'admin/layout',
      title: 'Agregar Proyecto',
      error: true,
      message: 'No se puego agregar el Proyecto'
    });
  }
});

router.get('/delete/:id', async (req, res, next) => {
  var id = req.params.id;

  let project = await projectsModel.getProjectById(id);

  if (project.image_id) {
    await (destroy(project.image_id));
  }
  
  await projectsModel.deleteProject(id);
  //console.log(id);
  res.redirect('/admin/projects');
});

router.get('/edit/:id', async (req, res, next) => {
  let id = req.params.id;
  let project = await projectsModel.getProjectById(id);
  res.render('./admin/edit', {
    layout: 'admin/layout',
    title: 'Editar',
    project
  });
});

router.post('/edit', async (req, res, next) => {
  try {
    //solo para imagenes sino sin el map
    let image_id = req.body.original_image;
    
    let delete_old_img = false;

    if (req.body.image_delete === '1') {
      image_id = null;
      delete_old_img = true;      
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        image = req.files.image;
        image_id = (await uploader(image.tempFilePath)).public_id;
        delete_old_img = true;        
      }
    }
    if (delete_old_img && req.body.original_image) {
      await (destroy(req.body.original_image));
    }

    let obj = {
      name: req.body.name,
      lenguage: req.body.lenguage,
      type: req.body.type,
      url: req.body.url,
      description: req.body.description,
      image_id // sin img se saca esto
    }

    await projectsModel.editProject(obj, req.body.id);
    res.redirect('/admin/projects');

  } catch (error) {
    console.log(error);
    res.render('./admin/edit', {
      layout: 'admin/layout',
      title: 'Editar',
      error: true,
      message: 'No se pudo modificar el Proyecto'
    })
  }
})

module.exports = router;