-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-11-2022 a las 03:41:48
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fab-btz`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `description` text DEFAULT NULL,
  `lenguage` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  `url` varchar(255) NOT NULL,
  `image_id` varchar(255) DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT NULL,
  `update_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `projects`
--

INSERT INTO `projects` (`id`, `name`, `description`, `lenguage`, `type`, `url`, `image_id`, `create_at`, `update_at`) VALUES
(1, 'Contador de Clicks', 'Practica en React JS. Aqui podremos encontrar un contador de Clicks realizados por el usuario. Usando los eventos que el mismo genera, \"EventListener\", y capturamos los clicks, que se van sumando en el visor con un boton en el cual podemos limpiar el total y volver a comenzar. ', 'React JS', 'Práctica', 'http://blackbox22.sytes.net/contador.html', 'oyxwblphnwz1aiepiysq', NULL, NULL),
(2, 'Calculadora', 'Desarrollo de una calculadora en React JS.', 'React JS', 'Práctica', 'http://blackbox22.sytes.net/calculadora.html', 'mfoeht8eh0q87kyvgc25', NULL, NULL),
(3, 'Lista de Tareas', 'Liesta de Tareas. Desarrollado en React JS.  ', 'React JS', 'Práctica', 'http://blackbox22.sytes.net/tasks.html', 'ejsqsuijxmknfw9y16tj', NULL, NULL),
(4, 'Adivina el Número', 'Migración de HTML a React JS de un juego donde se debe adivinar el número.', 'React JS', 'Práctica - Juego', 'http://blackbox22.sytes.net/adivina.html', 'ax3pjceqjxvqdzwtimzi', NULL, NULL),
(5, 'Buscador - Autocompletar', 'Desarrolle a modo de muestra un buscador con autocompletar con una ventana emergente en bootstrap. En este caso puede buscar estos mismo proyectos.', 'PHP - AJAX - BOOTSTRAP', 'Práctica', 'http://blackbox22.sytes.net/autocompletar/index.php', 'q7q1rvxzfbwspbd9cm8y', NULL, NULL),
(6, 'Primer Proyecto', 'Este fue el primer sitio web que desarolle para mi emprendimiento profecional. ', 'PHP', 'Sitio Web', 'http://blackbox22.sytes.net/blackbox/index.php', 'hknti1hm5ingfwhc1a6s', NULL, NULL),
(7, 'ContAR', 'Es solo una muestra de un sistema contable desarrollado en 2020 para un estudio. Por cuestiones de derechos no esta completo.', 'PHP', 'Sistema Contable', 'http://blackbox22.sytes.net/contar/index.php', 'we73vmkpsfvdrtib5lus', NULL, NULL),
(8, 'Panaderia', 'Sistema de Administracion desañado segun los gustos y requerimientos del cliente. Como asi también tiempo y costo. ', 'PHP', 'Sistema de Administracón', 'http://blackbox22.sytes.net/panaderia/index.php', 'tg3ocl6y94ytzguzpnb8', NULL, NULL),
(9, 'Envio y Recepción', 'El cliente necesitaba controlar desde su base de datos cuando un cliente enviaba algo y a su ves si el ya le estaba reponiendo el producto. No se puede observar mucho ya que el programa sigue funcionando y por cuestiones de seguridad no puedo exponer la DB del cliente.', 'PHP', 'Control de Equipos', 'http://blackbox22.sytes.net/agenman/principal.php', 'dirxgaruy7jugrpmmn2l', NULL, NULL),
(10, 'Compra - Venta - Stock', 'Inicie con el desarrollo de un proyecto en un Framework de PHP, LARAVEL. Por falta de tiempo aun no lo he podido terminar.', 'PHP - Laravel 8', 'Administracón', 'http://blackbox22.sytes.net/facturar/public/index.php', 'fo9it7kxm8hxfbthwvaj', NULL, NULL),
(11, 'Página Profesional', 'Desarrollado en 4 horas. Fue una tarea para la diplomatura en Desarrollador Web Full Stack con React y Node JS de la UTN.BA - Centro de E-learning.', 'HTML', 'Promocional', 'http://blackbox22.sytes.net/fab-btz/index.html', 'ohxp6zovpdjk7ku915fw', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT current_timestamp(),
  `password` varchar(200) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'fabian', 'fabianbenitez25@mail.com', '2022-10-21 18:52:13', 'f720ec3e5486f090fd382b68e230b435', NULL, '2022-10-29 22:39:03', '2022-11-24 22:39:03'),
(2, 'pepe', 'pepe@gmail.com', '2022-10-28 01:05:13', 'f720ec3e5486f090fd382b68e230b435', NULL, '2022-10-29 22:39:51', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
