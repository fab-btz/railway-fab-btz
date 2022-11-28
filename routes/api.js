var express = require('express');
var router = express.Router();
var projectsModel = require('./../models/projectsModel');
//para trabajar con imagenes
var util = require('util');
var cloudinary = require('cloudinary').v2;
//mandar mail traemos nodemailer
var nodemailer = require('nodemailer');

//const uploader = util.promisify(cloudinary.uploader.upload);
//const destroy = util.promisify(cloudinary.uploader.destroy);

router.get('/projects', async function (req, res, next) {
  var projects = await projectsModel.getProjects();

  //solo para imagenes sino sin el map
  projects = projects.map(projects => {
    if (projects.image_id) {
      const image = cloudinary.url(projects.image_id, {
        width: 150,
        height: 200,
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

  res.json(projects);
});

router.post('/contact', async (req, res) => {
  const mail = {
    to: 'fabianbenitez25@gmail.com',
    subject: 'Contact Web',
    html: `${req.body.nombre} se contacto a traves de la web
     y quiere más información a este correo: ${req.body.email} 
     <br> Asunto: ${req.body.asunto}
     <br> Además, hizo el siguiente comentario: ${req.body.mensaje}
     <br>`
  }

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  }); //cierra transport

  await transport.sendMail(mail);

  res.status(201).json({
    error: false,
    message: 'Mensaje enviado con exito!'
  });

});

module.exports = router;