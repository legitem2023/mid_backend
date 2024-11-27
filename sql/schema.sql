-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 27, 2024 at 04:55 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `Image` varchar(200) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `Image`, `name`, `email`, `password`, `created_at`) VALUES
(1, 'public/uploads/1732713695103.webp', 'Robert', 'ezekiel282@gmail.com', '$2b$10$XFZwOZrC/MM4PymteppHa.a40KPDHdIluz2.KDFdL0xrDq.teWgim', '2024-11-27 05:19:14'),
(2, 'public/uploads/1732713140766.webp', 'Rotheis', 'Rotheis@gmail.com', 'TRTRT', '2024-11-27 06:27:24'),
(11, 'public/uploads/1732713650322.jpg', 'Edited', 'Edited@yahoo.com', '567', '2024-11-27 10:37:11'),
(19, 'public/uploads/1732714014235.jpg', 'Jeep', 'Legitem2023@gmail.com', '2ddyjrv15G6', '2024-11-27 11:08:36'),
(42, 'public/uploads/1732717217515.avif', 'Jeep', 'robert_sanco_marquez1988@yahoo.com', '$2b$10$4QSL9kh0hxw2AdG05F9/zuAX5i/iS37vKIMcouQhLvCC27ijf0fBO', '2024-11-27 14:20:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
